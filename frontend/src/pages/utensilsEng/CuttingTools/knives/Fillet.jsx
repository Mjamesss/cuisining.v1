import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Navbar from '../../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("filletknife.glb"); // Ensure the model is in the public folder
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

     useEffect(() => {
            // Change the document title when this page is rendered
            document.title = "CuiSining - Knife";
          }, []);
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting Tools</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/knife" style={{ color: "black", textDecoration: "none" }}>Knife</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Fillet Knife</li>
            </ol>
        </nav>
    );
};

// Fillet Knife Page
const Fillet = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Fillet Knife</h1>

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
                        A fillet knife is a thin, flexible knife designed for deboning and filleting fish with precision. Its long, narrow blade allows for smooth, precise cuts, making it easy to separate fish meat from the skin and bones.<br /><br />
                        This knife is essential for preparing seafood, as it enables clean fillets with minimal waste. The flexibility of the blade helps navigate around bones and contours, ensuring delicate and accurate cuts for professional-quality results.
                    </p>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Filleting fish with precision</li>
                            <li>Trimming fat and sinew from meat</li>
                            <li>Skinning and deboning poultry</li>
                            <li>Removing silver skin from cuts of meat</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Features & Variations:</b>
                        <ul>
                            <li>Flexible blade for precise cuts</li>
                            <li>Thin, narrow shape for better maneuverability</li>
                            <li>Ergonomic handle for a comfortable grip</li>
                            <li>Corrosion-resistant steel for durability</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Handling & Safety Tips:</b>
                        <ul>
                            <li>Keep the blade sharp for accurate cuts</li>
                            <li>Store the knife in a sheath or knife block</li>
                            <li>Use a non-slip cutting board</li>
                            <li>Clean and dry thoroughly after use to prevent rust</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fillet;
