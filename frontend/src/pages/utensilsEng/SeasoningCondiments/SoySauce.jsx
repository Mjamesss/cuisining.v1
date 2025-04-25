import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("soysauce.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const SoySauce= () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Seasoning And Condiments";
      }, []);

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
                <a href="SeasoningCondiments">
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" />
                </a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900"style={{marginTop: "-50px"}}>Soy Sauce</h1>

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
                        Soy sauce is a dark, salty, and umami-rich liquid condiment made from fermented soybeans, wheat, salt, and 
                        water. Originating in East Asia, it is a staple ingredient in many Asian cuisines, including Filipino cooking. 
                        In the Philippines, soy sauce is commonly known as "toyo" and is often paired with calamansi or vinegar to create 
                        dipping sauces and marinades. There are different varieties, including light soy sauce, which is saltier and thinner, 
                        and dark soy sauce, which has a richer color and slightly sweet undertone.
                        </p>
                        
                    <div className="p2">
                        <b>Nutritional Benefits:</b>
                        <ul>
                            <li>Rich in amino acids: Supports protein synthesis and enhances umami flavor</li>
                            <li>Contains antioxidants: May help reduce inflammation</li>
                            <li>Provides essential minerals: Small amounts of iron, potassium, and magnesium</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Common Uses:</b>
                        <ul>
                            <li>Adobo: A key ingredient in the famous chicken or pork adobo, combined with vinegar, garlic, and bay leaves for a rich, savory-sour taste</li>
                            <li>Pancit Canton & Pancit Bihon: Enhances the color and umami depth of these classic stir-fried noodle dishes</li>
                            <li>Toyo’t Calamansi: A simple dipping sauce for grilled meats, fried fish, and siomai, made by mixing soy sauce with calamansi juice and sometimes chili</li>
                        </ul>
                    </div>

                    <div className="p2">
                        <b>Cooking Methods & Tips:</b>
                        <ul>
                            <li>Use Light Soy Sauce for Seasoning: Best for enhancing flavors without darkening food</li>
                            <li>Add Dark Soy Sauce for Color & Depth: Ideal for braised dishes and stews like Humba and Pata Tim</li>
                            <li>Balance with Sweet or Acidic Ingredients: Commonly combined with sugar, honey, or calamansi in Filipino marinades and sauces</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
};

export default SoySauce;