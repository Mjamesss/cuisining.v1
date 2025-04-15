import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("tomato.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item"><a href="/Vegetables" style={{ color: "black", textDecoration: "none" }}>Vegetables</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Tomato</li>
            </ol>
        </nav>
    );
};

// Tomato Page
const Tomato = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Tomato</h1>

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
                        Tomatoes are juicy, red fruits often used as vegetables in cooking. They come in various sizes and colors,
                        such as cherry, plum, and beefsteak tomatoes. Tomatoes have a balance of sweetness and acidity, making them
                        a key ingredient in sauces, salads, and soups.
                    </p>

                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Rich in lycopene, a powerful antioxidant that supports heart health</li>
                            <li>High in vitamin C, boosting the immune system</li>
                            <li>Contains potassium and fiber for overall well-being</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Sliced fresh in salads and sandwiches</li>
                            <li>Cooked into pasta sauces, soups, and stews</li>
                            <li>Blended into juices and smoothies</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Raw: Used in fresh salads, sandwiches, and bruschetta</li>
                            <li>Roasting: Enhances sweetness and intensifies flavor</li>
                            <li>Sautéing: Softens texture and brings out natural juices</li>
                            <li>Grilling: Adds a smoky flavor and slightly caramelized texture</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tomato;