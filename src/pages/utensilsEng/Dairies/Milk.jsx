import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("milk.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

// Loader Component
const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

// Breadcrumb Component
const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/Dairies" style={{ color: "black", textDecoration: "none" }}>Dairies</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Milk</li>
            </ol>
        </nav>
    );
};

// Milk Page
const Milk = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Milk</h1>

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

                <div className="content-group" style={{ fontSize: "20px", maxWidth: "1000px", margin: "left", textAlign: "left" }}>
                    <p className="p2" style={{ fontSize: "20px" }}>
                        <b>Description:</b><br />
                        Milk is a nutrient-rich liquid produced by mammals, widely consumed as a beverage and a key ingredient in
                        countless recipes. It provides essential nutrients that support growth, bone health, and overall well-being.
                        Milk comes in various types, including whole, skim, and plant-based alternatives like almond, soy, and oat
                        milk, catering to different dietary needs. Its mild taste and creamy texture make it a versatile addition
                        to sweet and savory dishes alike. In addition to drinking, milk is essential for making dairy products
                        like cheese, butter, and yogurt. It is also a crucial component in baking, sauces, and desserts.
                    </p>

                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in calcium, essential for strong bones and teeth</li>
                            <li>Good source of protein and vitamin D</li>
                            <li>Contains essential amino acids needed for overall health</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Store in the coldest part of the fridge (not the door)</li>
                            <li>Keep sealed to prevent contamination</li>
                            <li>Consume before the expiration date for best quality</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Beverage: Consumed plain or in smoothies and coffee</li>
                            <li>Cooking: Used in soups, sauces, and gravies</li>
                            <li>Baking: A key ingredient in cakes, bread, and pastries</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Milk;