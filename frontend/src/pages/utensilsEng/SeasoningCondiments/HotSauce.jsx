import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("hotsauce.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const HotSauce= () => {
    
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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Hot Sauce</h1>

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
                        Hot sauce is a spicy, tangy condiment made from chili peppers, vinegar, and various seasonings. It ranges 
                        in heat levels depending on the type of peppers used. Hot sauce is popular worldwide, with different variations 
                        like Tabasco, Sriracha, and buffalo sauce, each offering a unique balance of heat and flavor.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Contains capsaicin: Helps boost metabolism and reduce inflammation</li>
                            <li>Rich in vitamins A and C: Supports immune function</li>
                            <li>Low in calories: Adds flavor without extra fat or sugar</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Drizzling: Adds spice to tacos, eggs, and grilled meats</li>
                            <li>Dips & Marinades: Mixed with mayo, sour cream, or yogurt for dipping</li>
                            <li>Cooking: Used in soups, stews, and sauces for an extra kick</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Adjust for Heat Sensitivity: Start with small amounts and add gradually</li>
                            <li>Pair with Dairy: Yogurt or cheese helps balance intense spiciness</li>
                            <li>Use for Layered Flavor: Adds depth when mixed into sauces and soups</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default HotSauce;