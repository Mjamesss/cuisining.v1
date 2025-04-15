import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("coconutoil.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const CoconutOil= () => {

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
                <a href="OilFats">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Coconut Oil</h1>

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
                        Coconut oil is a plant-based fat extracted from the meat of mature coconuts. It is available in two forms: 
                        refined, which has a neutral taste, and virgin, which retains a mild coconut flavor. Coconut oil is widely 
                        used in both cooking and skincare due to its unique fatty acid composition. It remains solid at cooler 
                        temperatures but melts easily when warmed. Known for its ability to add moisture to baked goods and enhance 
                        the flavor of tropical dishes, coconut oil is a staple in many cuisines.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Contains medium-chain triglycerides (MCTs): Provides quick energy</li>
                            <li>Has antibacterial and antifungal properties: Supports immune health</li>
                            <li>May help boost metabolism: Beneficial for weight management</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Cooking: Used in stir-fries, curries, and tropical dishes</li>
                            <li>Baking: A dairy-free alternative to butter in vegan recipes</li>
                            <li>Skincare: Often used as a natural moisturizer or hair treatment</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Melts at Warm Temperatures: Solidifies below 76°F (24°C)</li>
                            <li>Use for Sautéing: Great for frying vegetables and proteins</li>
                            <li>Enhances Sweet Dishes: Works well in smoothies and desserts</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default CoconutOil;