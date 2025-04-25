import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("pepper.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Pepper= () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Seasoning And Condiments";
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
                <a href="SeasoningCondiments">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Pepper</h1>

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
                        Pepper is a widely used spice that comes from dried peppercorns, available in black, white, and green varieties. 
                        Black pepper has a pungent, slightly spicy taste, while white pepper has a milder, earthier flavor. It is used 
                        globally to enhance both savory and sweet dishes.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Contains antioxidants: Helps reduce inflammation and improve digestion</li>
                            <li>Rich in piperine: May enhance nutrient absorption</li>
                            <li>Low in calories: Adds spice without additional fat or sodium</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Seasoning: Sprinkled on meats, vegetables, and soups</li>
                            <li>Marinades & Rubs: Used for grilled meats and roasted dishes</li>
                            <li>Sauces & Dressings: Adds depth to creamy and tangy sauces</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Use Freshly Ground Pepper: Releases more flavor than pre-ground varieties</li>
                            <li>Add at the End of Cooking: Preserves its bold aroma and taste</li>
                            <li>Combine with Salt: Enhances the natural flavors of food</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Pepper;