import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("onion.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Onion= () => {

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Onion</h1>

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
                        Onions are aromatic vegetables that add depth and flavor to a variety of dishes. They come in different types, 
                        including red, white, yellow, and shallots, each with varying levels of sweetness and sharpness. Onions are 
                        commonly used as a base for soups, sauces, and stir-fries.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Rich in antioxidants that support heart health</li>
                            <li>Contains compounds with anti-inflammatory properties</li>
                            <li>High in vitamin C and fiber for immune and digestive health</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Used as a base for soups, stews, and sauces</li>
                            <li>Added raw to salads, sandwiches, and salsas</li>
                            <li>Caramelized for a sweet, rich topping on burgers or steaks</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Sautéing: Enhances flavor and softens texture, commonly used in stir-fries</li>
                            <li>Caramelizing: Slow-cook in butter or oil until golden brown for a deep, sweet taste</li>
                            <li>Grilling: Adds a smoky, slightly sweet flavor to dishes</li>
                            <li>Pickling: Preserves onions for a tangy, crunchy topping</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Onion;