import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("shrimp.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Shrimp= () => {

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
                <h1 className="font-weight-900">Shrimp</h1>

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
                    Shrimp is a widely consumed seafood known for its delicate texture and slightly sweet flavor. It is a lean protein 
                    that is low in calories and rich in essential nutrients, making it a popular choice for healthy meals. Shrimp is 
                    highly versatile and can be prepared in various ways, including boiling, grilling, sautéing, and frying. It is 
                    commonly used in dishes such as seafood pasta, shrimp stir-fries, sushi, and gumbo. Due to its quick cooking time, 
                    shrimp is a convenient protein source for busy individuals who need fast yet nutritious meal options.
                    </p>
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in lean protein</li>
                            <li>Contains omega-3 fatty acids for heart health</li>
                            <li>Rich in selenium, which supports immune function</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Keep fresh shrimp refrigerated at 0-4°C (32-40°F)</li>
                            <li>Freeze at -18°C (0°F) for long-term storage</li>
                            <li>Cooked shrimp lasts 2-3 days in the fridge</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Cooking Methods:</b>
                        <ul>
                            <li>Boiling: Used in seafood soups and pasta, such as "Sinigang na Hipon"</li>
                            <li>Grilling: Enhances natural sweetness, common in "Inihaw na Hipon"</li>
                            <li>Sautéing: Cooks quickly for stir-fries, widely used in "Garlic Butter Shrimp" and "Ginataang Hipon"</li>
                        </ul>
                    </div>


                    <div className="p2">
                        <b>Substitutions for Dietary Needs:</b>
                        <ul>
                            <li>Use chicken or white fish for a similar texture</li>
                            <li>Replace with tofu or mushrooms for a vegetarian alternative</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Shrimp;