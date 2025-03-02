import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("milk.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Milk= () => {

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
                <h1 className="font-weight-900">Milk</h1>

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
                        Milk is a nutrient-rich liquid produced by mammals, widely consumed as a beverage and a key ingredient in 
                        ountless recipes. It provides essential nutrients that support growth, bone health, and overall well-being. 
                        Milk comes in various types, including whole, skim, and plant-based alternatives like almond, soy, and oat 
                        milk, catering to different dietary needs. Its mild taste and creamy texture make it a versatile addition 
                        to sweet and savory dishes alike. In addition to drinking, milk is essential for making dairy products 
                        like cheese, butter, and yogurt. It is also a crucial component in baking, sauces, and desserts.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in calcium, essential for strong bones and teeth</li>
                            <li>Good source of protein and vitamin D</li>
                            <li>Contains essential amino acids needed for overall health</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Store in the coldest part of the fridge (not the door)</li>
                            <li>Keep sealed to prevent contamination</li>
                            <li>Consume before the expiration date for best quality</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Beverage: Consumed plain or in smoothies and coffee</li>
                            <li>Cooking: Used in soups, sauces, and gravies</li>
                            <li>Baking: A key ingredient in cakes, bread, and pastries</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Milk;