import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("potato.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Potato= () => {

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Potato</h1>

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
                        Potatoes are starchy root vegetables that come in various types, such as russet, red, and Yukon gold, each 
                        suited for different cooking methods. They are one of the most versatile ingredients used worldwide in 
                        countless dishes.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in carbohydrates for energy</li>
                            <li>Good source of potassium, which supports muscle function</li>
                            <li>Contains fiber, aiding digestion and promoting fullness</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Mashed for a creamy side dish</li>
                            <li>Baked as a crispy or soft dish</li>
                            <li>Fried into fries, chips, or hash browns</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Boiling: Ideal for mashed potatoes, potato salads, and soups</li>
                            <li>Baking: Yields a crispy skin with a fluffy interior</li>
                            <li>Frying: Creates crispy fries, hash browns, or chips</li>
                            <li>Roasting: Toss with oil and bake for a caramelized flavor</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Potato;