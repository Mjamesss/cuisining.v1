import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Navbar from '../../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("steak.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item"><a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting Tools</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/knife" style={{ color: "black", textDecoration: "none" }}>Knife</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Steak Knife</li>
            </ol>
        </nav>
    );
};

// Steak Knife Page
const Steak = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Knife";
      }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Steak Knife</h1>

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
                    <p className="p2" style={{ fontSize: "20px", color: "#000000" }}>
                        <b>Description:</b><br />
                        A steak knife is a sharp, serrated knife designed for cutting through cooked meats with ease. It is commonly used at the dining table to slice steaks, poultry, and other meats without tearing or crushing them. With its sturdy handle and precision blade, a steak knife ensures clean cuts, preserving the texture and juiciness of the meat. It is an essential utensil for enjoying grilled meats and fine dining experiences.
                    </p>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Cutting cooked steaks and other meats</li>
                            <li>Slicing poultry and roasted meats</li>
                            <li>Serving meats during meals</li>
                            <li>Providing clean and precise cuts without tearing</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Features & Variations:</b>
                        <ul>
                            <li>Serrated Blade: Easily cuts through tough or crispy exteriors</li>
                            <li>Full Tang: Provides stability and control</li>
                            <li>Ergonomic Handle: Ensures a comfortable grip</li>
                            <li>Stainless Steel: Resists rust and corrosion</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Handling & Safety Tips:</b>
                        <ul>
                            <li>Always hold the knife firmly and cut away from your body</li>
                            <li>Clean and dry thoroughly after each use to maintain sharpness</li>
                            <li>Store in a knife block or protective sheath to prevent accidents</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Steak;
