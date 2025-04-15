import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("oliveoil.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const OliveOil= () => {

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Olive Oil</h1>

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
                        Olive oil is a natural oil extracted from olives, known for its rich, fruity flavor and numerous health 
                        benefits. It is available in different varieties, including extra virgin, virgin, and refined, each with 
                        distinct characteristics. Extra virgin olive oil (EVOO) is the highest quality, obtained through cold
                        pressing without chemical processing, making it ideal for salads and dipping. Olive oil is a key ingredient 
                        in Mediterranean cuisine and is widely recognized for its role in promoting heart health.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in monounsaturated fats: Helps reduce bad cholesterol levels</li>
                            <li>Contains antioxidants: Protects cells from oxidative damage</li>
                            <li>Provides vitamin E: Supports skin and immune health</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Salad Dressings: Adds a smooth, flavorful base for vinaigrettes</li>
                            <li>Drizzling: Enhances the taste of vegetables, bread, and pasta</li>
                            <li>Cooking: Used for sautéing, roasting, and grilling</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Use Extra Virgin for Cold Dishes: Best for dressings and dipping</li>
                            <li>Cook with Regular Olive Oil: Has a higher smoke point for frying</li>
                            <li>Store in a Dark Bottle: Protects the oil from light to maintain quality</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default OliveOil;