import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";


const Model = (props) => {
    const { scene } = useGLTF("paring.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Paring = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Paring knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A paring knife is a small, sharp knife designed for precise cutting tasks. It
            s commonly used for peeling fruits and vegetables, trimming fat,
            deveining shrimp, and making intricate cuts.
            <br></br>
            <br></br>
            With its short, pointed blade, a paring knife offers excellent control, 
            making it ideal for delicate kitchen tasks that require accuracy. It is a
            must-have tool for any kitchen, providing versatility for both simple and
            detailed food preparation
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

export default Paring;