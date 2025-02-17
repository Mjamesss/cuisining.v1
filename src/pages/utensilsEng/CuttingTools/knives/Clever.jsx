import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";


const Model = (props) => {
    const { scene } = useGLTF("clever.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Clever = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Clever knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A cleaver knife is a large, heavy-duty knife designed for cutting through
            tough meats, bones, and dense vegetables. It features a broad,
            rectangular blade that provides both power and precision when chopping,
            slicing, and crushing ingredients.
            <br></br>
            <br></br>
            This knife is commonly used in butchery and professional kitchens for 
            breaking down large cuts of meat, cutting through bones, and preparing  
            hard vegetables like squash. The flat side of the blade can also be used to 
            crush garlic or tenderize meat. Its sturdy design makes it an essential tool
            for heavy-duty kitchen tasks
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

export default Clever