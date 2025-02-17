import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("LancashirePeeler.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Landcashier = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Peelers"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Lancashier Peeler</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A Lancashire peeler is a traditional kitchen tool featuring a fixed straight blade. Unlike swivel peelers, its blade does not move, providing a more controlled peeling experience. This peeler is commonly used for peeling potatoes, carrots, and other root vegetables, offering precision and efficiency.
            <br></br>
            <br></br>
With a simple yet sturdy design, the Lancashire peeler is favored for its durability and ease of use. It often has a metal or plastic handle that provides a comfortable grip, allowing for extended peeling sessions without discomfort. The fixed blade makes it especially useful for those who prefer a stable and steady peeling action.
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

export default Landcashier;