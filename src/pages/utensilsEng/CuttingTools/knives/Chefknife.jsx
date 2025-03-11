import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("chefsknife.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "190px", padding: "1 40px", marginBottom: "40px", marginTop: "-2%" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item"><a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting Tools</a></li>
                <li className="breadcrumb-item"><a href="/knife" style={{ color: "black", textDecoration: "none" }}>Knife</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Chef's Knife</li>
            </ol>
        </nav>
    );
};

const Chefknife = () => {
    return (
        <>
            <Navbar />
            <div className="p5">
                <a href="Knife"></a>
            </div>
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center" style={{ paddingTop: "50px" }}>
                <div className="content-group" style={{ fontSize: "20px", maxWidth: "1000px", margin: "left", textAlign: "left" }}>
                    <h1 className="font-weight-800" style={{ marginTop: "-50px" }}>Chef's Knife</h1>

                    <div style={{ borderRadius: "50px", overflow: "hidden" }}>
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

                    <p className="p2" style={{ fontSize: "20px", color: "#000000" }}>
                        <b style={{ color: "#000000" }}>Description:</b><br />
                        A chef's knife is a versatile and essential kitchen tool designed for a wide range of tasks. 
                        Its broad, sharp blade is perfect for slicing, dicing, chopping, and mincing a variety of ingredients.
                        The ergonomic handle offers a comfortable grip, making it easy to maneuver.
                        Chef's knives are typically made from high-quality stainless steel or carbon steel, 
                        ensuring durability and sharpness for prolonged use.
                    </p>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Chopping and slicing vegetables, fruits, and herbs</li>
                            <li>Cutting and cubing meat and poultry</li>
                            <li>Mincing garlic, onions, and other aromatics</li>
                            <li>Crushing ingredients like garlic with the flat side</li>
                            <li>Slicing and portioning fish</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Features & Variations:</b>
                        <ul>
                            <li>8 to 12-inch blade length for versatile use</li>
                            <li>High-quality stainless steel or carbon steel construction</li>
                            <li>Full tang design for balance and durability</li>
                            <li>Ergonomic handle for comfortable grip</li>
                            <li>Sharp, slightly curved blade for efficient chopping</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Handling & Safety Tips:</b>
                        <ul>
                            <li>Hold the handle firmly and pinch the blade near the handle for better control</li>
                            <li>Use a rocking motion for chopping and slicing</li>
                            <li>Keep the blade sharp to maintain precision and reduce hand strain</li>
                            <li>Cut on soft surfaces like wooden or plastic cutting boards</li>
                            <li>Hand wash and dry immediately to prevent rust or corrosion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chefknife;
