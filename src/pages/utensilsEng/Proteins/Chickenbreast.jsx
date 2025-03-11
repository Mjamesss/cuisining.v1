import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("chickenbreast.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Chickenbreast= () => {

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
                <a href="Proteins">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back to Proteins" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Chicken Breast</h1>
                
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
                    Chicken breast is a lean, white meat known for its mild flavor and tender texture, making it a popular 
                    choice for those looking for a healthy source of protein. It is naturally low in fat and calories, 
                    making it ideal for weight management and muscle building diets. Due to its versatility, chicken breast 
                    is widely used in various globalcuisines, from Asian stir fries to Western style grilled dishes. Its neutral 
                    taste allows it to absorb different seasonings and marinades, enhancing its flavor profile. Whether baked, boiled, 
                    grilled, or roasted, chicken breast remains a staple in many nutritious meal plans.
                    </p>
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in lean protein for muscle maintenance</li>
                            <li>Low in fat, ideal for weight-conscious diets</li>
                            <li>Rich in B6, which supports metabolism and immunity</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Keep raw chicken refrigerated at 4°C (40°F)</li>
                            <li>Freeze at -18°C (0°F) for up to 9 months</li>
                            <li>Cooked chicken lasts 3-4 days in the fridge</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Cooking Methods:</b>
                        <ul>
                            <li>Grilling: Locks in moisture while keeping it healthy, commonly used for "Chicken Inasal"</li>
                            <li>Baking: Retains juiciness when cooked at lower heat, great for "Filipino-style roasted chicken"</li>
                            <li>Boiling/Poaching: Perfect for soups and salads, often used in "Arroz Caldo" or "Tinola"</li>
                        </ul>
                    </div>


                    <div className="p2">
                        <b>Substitutions for Dietary Needs:</b>
                        <ul>
                            <li>Use turkey breast for a similar but slightly different flavor</li>
                            <li>Replace with tofu or mushrooms for a vegetarian alternative</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Chickenbreast;