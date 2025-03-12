import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("tofu.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Tofu</li>
            </ol>
        </nav>
    );
};

// Tofu Page
const Tofu = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Tofu</h1>

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
                        Tofu is a plant-based protein derived from soybeans, widely used in vegetarian and vegan cooking. It has a mild, slightly
                        nutty taste and a soft, sponge-like texture that absorbs the flavors of the ingredients it is cooked with. Tofu comes in
                        different varieties, including silken, firm, and extra-firm, each suited for different cooking methods. It is commonly
                        used in stir-fries, soups, salads, and even desserts. Rich in protein, iron, and calcium, tofu is a nutritious alternative
                        to animal-based proteins. Because of its versatility and health benefits, it is a staple in many Asian and plant-based cuisines.
                    </p>
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in plant-based protein</li>
                            <li>Low in saturated fat</li>
                            <li>Rich in calcium and iron</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Storage Guidelines:</b>
                        <ul>
                            <li>Store in water and refrigerate, changing water daily</li>
                            <li>Freeze for a firmer texture</li>
                            <li>Cooked tofu lasts 3–5 days in the fridge</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Cooking Methods:</b>
                        <ul>
                            <li>Stir-frying: Absorbs flavors well in sauces, commonly used in "Tuna Sisig"</li>
                            <li>Grilling: Gives a smoky, crispy texture, popular in "Inihaw na Tuna Panga"</li>
                            <li>Baking: Creates a firmer, chewy consistency, great for "Baked Tuna with Cheese and Garlic"</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Substitutions for Dietary Needs:</b>
                        <ul>
                            <li>Use tempeh for a higher-fiber alternative</li>
                            <li>Replace with paneer for a dairy-based option</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tofu;