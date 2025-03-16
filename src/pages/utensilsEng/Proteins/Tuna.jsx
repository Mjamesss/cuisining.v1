import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("tuna.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item"><a href="/Proteins" style={{ color: "black", textDecoration: "none" }}>Proteins</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Tuna</li>
            </ol>
        </nav>
    );
};

// Tuna Page
const Tuna = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Tuna</h1>

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
                        Tuna is a highly nutritious fish that is enjoyed both fresh and canned in a variety of dishes. Fresh tuna has a firm
                        texture and rich, meaty flavor, making it perfect for grilling, searing, or slicing raw for sushi and sashimi.
                        Canned tuna, on the other hand, is widely used in sandwiches, salads, and pasta dishes due to its convenience and
                        long shelf life. Tuna is an excellent source of lean protein, healthy omega-3 fatty acids, and essential vitamins
                        and minerals. It is a favorite among seafood lovers and is commonly included in heart-healthy diets.
                    </p>
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in lean protein for muscle growth</li>
                            <li>Excellent source of omega-3 fatty acids</li>
                            <li>Provides iron and vitamin D</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Refrigerate fresh tuna at 0–4°C (32–40°F)</li>
                            <li>Freeze at -18°C (0°F) for long-term storage</li>
                            <li>Canned tuna lasts for years in a cool, dry place</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Cooking Methods:</b>
                        <ul>
                            <li>Grilling: Retains moisture while adding a smoky taste, great for "Inihaw na Tuna Panga"</li>
                            <li>Pan-frying: Creates a crispy outside while keeping the inside tender, used in "Tokwa't Baboy"</li>
                            <li>Baking: Creates a firmer, chewy consistency, great for "Baked Tuna with Cheese and Garlic"</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Substitutions for Dietary Needs:</b>
                        <ul>
                            <li>Replace with salmon for a similar taste and nutrition</li>
                            <li>Use chickpeas or mashed white beans for a plant-based alternative</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tuna;