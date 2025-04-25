import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("swivelpeeler.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Swivel = () => {
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
        <h1 className="font-weight-900">Swivel Peelers</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A swivel peeler is a versatile kitchen tool designed for peeling a variety of fruits and vegetables. It features a pivoting blade that adjusts to the contours of the food, allowing for smooth and efficient peeling. This flexibility helps reduce waste by removing only the skin while preserving the flesh underneath.
             <br></br>
             <br></br>
With its ergonomic handle and sharp blade, the swivel peeler makes peeling easy and comfortable, even for extended use. It is ideal for peeling potatoes, carrots, apples, and other produce with curved surfaces. The simple yet effective design makes it a staple tool in any kitchen.
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

export default Swivel;