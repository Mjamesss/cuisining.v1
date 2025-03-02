import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("apple.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Apple= () => {

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
                <a href="Fruits">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900">Apple</h1>

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
                        Apples are one of the most popular and widely consumed fruits worldwide, known for their crisp texture and 
                        naturally sweet or tart flavor. They come in various colors, including red, green, and yellow, each with 
                        its unique taste and level of sweetness. Apples are highly versatile and can be eaten fresh, baked, or used 
                        in salads, desserts, and beverages. With a high water content and natural fiber, they make a refreshing and 
                        nutritious snack.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in fiber, supporting digestion and gut health</li>
                            <li>Rich in vitamin C, which boosts the immune system</li>
                            <li> Contains antioxidants that help protect cells from damage</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Eaten fresh as a healthy snack</li>
                            <li>Sliced into salads for a crunchy, sweet addition</li>
                            <li>Used in baking for pies, tarts, and crisps</li>
                            <li>Pressed into fresh apple juice or cider</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Apple;