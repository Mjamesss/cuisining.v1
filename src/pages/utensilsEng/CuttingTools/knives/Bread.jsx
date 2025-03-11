import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("bread.glb"); // Ensure the model is in the public folder
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
        <nav aria-label="breadcrumb" style={{ marginLeft: "190px", padding: "1 40px", marginBottom: "40px", marginTop: "-2%" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item"><a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting Tools</a></li>
                <li className="breadcrumb-item"><a href="/knife" style={{ color: "black", textDecoration: "none" }}>Knife</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Bread Knife</li>
            </ol>
        </nav>
    );
};

const Utility = () => {
    return (
        <>
            <Navbar />
            <div className="p5">
                <a href="Knife"></a>
            </div>
            <Breadcrumb />
            <div className="p2 d-grid justify-content-center align-items-center" style={{ paddingTop: "50px" }}>
                <div className="content-group" style={{ fontSize: "20px", maxWidth: "1000px", margin: "left", textAlign: "left" }}>
                    <h1 className="font-weight-800" style={{ marginTop: "-50px" }}>Bread Knife</h1>

                    <div style={{ borderRadius: "50px", overflow: "hidden", }}>
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
        
                    <p className="p2" style={{ fontSize: "20px", color: "#000000" }}>
                        <b style={{ color: "#000000" }}>Description:</b><br />

                        A bread knife is a long, serrated knife designed for slicing through bread 
                        without crushing or tearing it. The serrated edge allows for clean cuts
                        through crusty loaves, soft bread, bagels, and pastries while maintaining
                        their shape and texture.
                        <br></br>
                        <br></br>
                        In addition to bread, this knife is useful for slicing delicate cakes, 
                        tomatoes, and other foods with a tough exterior and soft interior. A gentle
                        sawing motion is recommended when using a bread knife to achieve
                        precise and effortless cuts.
                    </p>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Slicing crusty bread without crushing the soft interior</li>
                            <li>Cutting cakes and pastries with minimal damage</li>
                            <li>Slicing tomatoes and other delicate produce</li>
                            <li>Preparing bagels, baguettes, and artisan loaves</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Features & Variations:</b>
                        <ul>
                            <li>Serrated Edge: Ideal for tough crusts</li>
                            <li>Offset Handle: Keeps knuckles clear while cutting</li>
                            <li>Long Blade: Typically 8 to 12 inches for full slices</li>
                            <li>Curved Tip: Enhances maneuverability</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Handling & Safety Tips:</b>
                        <ul>
                            <li>Use a gentle sawing motion to maintain the texture</li>
                            <li>Avoid excessive force to prevent tearing soft interiors</li>
                            <li>Keep the blade sharp for smoother cuts</li>
                            <li>Store the knife in a sheath or knife block for safety</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Utility;
