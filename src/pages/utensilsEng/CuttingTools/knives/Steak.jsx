import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";


const Model = (props) => {
    const { scene } = useGLTF("steak.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

const Steak= () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Steak knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A steak knife is a sharp, serrated knife designed for cutting through
            cooked meats with ease. It is commonly used at the dining table to slice
            steaks, poultry, and other meats without tearing or crushing them.
            nuts. the flat side of the knife can even be used to crush garlic.
            <br></br>
            <br></br>
            With its sturdy handle and precision blade, a steak knife ensures clean
            cuts, preserving the texture and juiciness of the meat. It is an essential 
            utensil for enjoying grilled meats and fine dining experiences.
           
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

export default Steak;