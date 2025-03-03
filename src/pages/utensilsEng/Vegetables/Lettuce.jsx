import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("lettuce.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Lettuce= () => {

     // Simple Loading Indicator
     const Loader = () => (
        <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial color="gray" wireframe />
        </mesh>
    );

    return (
        <>
            <div className="p5">
                <a href="Vegetables">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900">Lettuce</h1>

            <div style={{ borderRadius: "50px", overflow: "hidden", }}>
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
                            <li> Used as a base for salads and sandwiches</li>
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