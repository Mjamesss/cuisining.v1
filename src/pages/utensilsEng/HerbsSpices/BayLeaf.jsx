import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("bayleaf.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Bayleaf= () => {

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Bay Leaf</h1>

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
                        Bay leaves are aromatic leaves commonly used to enhance the flavor of soups, stews, and sauces. They come 
                        from the bay laurel tree and have a slightly floral, earthy, and slightly bitter taste. Since they are 
                        tough and not meant to be eaten, bay leaves are usually removed from dishes before serving.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Contains antioxidants that support immune health</li>
                            <li>Has anti-inflammatory properties</li>
                            <li>May aid digestion and reduce bloating</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Added to soups, stews, and curries for a subtle depth of flavor</li>
                            <li>Used in pickling, marinades, and slow-cooked dishes</li>
                            <li>Infused into broths and sauces for aromatic seasoning</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Slow Cooking: Best when simmered in dishes for extended periods to release flavor</li>
                            <li>Infusion: Steep in hot water or milk for teas and sauces</li>
                            <li>Dried vs. Fresh: Dried bay leaves have a more concentrated flavor than fresh ones</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Bayleaf;