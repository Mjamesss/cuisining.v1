import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("castiron.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const CastIronPan = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Bakeware"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Cast Iron Pan</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A cast iron pan is a durable and versatile cookware piece known for its excellent heat retention and even heating. It can be used for frying, searing, baking, and roasting, making it a staple in many kitchens.
            <br></br><br></br>
Cast iron pans require seasoning to maintain a natural non-stick surface and prevent rust. They are perfect for high-heat cooking, such as searing steaks or frying foods, and can be used on stovetops, in ovens, and even over open flames.




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

export default CastIronPan;