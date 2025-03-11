import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("canolaoil.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const CanolaOil= () => {

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Canola Oil</h1>

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
                        Canola oil is a light, neutral-flavored vegetable oil derived from the seeds of the canola plant. It is widely 
                        used in various cooking methods due to its high smoke point and mild taste. Canola oil is commonly chosen 
                        for frying, baking, and making salad dressings. It blends well with different ingredients, making it a versatile 
                        option for everyday cooking. With a low saturated fat content and a high proportion of heart-healthy monounsaturated 
                        fats, canola oil is considered one of the healthier cooking oils.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Low in saturated fat: Supports heart health</li>
                            <li>Contains omega-3 fatty acids: Aids in brain and heart function</li>
                            <li>Rich in vitamin E: Acts as an antioxidant to protect cells</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Deep Frying: Works well for crispy foods due to its high smoke point</li>
                            <li>Salad Dressings: Blends smoothly with vinegar and seasonings</li>
                            <li>Baking: Used as a substitute for butter in cakes and muffins</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Use for High-Heat Cooking: Ideal for frying and roasting</li>
                            <li>Store in a Cool Place: Helps prevent oxidation and extends shelf life</li>
                            <li>Mix with Herbs: Infuse with garlic or rosemary for extra flavor</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default CanolaOil;