import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Navbar from '../../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("boning.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting Tools</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/knife" style={{ color: "black", textDecoration: "none" }}>Knife</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Boning Knife</li>
            </ol>
        </nav>
    );
};

const Utility = () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Knife";
      }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Boning Knife</h1>

                <div style={{ borderRadius: "50px", overflow: "hidden" }}>
                    <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 2, 5], fov: 45 }} style={{ height: "500px" }}>
                        <color attach="background" args={["#a6a6a6"]} />
                        <Suspense fallback={<Loader />}>
                            <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                                <Stage environment={null}>
                                    <Model />
                                </Stage>
                            </PresentationControls>
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="content-group" style={{ fontSize: "20px", maxWidth: "1000px", margin: "left", textAlign: "left" }}>
                    <p className="p2" style={{ fontSize: "20px" }}>
                        <b>Description:</b><br />
                        A boning knife is a specialized kitchen tool designed for removing bones from meat, poultry, and fish. It has a narrow, sharp, and slightly flexible blade that allows for precise cutting around bones, joints, and connective tissue. Proper handling and a sharp edge ensure efficient and accurate deboning.
                    </p>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Deboning poultry like chicken or turkey</li>
                            <li>Removing bones from beef, pork, or lamb cuts</li>
                            <li>Filleting fish for clean, precise cuts</li>
                            <li>Trimming fat and sinew from meat</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Features & Variations:</b>
                        <ul>
                            <li>Stiff Blade: Best for beef and pork</li>
                            <li>Flexible Blade: Ideal for poultry and fish</li>
                            <li>Semi-Flexible Blade: Good for general-purpose use</li>
                            <li>Curved Blade: Provides better maneuverability</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Handling & Safety Tips:</b>
                        <ul>
                            <li>Always use a cutting board to prevent slipping</li>
                            <li>Hold the handle firmly and cut away from your body</li>
                            <li>Use a sharpening stone or honing rod to maintain a sharp edge</li>
                            <li>Store in a knife block or protective sheath</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Utility;
