import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("santoku.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Santoku Knife</li>
            </ol>
        </nav>
    );
};

const Santoku = () => {
    return (
        <>
            <Navbar />
            <div className="p5">
                <a href="Knife"></a>
            </div>
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center" style={{ paddingTop: "50px" }}>
                <div className="content-group" style={{ fontSize: "20px", maxWidth: "1000px", margin: "left", textAlign: "left" }}>
                    <h1 className="font-weight-800" style={{ marginTop: "-50px" }}>Santoku Knife</h1>

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
                        <b>Description:</b><br />
                        A Santoku knife is a versatile Japanese knife known for its precision and efficiency. It features a shorter, wider blade with a slight curve, ideal for slicing, dicing, and mincing. The term "Santoku" translates to "three virtues," representing its effectiveness with meat, fish, and vegetables.
                        <br /><br />
                        The granton edge on the blade helps reduce food sticking while cutting. Its lightweight and balanced design make it comfortable to handle, especially for precise tasks and quick chopping motions.
                    </p>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Chopping vegetables and herbs</li>
                            <li>Slicing fish and meat</li>
                            <li>Mincing garlic and onions</li>
                            <li>Dicing fruits and root vegetables</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Features & Variations:</b>
                        <ul>
                            <li>Granton Edge: Reduces food sticking</li>
                            <li>Lightweight and well-balanced design</li>
                            <li>Short, wide blade with a subtle curve</li>
                            <li>Comfortable grip for prolonged use</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Handling & Safety Tips:</b>
                        <ul>
                            <li>Keep the blade sharp to maintain efficiency</li>
                            <li>Hold with a firm grip and cut with a downward motion</li>
                            <li>Store properly to prevent damage to the edge</li>
                            <li>Clean and dry immediately after use to avoid rust</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Santoku;
