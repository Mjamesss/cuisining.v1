import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Navbar from '../../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("paring.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

// Loader Component
const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

// Breadcrumb Component
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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Paring Knife</li>
            </ol>
        </nav>
    );
};

// Paring Knife Page
const Paring = () => {
     useEffect(() => {
            // Change the document title when this page is rendered
            document.title = "CuiSining - Knife";
          }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Paring Knife</h1>

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
                    <p className="p2" style={{ fontSize: "20px", color: "#000000" }}>
                        <b>Description:</b><br />
                        A paring knife is a small, sharp knife designed for precise cutting tasks. It’s commonly used for peeling fruits and vegetables, trimming fat, deveining shrimp, and making intricate cuts.
                        <br /><br />
                        With its short, pointed blade, a paring knife offers excellent control, making it ideal for delicate kitchen tasks that require accuracy. It is a must-have tool for any kitchen, providing versatility for both simple and detailed food preparation.
                    </p>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Peeling and trimming fruits and vegetables</li>
                            <li>Deveining shrimp and removing seeds</li>
                            <li>Creating garnishes or intricate cuts</li>
                            <li>Trimming fat from meat</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Features & Variations:</b>
                        <ul>
                            <li>Short Blade: Usually 3-4 inches long</li>
                            <li>Pointed Tip: For precise control</li>
                            <li>Flexible or Rigid: Depending on usage</li>
                            <li>Straight or Curved Edge: Varies by preference</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Handling & Safety Tips:</b>
                        <ul>
                            <li>Always use a cutting board for stability</li>
                            <li>Keep the blade sharp for better control</li>
                            <li>Wash and dry immediately after use to prevent rust</li>
                            <li>Store in a knife block or on a magnetic strip</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Paring;
