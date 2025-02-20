import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("rotarygrater.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const RotaryGrater = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Grater"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Rotary Grater</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Make grating hard, dry cheeses like Parmigiano Reggiano a breeze in the rotary grater. The idea here is that instead of moving the cheese along the grater, you rotate a blade along the cheese. The pressure pushes the cheese against the grating drum using a turning crank, making for a quick and safe grating option.
            <br></br>
            <br></br>
Each brand may vary with the size of the grated product. It’s fun to use this for garnishing pasta with extra cheese, just like fancy restaurants.


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

export default RotaryGrater;