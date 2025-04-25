import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("lard.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Lard= () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Oil And Fats";
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
                <a href="OilFats">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Lard</h1>

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
                        Lard is a rendered form of pork fat that has been used in traditional cooking for centuries. It has a smooth 
                        texture and a mild flavor that enhances the richness of dishes. Lard is prized for its high smoke point, 
                        making it ideal for frying, roasting, and baking. Unlike hydrogenated fats, natural lard contains no trans 
                        fats and is a good source of monounsaturated fats. It is especially valued in pastry-making for its ability 
                        to create light, flaky textures.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in monounsaturated fats: Supports heart health</li>
                            <li>Free from trans fats: A natural and traditional fat source</li>
                            <li>Provides a rich, savory flavor: Enhances food taste</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Frying: Used in deep-frying for crispy textures</li>
                            <li>Baking: Creates flaky pie crusts and biscuits</li>
                            <li>Sautéing: Adds depth to traditional dishes like refried beans</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Store in a Cool Place: Keeps fresh longer when refrigerated</li>
                            <li>Use in Pastry Dough: Produces a light and crispy texture</li>
                            <li>Blend with Spices: Enhances flavor in slow-cooked dishes</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Lard;