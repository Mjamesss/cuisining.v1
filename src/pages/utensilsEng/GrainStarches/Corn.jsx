import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("corn.glb"); // Ensure the model is in the public folder
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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Corn</li>
            </ol>
        </nav>
    );
};

const Corn = () => {
    return (
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>

            <Navbar />
            <Breadcrumb />
            <div className="p1 d-grid justify-content-center align-items-center" style={{ marginBottom: "80px" }}>
                <h1 className="font-weight-900" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "28px" }}>Corn</h1>

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
                            Corn is a versatile staple grain that comes in multiple forms, including fresh, dried, and ground into flour
                            or meal. It has a naturally sweet and mild flavor, making it a favorite ingredient in many global cuisines.
                            Corn can be eaten fresh, popped into popcorn, milled into cornmeal for baking, or processed into masa for
                            tortillas and tamales. It is also a key ingredient in polenta, grits, and various snack foods. Corn varieties
                            range from yellow and white to blue and purple, each with unique nutritional properties. Whether grilled, boiled,
                            or ground, corn remains a fundamental ingredient in many culinary traditions.
                        </p>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Nutritional Benefits:</b>
                            <ul>
                                <li>High in fiber, promoting digestive health and gut function</li>
                                <li>Good source of vitamin C and antioxidants, supporting immune health</li>
                                <li>Provides energy through natural carbohydrates, making it an excellent staple food</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Common Uses:</b>
                            <ul>
                                <li>Enjoyed fresh in salads, salsas, or on the cob</li>
                                <li>Ground into cornmeal for tortillas, cornbread, and tamales</li>
                                <li>Made into popcorn, polenta, or grits for various snacks and meals</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Cooking Methods & Tips:</b>
                            <ul>
                                <li>Boil, grill, or roast fresh corn to bring out its natural sweetness</li>
                                <li>Use cornmeal for baking, frying, or thickening soups and stews</li>
                                <li>Store dried corn products in airtight containers to maintain freshness</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Corn;
