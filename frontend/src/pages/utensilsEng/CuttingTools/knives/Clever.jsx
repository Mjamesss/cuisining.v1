import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from "../../../../components/Navbar";

// 3D Model for Cleaver Knife
const Model = (props) => {
    const { scene } = useGLTF("clever.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

// Loading Indicator
const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

// Breadcrumb Navigation for Cleaver Knife
const Breadcrumb = () => {
    return (
        <nav
            aria-label="breadcrumb"
            style={{ marginLeft: "190px", padding: "1 40px", marginBottom: "40px", marginTop: "-2%" }}
        >
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item"><a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting Tools</a></li>
                <li className="breadcrumb-item"><a href="/knife" style={{ color: "black", textDecoration: "none" }}>Knife</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Cleaver Knife</li>
            </ol>
        </nav>
    );
};

// Cleaver Knife Page Content
const Clever = () => {
    return (
        <>
            <Navbar />
            <div className="p5">
                <a href="Knife"></a>
            </div>
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center" style={{ paddingTop: "50px" }}>
                <div className="content-group" style={{ fontSize: "20px", maxWidth: "1000px", textAlign: "left" }}>
                    <h1 className="font-weight-800" style={{ fontSize: "35px" }}>Cleaver Knife</h1>

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

                    <p className="p2" style={{ fontSize: "20px", color: "#000000" }}>
                        <b style={{ color: "#000000" }}>Description:</b><br />
                        A cleaver knife is a large, heavy-duty knife designed for cutting through tough meats, bones, and dense vegetables. It features a broad, rectangular blade that provides both power and precision when chopping, slicing, and crushing ingredients. This knife is commonly used in butchery and professional kitchens for breaking down large cuts of meat, cutting through bones, and preparing hard vegetables like squash. The flat side of the blade can also be used to crush garlic or tenderize meat. Its sturdy design makes it an essential tool for heavy-duty kitchen tasks.
                    </p>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Chopping tough meats and bones</li>
                            <li>Breaking down large cuts of meat</li>
                            <li>Preparing dense vegetables like squash</li>
                            <li>Crushing garlic or tenderizing meat</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Features & Variations:</b>
                        <ul>
                            <li>Broad, rectangular blade for maximum power</li>
                            <li>Heavy-duty construction for durability</li>
                            <li>Flat side for crushing and tenderizing</li>
                            <li>Sturdy handle for a comfortable grip</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Handling & Safety Tips:</b>
                        <ul>
                            <li>Use a cutting board to prevent damage to surfaces</li>
                            <li>Apply firm, controlled pressure when chopping</li>
                            <li>Keep the blade sharp for efficient cutting</li>
                            <li>Store safely in a knife block or sheath</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Clever;
