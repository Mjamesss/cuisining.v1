import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("barley.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Barley= () => {

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
                <h1 className="font-weight-900">Barley</h1>

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
                        Barley is an ancient whole grain known for its chewy texture and mild, nutty flavor. It has been cultivated 
                        for thousands of years and is widely used in a variety of dishes, including soups, stews, grain bowls, and 
                        bread. Barley is available in different forms, such as hulled barley (the whole grain with only the outer 
                        husk removed), pearl barley (polished for quicker cooking), and barley flour, which is used for baking. Due 
                        to its versatility, it can be enjoyed in both sweet and savory recipes, making it a valuable staple in many 
                        cuisines worldwide.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in fiber, promoting digestive health and satiety</li>
                            <li>Rich in vitamins B and E, supporting energy and skin health</li>
                            <li>Contains antioxidants and essential minerals like magnesium and selenium</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Added to soups and stews for extra texture and heartiness</li>
                            <li>Used in grain bowls and salads for a nutritious boost</li>
                            <li>Milled into flour for baking bread and other baked goods</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Soak hulled barley before cooking to reduce cooking time</li>
                            <li>Simmer in water or broth until tender for a soft, chewy texture</li>
                            <li>Use pearl barley for faster preparation or hulled barley for more fiber</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Barley;