import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("corn.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Corn= () => {

     // Simple Loading Indicator
     const Loader = () => (
        <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial color="gray" wireframe />
        </mesh>
    );

    return (
        <>
            <div className="p5">
                <a href="GrainStarches">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900">Corn</h1>

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

                <div className="content-group" style={{ fontSize: "20px", maxWidth: "1000px", margin: "left", textAlign: "left" }}>
                    <p className="p2" style={{ fontSize: "20px" }}>
                        <b>Description:</b><br />
                        Corn is a versatile staple grain that comes in multiple forms, including fresh, dried, and ground into flour 
                        or meal. It has a naturally sweet and mild flavor, making it a favorite ingredient in many global cuisines. 
                        Corn can be eaten fresh, popped into popcorn, milled into cornmeal for baking, or processed into masa for 
                        tortillas and tamales. It is also a key ingredient in polenta, grits, and various snack foods. Corn varieties 
                        range from yellow and white to blue and purple, each with unique nutritional properties. Whether grilled, boiled, 
                        or ground, corn remains a fundamental ingredient in many culinary traditions.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in fiber, promoting digestive health and gut function</li>
                            <li>Good source of vitamin C and antioxidants, supporting immune health</li>
                            <li>Provides energy through natural carbohydrates, making it an excellent staple food</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Enjoyed fresh in salads, salsas, or on the cob</li>
                            <li>Ground into cornmeal for tortillas, cornbread, and tamales</li>
                            <li>Made into popcorn, polenta, or grits for various snacks and meals</li>
                        </ul>
                    </div>

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
        </>
    );
};

export default Corn;