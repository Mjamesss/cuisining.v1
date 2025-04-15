import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("RotaryPeeler.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Rotary= () => {
    return(
        <>
         <div className="p5 ">
       <a href="Peelers"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Rotary Peelers</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A rotary peeler is a multifunctional kitchen tool equipped with multiple blade options in a rotating mechanism. It typically includes straight, serrated, and julienne blades, allowing users to switch between different peeling styles with a simple rotation.
              <br></br>
              <br></br>
This peeler is ideal for handling various types of produce, from hard-skinned vegetables to soft fruits. Its compact design and versatility make it a convenient all-in-one tool for kitchen preparation. The ergonomic handle provides comfort and control, making peeling tasks quicker and more efficient.
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

export default Rotary;