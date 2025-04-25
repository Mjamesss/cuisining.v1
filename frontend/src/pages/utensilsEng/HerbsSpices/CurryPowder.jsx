import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("currypowder.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Currypowder= () => {
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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Curry Powder</h1>

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
                        Curry powder is a blend of spices, including turmeric, cumin, coriander, and chili powder, giving it a warm, 
                        earthy, and slightly spicy flavor. It is widely used in Indian, Southeast Asian, and Caribbean cuisines to 
                        add depth and complexity to dishes.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Rich in curcumin (from turmeric), which has anti-inflammatory properties</li>
                            <li>Contains antioxidants that support overall health</li>
                            <li>May aid digestion and improve gut health</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Seasoning for curries, soups, and stews</li>
                            <li>Added to marinades for meats and vegetables</li>
                            <li>Used in rice dishes and lentil-based recipes</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Toasting: Lightly toast curry powder in oil to enhance its aroma and flavor</li>
                            <li>Simmering: Best when cooked slowly in liquids like coconut milk or broth</li>
                            <li>Blending: Combine with yogurt or cream for a smooth, flavorful sauce</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Currypowder;