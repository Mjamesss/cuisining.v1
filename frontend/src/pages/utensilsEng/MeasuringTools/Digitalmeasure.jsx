import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("digitalmeasuringcup.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const  Digitalmeasure = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Measuring Cup";
      }, []);
    return(
        <>
         <div className="p5 ">
       <a href="MeasuringCup"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Digital Measuring Cup</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A digital measuring cup is a modern kitchen gadget that combines a traditional measuring cup with an electronic scale. It provides precise measurements by displaying the weight of ingredients on a built-in digital screen. Some models even allow users to switch between volume and weight measurements for different units, making them useful for recipes requiring high accuracy. Digital measuring cups are especially beneficial for baking, where precise ingredient ratios are crucial for the best results. Some advanced versions also include temperature sensors to measure the temperature of liquids.
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

export default Digitalmeasure;