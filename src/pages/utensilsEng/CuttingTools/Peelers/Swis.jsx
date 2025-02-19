import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("ypeeler.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Swis = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Peelers"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Swiss,Speed & Y-Peelers</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Swiss, speed, and Y-peelers have a distinctive Y-shaped design that provides a firm and balanced grip. The horizontal blade sits between two arms, allowing for quick and effortless peeling. These peelers are commonly used for peeling both hard and soft-skinned produce, including potatoes, carrots, cucumbers, and tomatoes.
            <br></br>
            <br></br>
The sharp blade ensures smooth peeling with minimal effort, making food preparation faster and more efficient. Some models also feature a pointed tip for removing blemishes or eyes from potatoes. The compact and lightweight design makes them easy to handle and store, making them a popular choice in professional and home kitchens.
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

export default Swis;