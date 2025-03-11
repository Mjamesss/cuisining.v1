import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("buckwheat.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Buckwheat= () => {

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
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Buckwheat</h1>

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
                        Despite its name, buckwheat is not related to wheat—it is actually a seed from a flowering plant, making it 
                        naturally gluten-free. It has an earthy, slightly nutty flavor and is commonly used in pancakes, noodles, 
                        and porridge. Buckwheat is known for its impressive nutritional profile, offering high-quality plant-based 
                        protein and essential amino acids. It is a staple ingredient in many cultures, particularly in Eastern European 
                        and Asian cuisines, where it is used in soba noodles, kasha, and crepes. Buckwheat can be cooked whole like rice,
                        ground into flour for baking, or toasted for an enhanced depth of flavor.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>High in protein and contains all essential amino acids</li>
                            <li>Gluten-free, making it ideal for gluten-sensitive diets</li>
                            <li>Rich in fiber and antioxidants, supporting heart and digestive health</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Ground into flour for pancakes, noodles, and baked goods</li>
                            <li>Cooked like rice for side dishes or mixed into grain bowls</li>
                            <li>Added to granola, porridge, or energy bars for extra texture</li>
                        </ul>
                    </div>

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
        </>
    );
};

export default Buckwheat;