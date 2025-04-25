import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("fishsauce.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const FishSauce= () => {

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Fish Sauce</h1>

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
                        Fish sauce is a fermented liquid condiment made from fish and salt, commonly used in Southeast Asian cuisine. 
                        It has a strong, salty, and umami-rich flavor that enhances the taste of many dishes. The fermentation process 
                        can take months to years, developing a deep, complex taste. It is often used as a seasoning in marinades, 
                        dipping sauces, and stir-fried dishes.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Rich in amino acids: Supports digestion and enhances flavor</li>
                            <li>Contains essential minerals: Provides sodium and small amounts of iron</li>
                            <li>Adds natural umami: Reduces the need for additional salt</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Seasoning: Adds depth to stir-fries, soups, and curries</li>
                            <li>Marinades: Used for meats and seafood to enhance flavor</li>
                            <li>Dipping Sauces: Mixed with lime, garlic, and chili for a tangy condiment</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Use Sparingly: A little goes a long way due to its strong flavor</li>
                            <li>Balance with Acid: Pair with lime juice or vinegar to mellow the saltiness</li>
                            <li>Enhance Broths: Adds depth to noodle soups and stews
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default FishSauce;