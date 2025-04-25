import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Navbar from '../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("shrimp.glb"); // Ensure the model is in the public folder
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
     useEffect(() => {
                    // Change the document title when this page is rendered
                    document.title = "CuiSining - Protein";
                  }, []);
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "150px", marginBottom: "-40px", marginTop: "90px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/Proteins" style={{ color: "black", textDecoration: "none" }}>Proteins</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Shrimp</li>
            </ol>
        </nav>
    );
};

// Shrimp Page
const Shrimp = () => {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>

            <Navbar />
            <Breadcrumb />
            <div className="p1 d-grid justify-content-center align-items-center" style={{ marginBottom: "80px" }}>
                <h1 className="font-weight-900" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "28px" }}>Shrimp</h1>

                <div style={{ borderRadius: "50px", overflow: "hidden" }}>
                    <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 2, 5], fov: 45 }} style={{ height: "500px" }}>
                        <color attach="background" args={["#6c6c6c"]} />
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

                <div className="content-group" style={{ fontSize: "18px", maxWidth: "1000px", margin: "left", textAlign: "left" }}>
                    <div className="section">
                        <p className="p2" style={{ color: "#000000", fontSize: "18px" }}>
                            <b>Description:</b><br />
                            Shrimp is a widely consumed seafood known for its delicate texture and slightly sweet flavor. It is a lean protein
                            that is low in calories and rich in essential nutrients, making it a popular choice for healthy meals. Shrimp is
                            highly versatile and can be prepared in various ways, including boiling, grilling, sautéing, and frying. It is
                            commonly used in dishes such as seafood pasta, shrimp stir-fries, sushi, and gumbo. Due to its quick cooking time,
                            shrimp is a convenient protein source for busy individuals who need fast yet nutritious meal options.
                        </p>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Nutritional Benefits:</b>
                            <ul>
                                <li>High in lean protein</li>
                                <li>Contains omega-3 fatty acids for heart health</li>
                                <li>Rich in selenium, which supports immune function</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Storage Guidelines:</b>
                            <ul>
                                <li>Keep fresh shrimp refrigerated at 0-4°C (32-40°F)</li>
                                <li>Freeze at -18°C (0°F) for long-term storage</li>
                                <li>Cooked shrimp lasts 2-3 days in the fridge</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Common Cooking Methods:</b>
                            <ul>
                                <li>Boiling: Used in seafood soups and pasta, such as "Sinigang na Hipon"</li>
                                <li>Grilling: Enhances natural sweetness, common in "Inihaw na Hipon"</li>
                                <li>Sautéing: Cooks quickly for stir-fries, widely used in "Garlic Butter Shrimp" and "Ginataang Hipon"</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Substitutions for Dietary Needs:</b>
                            <ul>
                                <li>Use chicken or white fish for a similar texture</li>
                                <li>Replace with tofu or mushrooms for a vegetarian alternative</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shrimp;