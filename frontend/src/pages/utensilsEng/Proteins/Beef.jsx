import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Navbar from '../../../components/Navbar';

const Model = (props) => {
    const { scene } = useGLTF("beef.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Beef</li>
            </ol>
        </nav>
    );
};

const Beef = () => {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>

            <Navbar />
            <Breadcrumb />
            <div className="p1 d-grid justify-content-center align-items-center" style={{ marginBottom: "80px" }}>
                <h1 className="font-weight-900" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "28px" }}>Beef</h1>

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
                            Beef is one of the most widely consumed red meats, obtained from cattle and available in various cuts,
                            each offering different textures and flavors. It is a rich source of high quality protein, making it
                            essential for muscle growth and overall body function. Different cuts of beef, such as ribeye, sirloin,
                            and brisket, are used in a variety of cuisines worldwide. Due to its rich iron content, beef is particularly
                            beneficial for individuals needing to increase their red blood cell production. It can be prepared in numerous
                            ways, from slow cooked stews to flame grilled steaks, making it a versatile ingredient in many recipes.
                        </p>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Nutritional Benefits:</b>
                            <ul>
                                <li>Excellent source of protein for muscle growth</li>
                                <li>High in iron, which helps prevent anemia</li>
                                <li>Provides essential B vitamins for energy production</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Storage Guidelines:</b>
                            <ul>
                                <li>Refrigerate fresh beef at 4°C (40°F) or below</li>
                                <li>Freeze at -18°C (0°F) for long-term storage</li>
                                <li>Store cooked beef in an airtight container for up to 4 days</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Common Cooking Methods:</b>
                            <ul>
                                <li>Grilling: Enhances flavor with a smoky taste, commonly used in "Inihaw na Baka"</li>
                                <li>Roasting: Ideal for large cuts like brisket and prime rib, often found in "Bulalo" when slow-cooked</li>
                                <li>Stir-frying: Best for thinly sliced beef in quick meals like "Beef Salpicao" or "Bistek Tagalog"</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <div className="p2">
                            <b>Substitutions for Dietary Needs:</b>
                            <ul>
                                <li>Use chicken or turkey for a leaner alternative</li>
                                <li>Replace with plant-based protein like tofu or lentils</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Beef;