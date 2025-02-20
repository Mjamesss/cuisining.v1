import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("handgrater.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const HandGrater = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Grater"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Hand Grater</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            
These are one-sided paddle-style graters. While they only bring one size option to the table (unlike the four-sided box grater), they’re ideal for grating right into the bowl. They typically have large, very sharp holes, with a rubber-lined base to prevent slipping. They’re also thinner to store. Grate slowly as you get closer to the holes, they can cut fingers easily!


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

export default HandGrater;