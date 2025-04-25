import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";
import Navbar from '../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("onion.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Onion</li>
            </ol>
        </nav>
    );
};

// Onion Page
const Onion = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Vagetable";
      }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Onion</h1>

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
                        Onions are aromatic vegetables that add depth and flavor to a variety of dishes. They come in different types,
                        including red, white, yellow, and shallots, each with varying levels of sweetness and sharpness. Onions are
                        commonly used as a base for soups, sauces, and stir-fries.
                    </p>

                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Rich in antioxidants that support heart health</li>
                            <li>Contains compounds with anti-inflammatory properties</li>
                            <li>High in vitamin C and fiber for immune and digestive health</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Used as a base for soups, stews, and sauces</li>
                            <li>Added raw to salads, sandwiches, and salsas</li>
                            <li>Caramelized for a sweet, rich topping on burgers or steaks</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Sautéing: Enhances flavor and softens texture, commonly used in stir-fries</li>
                            <li>Caramelizing: Slow-cook in butter or oil until golden brown for a deep, sweet taste</li>
                            <li>Grilling: Adds a smoky, slightly sweet flavor to dishes</li>
                            <li>Pickling: Preserves onions for a tangy, crunchy topping</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Onion;