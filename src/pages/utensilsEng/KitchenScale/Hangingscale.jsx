import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("HangingScale.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Hangingscale = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Kitchenscale"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Hangin Scale</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Kitchen hanging scales are often used in commercial cooking areas to weigh large quantities of food. They have the advantage of holding more weight than traditional kitchen scales, making them ideal for weighing large batches of ingredients.
         <br></br><br></br>
Although this type of scale can be more expensive, they free up space, and some even have additional features like tare weights and timers. Whether you’re a professional chef or a home cook, these hanging scales are a great option for any kitchen.





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

export default Hangingscale;