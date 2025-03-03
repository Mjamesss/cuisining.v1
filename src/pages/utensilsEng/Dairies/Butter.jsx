import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("butter.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Butter= () => {

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
                <h1 className="font-weight-900">Butter</h1>

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
                        Butter is a dairy product made by churning cream or milk, resulting in a smooth, rich, and creamy texture. 
                        It is a staple ingredient in many cuisines worldwide, valued for its ability to enhance flavors and add 
                        moisture to dishes. Butter can vary in taste and texture depending on its source, with options such as 
                        salted, unsalted, cultured, and clarified butter (ghee). It plays a crucial role in both sweet and savory 
                        dishes, offering a distinctive richness that is difficult to replicate. Due to its versatility, butter is 
                        used in everything from simple spreads to complex pastries and sauces.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in healthy fats and fat-soluble vitamins (A, D, E, K)</li>
                            <li>Provides energy but should be consumed in moderation</li>
                            <li>Contains small amounts of protein and calciuma</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Store in the refrigerator to maintain freshness</li>
                            <li>Keep in an airtight container to prevent absorbing odors</li>
                            <li>Can be frozen for long-term storage (up to 6 months)</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Cooking: Enhances flavor in sautéing and frying</li>
                            <li>Baking: Essential for cakes, cookies, and pastries</li>
                            <li>Spreading: Used on bread, toast, and pancakes</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Butter;