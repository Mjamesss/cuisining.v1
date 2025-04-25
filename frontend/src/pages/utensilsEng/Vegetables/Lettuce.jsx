import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";
import Navbar from '../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("lettuce.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item"><a href="/Vegetables" style={{ color: "black", textDecoration: "none" }}>Vegetables</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Lettuce</li>
            </ol>
        </nav>
    );
};

const Lettuce = () => {
     useEffect(() => {
                // Change the document title when this page is rendered
                document.title = "CuiSining - Vagetable";
              }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Lettuce</h1>

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
                        Lettuce is a leafy green vegetable commonly used in salads, wraps, and sandwiches. It comes in different
                        varieties, such as romaine, iceberg, and butterhead, each with unique textures and flavors. Lettuce is
                        low in calories but packed with water, making it hydrating and refreshing.
                    </p>

                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Low in calories and high in water content for hydration</li>
                            <li>Contains vitamins A and K for eye and bone health</li>
                            <li>Provides fiber, aiding digestion and gut health</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Used as a base for salads and sandwiches</li>
                            <li>Wrapped around fillings for healthy lettuce wraps</li>
                            <li>Added to burgers, tacos, and spring rolls for crunch</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Raw: Best eaten fresh in salads, wraps, and sandwiches</li>
                            <li>Grilling: Lightly char romaine lettuce for a smoky flavor</li>
                            <li>Sautéing: Stir-fry with garlic and oil for a wilted, flavorful side dish</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lettuce;