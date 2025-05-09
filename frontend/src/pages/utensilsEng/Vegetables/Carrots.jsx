import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";
import Navbar from '../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("carrots.glb"); // Ensure the model is in the public folder
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
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/Vegetables" style={{ color: "black", textDecoration: "none" }}>Vegetables</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Carrots</li>
            </ol>
        </nav>
    );
};

const Carrots = () => {
    useEffect(() => {
            // Change the document title when this page is rendered
            document.title = "CuiSining - Vagetable";
          }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Carrots</h1>

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
                        Carrots are crunchy, root vegetables known for their vibrant orange color and naturally sweet taste. They
                        are widely used in both raw and cooked dishes and come in other colors such as purple, red, and yellow.
                        Carrots are a rich source of beta-carotene, which the body converts into vitamin A, promoting eye health
                        and immune function.
                    </p>

                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in beta-carotene, supporting vision and skin health</li>
                            <li>Good source of fiber for digestion and gut health</li>
                            <li>Contains antioxidants that reduce inflammation</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Eaten raw as a snack, in salads, or as a garnish</li>
                            <li>Cooked in soups, stews, and stir-fries</li>
                            <li>Blended into smoothies and juices for natural sweetness</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Boiling: Softens carrots for purees, soups, or mashed dishes</li>
                            <li>Roasting: Enhances natural sweetness; toss with oil and bake at 400°F (200°C)</li>
                            <li>Steaming: Preserves nutrients while keeping them tender-crisp</li>
                            <li>Sautéing: Cooks quickly with butter or oil for a flavorful side dish</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carrots;