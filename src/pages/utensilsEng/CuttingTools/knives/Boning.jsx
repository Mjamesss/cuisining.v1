import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("boning.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Utility = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Boning knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A boning knife is a specialized kitchen tool designed for removing bones 
            from meat, poultry, and fish. It has a narrow, sharp, and slightly flexible 
            blade that allows for precise cutting around bones, joints, and connectiv
            tissue.
            <br></br>
            <br></br>
            This knife is commonly used to trim fat, debone chicken, fillet fish, and
            separate meat from bones with minimal waste. Some boning knives have a
            stiff blade for tougher meats, while others have a more flexible blade for
            delicate cuts. Proper handling and a sharp edge ensure efficient and
            accurate deboning
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

export default Utility;