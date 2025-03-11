import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("cheese.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Cheese= () => {

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Cheese</h1>

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
                        Cheese is a widely loved dairy product made by curdling milk using rennet or bacterial cultures, leading 
                        to a diverse range of flavors, textures, and aromas. It can be aged or fresh, mild or pungent, soft or 
                        hard, depending on the variety and production process. From creamy brie to sharp cheddar, cheese is used 
                        in cooking, snacking, and baking across different cuisines. Some cheeses, like mozzarella, melt beautifully,
                        making them ideal for pizza and pasta, while others, like parmesan, add depth to dishes with their intense 
                        flavor. The presence of probiotics in certain cheeses also contributes to digestive health.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Excellent source of calcium for bone health</li>
                            <li>High in protein, essential for muscle growth</li>
                            <li>Contains probiotics that support gut health (in some varieties)</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Store in the refrigerator, wrapped in wax paper or an airtight container</li>
                            <li>Hard cheeses last longer, while soft cheeses should be consumed quickly</li>
                            <li>Keep away from moisture to prevent mold growth</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Cooking: Melts well for pasta, pizza, and grilled dishes</li>
                            <li>Snacking: Served with crackers, fruits, and nuts</li>
                            <li>Baking: Used in cheesecakes, pastries, and gratins</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Cheese;