import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("kettle.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const RiceCooker = () => {
     useEffect(() => {
            // Change the document title when this page is rendered
            document.title = "CuiSining - Heating Appliances";
          }, []);
    return(
        <>
         <div className="p5 ">
       <a href="HeatingAppliances"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Rice Cooker</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A rice cooker is an automated appliance designed to cook rice to perfection with minimal effort. It ensures consistent results by regulating temperature and cooking time based on the amount of water and rice added. Many rice cookers come with additional functions, allowing for steaming vegetables, cooking soups, and making porridge. They often have a "keep warm" setting to maintain food temperature without overcooking.





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

export default RiceCooker;