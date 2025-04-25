import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";
import Navbar from '../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("buckwheat.glb"); // Ensure the model is in the public folder
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
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "150px", marginBottom: "-40px", marginTop: "90px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/GrainStarches" style={{ color: "black", textDecoration: "none" }}>Grain & Starches</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Buckwheat</li>
            </ol>
        </nav>
    );
};

const Buckwheat = () => {
    useEffect(() => {
            // Change the document title when this page is rendered
            document.title = "CuiSining -  Grain And Starches";
          }, []);
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>

            <Navbar />
            <Breadcrumb />
            <div className="p1 d-grid justify-content-center align-items-center" style={{ marginBottom: "80px" }}>
                <h1 className="font-weight-900" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "28px" }}>Buckwheat</h1>

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
                            Despite its name, buckwheat is not related to wheat it is actually a seed from a flowering plant, making it naturally gluten-free. It has an earthy, slightly nutty flavor and is commonly used in pancakes, noodles, and porridge. Buckwheat is known for its impressive nutritional profile, offering high-quality plant-based protein and essential amino acids. It is a staple ingredient in many cultures, particularly in Eastern European and Asian cuisines, where it is used in soba noodles, kasha, and crepes. Buckwheat can be cooked whole like rice, ground into flour for baking, or toasted for an enhanced depth of flavor.
                        </p>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Nutritional Benefits:</b>
                            <ul>
                                <li>High in protein and contains all essential amino acids</li>
                                <li>Gluten-free, making it ideal for gluten-sensitive diets</li>
                                <li>Rich in fiber and antioxidants, supporting heart and digestive health</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Common Uses:</b>
                            <ul>
                                <li>Ground into flour for pancakes, noodles, and baked goods</li>
                                <li>Cooked like rice for side dishes or mixed into grain bowls</li>
                                <li>Added to granola, porridge, or energy bars for extra texture</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Cooking Methods & Tips:</b>
                            <ul>
                                <li>Toast buckwheat groats before cooking to enhance their nutty flavor</li>
                                <li>Simmer in water like rice or quinoa for a tender, slightly chewy texture</li>
                                <li>Combine with other grains or legumes for a more balanced meal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Buckwheat;
