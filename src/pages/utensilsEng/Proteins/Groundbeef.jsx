import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("groundbeef.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Groundbeef= () => {

    
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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Ground Beef</h1>

                <div style={{ borderRadius: "50px", overflow: "hidden", }}>
                    {/* 3D Model Display with Suspense for loading */}
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
                    Ground beef is a versatile meat that can be used in a variety of dishes, from classic hamburgers and tacos to 
                    rich pasta sauces and casseroles. It comes in different fat ratios, allowing people to choose leaner or juicier 
                    options depending on their dietary preferences. Ground beef is easy to cook and absorbs flavors well, making 
                    it an excellent base for many recipes. Whether formed into patties, browned for chili, or used as a filling 
                    for savory pastries, ground beef provides a rich, satisfying taste. It is an important protein source that 
                    also offers essential nutrients like iron and zinc.
                    </p>
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in protein for muscle building</li>
                            <li>Rich in iron for blood health</li>
                            <li>Provides essential amino acids</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Keep raw ground beef refrigerated at 4°C (40°F) for up to 2 days</li>
                            <li>Freeze at -18°C (0°F) for up to 4 months</li>
                            <li>Cooked ground beef should be stored for up to 3 days in the fridge</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Cooking Methods:</b>
                        <ul>
                            <li>Pan-frying: Ideal for burgers and tacos, commonly used in "Tortang Giniling" (Filipino-style omelet with ground beef)</li>
                            <li>Boiling: Used in soups and stews like "Nilagang Baka"</li>
                            <li>Baking: Works well in meatloaf and casseroles, such as "Embutido" (Filipino-style meatloaf)</li>
                        </ul>
                    </div>


                    <div className="p2">
                        <b>Substitutions for Dietary Needs:</b>
                        <ul>
                            <li>Use ground turkey or chicken for a leaner option</li>
                            <li>Replace with lentils or textured vegetable protein for a plant-based alternative</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Groundbeef;