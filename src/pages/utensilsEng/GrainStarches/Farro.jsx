import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("farro.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Farro= () => {
    
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
                <a href="GrainStarches">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900">Farro</h1>

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
                        Farro is an ancient whole grain with a slightly nutty flavor and a firm, chewy texture. It has been a dietary 
                        staple in Mediterranean and Middle Eastern cuisine for centuries, commonly used in soups, salads, and grain-based 
                        dishes. Farro is a great source of plant-based protein, fiber, and essential minerals, making it a nutritious 
                        alternative to rice or pasta. It is often sold in three forms: whole (requiring soaking), semi-pearled (partially 
                        hulled for faster cooking), and pearled (husk removed for the quickest preparation). This hearty grain is an 
                        excellent choice for those looking to add variety and nutrition to their meals.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in fiber, aiding digestion and maintaining gut health</li>
                            <li>Rich in plant-based protein, supporting muscle function</li>
                            <li>Contains iron, magnesium, and antioxidants that promote overall well-being</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Mixed into salads and grain bowls for added texture and nutrition</li>
                            <li>Used as a substitute for rice in risottos and pilafs</li>
                            <li>Cooked into soups and stews to add heartiness and depth of flavor</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Soak whole farro overnight to reduce cooking time</li>
                            <li>Simmer in water or broth until tender, then drain excess liquid</li>
                            <li>Toast before cooking to enhance its nutty, rich flavor</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Farro;