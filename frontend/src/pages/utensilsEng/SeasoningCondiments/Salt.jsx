import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("salt.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Salt= () => {

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
                <a href="SeasoningCondiments">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Salt</h1>

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
                        Salt is an essential seasoning made from either evaporated seawater or mined rock salt. It enhances the 
                        natural flavors of food and is used in nearly all types of cooking. There are different varieties, including 
                        table salt, kosher salt, and sea salt, each with unique textures and levels of salinity.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Essential for fluid balance: Helps regulate hydration and muscle function</li>
                            <li>Contains trace minerals: Sea salt provides magnesium, potassium, and calcium</li>
                            <li>Enhances taste: Reduces bitterness and balances sweetness in dishes</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Cooking & Baking: Essential in almost all recipes to enhance flavor</li>
                            <li>Preservation: Used in curing meats, pickling, and fermenting foods</li>
                            <li>Garnishing: Sprinkled on dishes like chocolate or caramel for contrast</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Use Kosher Salt for Cooking: Dissolves evenly and enhances flavors</li>
                            <li>Season Gradually: Helps avoid over-salting</li>
                            <li>Experiment with Different Types: Himalayan, sea salt, and smoked salt offer unique flavors</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Salt;