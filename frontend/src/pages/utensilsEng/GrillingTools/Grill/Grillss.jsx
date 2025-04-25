import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";
import Navbar from '../../../../components/Navbar';

// 3D Model Component
const Model = (props) => {
    const { scene } = useGLTF("grill.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item"><a href="/GrillingTools" style={{ color: "black", textDecoration: "none" }}>Grilling Tools</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/Grills" style={{ color: "black", textDecoration: "none" }}>Grills</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Grill</li>
            </ol>
        </nav>
    );
};

// Grill Page
const Grillss = () => {
     useEffect(() => {
                    // Change the document title when this page is rendered
                    document.title = "CuiSining - Grills";
                  }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Grill</h1>

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
                        A grill is a cooking device that uses direct heat to cook food, often imparting a distinct smoky flavor. Grills can be fueled by charcoal, gas, electricity, or wood, and they are widely used for outdoor cooking. Each type offers different cooking techniques, such as slow smoking, high-heat searing, or roasting. Many modern grills feature adjustable temperature controls, grates for even heat distribution, and additional accessories like side burners or warming racks.
                        <br /><br />
                        Grilling is a popular method for cooking steaks, burgers, hotdogs, seafood, and even vegetables. It is favored for its ability to enhance natural flavors with minimal added fat, making it a healthier cooking option.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Grillss;