import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("paprika.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Paprika= () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Herb And Spices";
      }, []);

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Paprika</h1>

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
                        Paprika is a ground spice made from dried red peppers, with flavors ranging from sweet to smoky and spicy, 
                        depending on the variety. It is widely used in European, Middle Eastern, and Latin American dishes to 
                        add color and mild heat.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in vitamin A, supporting vision and immune health</li>
                            <li>Contains capsaicin, which has anti-inflammatory properties</li>
                            <li>Rich in antioxidants that help protect cells from damage</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Sprinkled over roasted meats, vegetables, and potatoes</li>
                            <li>Mixed into spice rubs and marinades for barbecue and grilling</li>
                            <li>Used in soups, stews, and rice dishes for color and mild heat</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Low-heat Cooking: Avoid high heat to prevent bitterness</li>
                            <li>Infusing: Mix into oil or butter to create flavorful bases</li>
                            <li>Blending: Combine with garlic, onion, and chili powders for complex seasoning</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Paprika;