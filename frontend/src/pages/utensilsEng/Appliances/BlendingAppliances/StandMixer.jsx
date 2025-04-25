import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("Stand Mixer.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const StandMixer = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Blending Appliances";
      }, []);
    return(
        <>
         <div className="p5 ">
       <a href="BlendingAppliances"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Stand Mixer</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A stand mixer is a heavy-duty kitchen appliance designed for mixing, kneading, and whipping ingredients. It has a sturdy base, a large mixing bowl, and various attachments, including beaters, dough hooks, and whisks.
<br></br><br></br>
Stand mixers are ideal for baking, making dough, whipping cream, and mixing batters. They offer multiple speed settings and hands-free operation, making them an essential tool for serious bakers and home chefs.





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

export default StandMixer;