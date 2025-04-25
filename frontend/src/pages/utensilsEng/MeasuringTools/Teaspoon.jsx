import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("teaspoon.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Teaspoon = () => {
     useEffect(() => {
                            // Change the document title when this page is rendered
                            document.title = "CuiSining - Measuring Spoon";
                          }, []);
    return(
        <>
         <div className="p5 ">
       <a href="MeasuringSpoon"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Tea Spoon</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A teaspoon is a small unit of measurement commonly used for ingredients like spices, baking powder, and liquid flavorings. It holds approximately 5 milliliters (mL) or 1/3 of a tablespoon, making it essential for precise ingredient portioning.
            <br></br><br></br>
Teaspoons are a fundamental part of measuring spoon sets and are widely used in cooking and baking. They help ensure consistency in recipes by accurately measuring small quantities of dry and liquid ingredients.

            </p>

            {/* 3D Model Display with Suspense for loading */}
                 <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 2, 5], fov: 45 }} style={{ height: "500px" }}>
                 <color attach="background" args={["#808080"]} />
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
        </>
    )
}

export default Teaspoon;