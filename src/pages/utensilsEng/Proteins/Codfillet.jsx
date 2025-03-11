import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("codfillet.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Codfillet= () => {

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
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Cod Fillet</h1>

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
                    Cod fillet is a mild, flaky white fish that is highly nutritious and easy to prepare. It is well-known for its 
                    delicate texture and slightly sweet taste, making it an excellent choice for those who prefer lighter seafood 
                    options. Cod is commonly used in dishes such as fish and chips, seafood stews, and baked fish recipes. It is 
                    a lean source of protein and contains essential nutrients like omega-3 fatty acids, which support heart and 
                    brain health. Because of its low mercury content, cod is a safe seafood option for frequent consumption.
                    </p>
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in lean protein with minimal calories</li>
                            <li>Contains omega-3 fatty acids for heart health</li>
                            <li>Provides vitamin B12 for nerve function</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Refrigerate fresh cod at 0-4°C (32-40°F)</li>
                            <li>Freeze for up to 6 months at -18°C (0°F)</li>
                            <li>Cooked cod should be stored for 2-3 days in the fridge</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Cooking Methods:</b>
                        <ul>
                            <li>Baking: Enhances natural flavor with minimal oil, used in "Baked Cod with Calamansi Sauce"</li>
                            <li>Pan-frying: Creates a crispy texture while keeping it flaky inside, often found in "Filipino Escabeche (Sweet & Sour Fish)"</li>
                            <li>Steaming: Preserves nutrients and keeps it moist, commonly prepared as "Steamed Fish with Ginger and Soy Sauce"</li>
                        </ul>
                    </div>


                    <div className="p2">
                        <b>Substitutions for Dietary Needs:</b>
                        <ul>
                            <li>Replace with tilapia or haddock for a similar mild taste</li>
                            <li>Use tofu or jackfruit for a vegetarian alternative</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Codfillet;