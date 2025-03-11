import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("rosemary.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Rosemary= () => {

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
                <a href="HerbsSpices">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Rosemary</h1>

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
                        Rosemary is a fragrant, woody herb with needle-like leaves and a strong, piney aroma. It is commonly used 
                        in Mediterranean cuisine to season meats, roasted vegetables, and breads. Fresh or dried, rosemary adds 
                        a distinctive earthy and slightly peppery taste.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Rich in antioxidants that support brain health</li>
                            <li>Contains anti-inflammatory compounds</li>
                            <li>May aid digestion and boost circulation</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Infused into olive oil or butter for enhanced flavor</li>
                            <li>Used as a seasoning for roasted meats, poultry, and potatoes</li>
                            <li>Added to bread dough, soups, and stews for herbal depth</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Roasting: Enhances flavor when paired with meats and root vegetables</li>
                            <li>Infusing: Steep in oil, butter, or broths for added aroma</li>
                            <li>Grilling: Adds a smoky flavor when used as a skewer for meats or vegetables</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Rosemary;