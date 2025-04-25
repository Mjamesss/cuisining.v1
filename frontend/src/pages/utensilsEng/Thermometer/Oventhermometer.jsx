import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("oventhermometer.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const  Oventhermometer = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Thermometer";
      }, []);
    return(
        <>
         <div className="p5 ">
       <a href="Thermometer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Oventhermometer</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Oven thermometers can withstand high temperatures and feature a high temperature range, making them reliable tools for your kitchen. They are placed inside an oven or grill, providing accurate readings of the appliance's internal temperature. One of their key benefits is that they allow you to test for hot spots, which can often occur in grills and ovens and result in uneven cooking. They also make it easy to find the ideal position to place your food in the oven, allowing you to achieve consistent and reliable results every time you cook.

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

export default Oventhermometer;