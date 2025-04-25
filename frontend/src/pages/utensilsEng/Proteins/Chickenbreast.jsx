import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect} from "react";
import Navbar from '../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("chickenbreast.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Chicken Breast</li>
            </ol>
        </nav>
    );
};

// Chicken Breast Page
const Chickenbreast = () => {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>

            <Navbar />
            <Breadcrumb />
            <div className="p1 d-grid justify-content-center align-items-center" style={{ marginBottom: "80px" }}>
                <h1 className="font-weight-900" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "28px" }}>
                    Chicken Breast
                </h1>

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
                            Chicken breast is a lean, white meat known for its mild flavor and tender texture, making it a popular
                            choice for those looking for a healthy source of protein. It is naturally low in fat and calories,
                            making it ideal for weight management and muscle building diets. Due to its versatility, chicken breast
                            is widely used in various global cuisines, from Asian stir fries to Western style grilled dishes. Its neutral
                            taste allows it to absorb different seasonings and marinades, enhancing its flavor profile. Whether baked, boiled,
                            grilled, or roasted, chicken breast remains a staple in many nutritious meal plans.
                        </p>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Nutritional Benefits:</b>
                            <ul>
                                <li>High in lean protein for muscle maintenance</li>
                                <li>Low in fat, ideal for weight-conscious diets</li>
                                <li>Rich in B6, which supports metabolism and immunity</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Storage Guidelines:</b>
                            <ul>
                                <li>Keep raw chicken refrigerated at 4°C (40°F)</li>
                                <li>Freeze at -18°C (0°F) for up to 9 months</li>
                                <li>Cooked chicken lasts 3-4 days in the fridge</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Common Cooking Methods:</b>
                            <ul>
                                <li>Grilling: Locks in moisture while keeping it healthy, commonly used for "Chicken Inasal"</li>
                                <li>Baking: Retains juiciness when cooked at lower heat, great for "Filipino-style roasted chicken"</li>
                                <li>Boiling/Poaching: Perfect for soups and salads, often used in "Arroz Caldo" or "Tinola"</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Substitutions for Dietary Needs:</b>
                            <ul>
                                <li>Use turkey breast for a similar but slightly different flavor</li>
                                <li>Replace with tofu or mushrooms for a vegetarian alternative</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chickenbreast;