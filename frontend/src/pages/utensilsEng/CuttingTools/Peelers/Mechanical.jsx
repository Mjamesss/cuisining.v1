import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("mechanicalpeeler.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Mechanical = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Peelers";
      }, []);
    return(
        <>
         <div className="p5 ">
       <a href="Peelers"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Mechanical Peelers</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A mechanical peeler is an advanced kitchen tool designed for hands-free peeling. It typically features a rotating mechanism that automatically removes the skin from fruits and vegetables, making it ideal for bulk food preparation. This peeler is commonly used for apples, potatoes, and other round produce.
            <br></br>
            <br></br>
Some mechanical peelers also include additional features, such as slicing or coring functions, making them versatile tools for professional and home kitchens. With minimal effort, they provide consistent and uniform peeling, reducing preparation time for large cooking tasks.
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

export default Mechanical;