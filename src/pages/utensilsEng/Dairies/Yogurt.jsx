import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("yogurt.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Yogurt= () => {

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
                <a href="Dairies">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900">Yogurt</h1>

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
                        Yogurt is a creamy, tangy dairy product created by fermenting milk with beneficial bacteria, such as Lactobacillus and 
                        Bifidobacterium. This fermentation process not only enhances its texture and flavor but also introduces probiotics that 
                        support digestive health. Yogurt is available in different varieties, including Greek yogurt, regular yogurt, and 
                        plant-based alternatives made from coconut, almond, or soy. It can be enjoyed plain, sweetened, or flavored with 
                        fruits, honey, or spices. Yogurt is not only a nutritious snack but also a versatile ingredient in both cooking and 
                        baking, often used as a base for dips, marinades, and salad dressings.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in probiotics, promoting gut health and digestion</li>
                            <li>Rich in calcium and protein for strong bones and muscles</li>
                            <li>Contains essential vitamins like B12 and riboflavin</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Keep refrigerated at or below 40°F (4°C)</li>
                            <li>Store in its original sealed container to maintain freshness</li>
                            <li>Consume within the expiration date to ensure probiotic effectiveness</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Breakfast: Mixed with fruits, granola, or honey</li>
                            <li>Cooking: Used in marinades, dressings, and sauces</li>
                            <li>Baking: A substitute for sour cream or buttermilk in recipes</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Yogurt;