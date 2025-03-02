import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("immersion blender.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const HighSpeedBlender = () => {
    return(
        <>
         <div className="p5 ">
       <a href="BlendingAppliances"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">High Speed Blender</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A high-speed blender is a premium blender with a powerful motor and sharp blades capable of handling tough ingredients like nuts, seeds, and frozen fruits. It is commonly used for making nut butters, hot soups, and silky-smooth smoothies.
<br></br><br></br>
These blenders often feature advanced functions, including preset programs, variable speed control, and self-cleaning capabilities. They are ideal for professional chefs and home cooks who require top-tier performance in the kitchen.





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

export default HighSpeedBlender;