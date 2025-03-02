import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("Countertop blender.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const CounterTopBlender = () => {
    return(
        <>
         <div className="p5 ">
       <a href="BlendingAppliances"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Counter Top Blender</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A countertop blender is a powerful kitchen appliance designed for blending smoothies, soups, sauces, and other liquid-based recipes. It consists of a sturdy base with a motor, a large pitcher, and sharp blades that rotate at high speeds.
        <br></br><br></br>
This blender is ideal for crushing ice, making frozen drinks, and pureeing ingredients. It typically offers multiple speed settings and a pulse function for precise control, making it a must-have for versatile food preparation.





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

export default CounterTopBlender;