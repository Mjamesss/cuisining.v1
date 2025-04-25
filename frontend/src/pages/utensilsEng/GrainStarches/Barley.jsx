import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Navbar from '../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("barley.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Barley</li>
            </ol>
        </nav>
    );
};

const Barley = () => {
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
                <h1 className="font-weight-900" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "28px" }}>Barley</h1>

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
                            Barley is an ancient whole grain known for its chewy texture and mild, nutty flavor. It has been cultivated 
                            for thousands of years and is widely used in a variety of dishes, including soups, stews, grain bowls, and 
                            bread. Barley is available in different forms, such as hulled barley, pearl barley, and barley flour, used for baking.
                        </p>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Nutritional Benefits:</b>
                            <ul>
                                <li>High in fiber, promoting digestive health</li>
                                <li>Rich in vitamins B and E, supporting energy and skin health</li>
                                <li>Contains antioxidants and essential minerals like magnesium and selenium</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Common Uses:</b>
                            <ul>
                                <li>Added to soups and stews for extra texture</li>
                                <li>Used in grain bowls and salads for a nutritious boost</li>
                                <li>Milled into flour for baking bread and other baked goods</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Cooking Methods & Tips:</b>
                            <ul>
                                <li>Soak hulled barley before cooking to reduce cooking time</li>
                                <li>Simmer in water or broth until tender for a soft, chewy texture</li>
                                <li>Use pearl barley for faster preparation or hulled barley for more fiber</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Barley;
