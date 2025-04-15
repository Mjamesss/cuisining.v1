import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("juliennePeeler.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Julienne = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Peelers"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Julienne Peelers</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A julienne peeler is a specialized kitchen tool that creates thin, uniform strips of vegetables and fruits. It features a unique blade with small, evenly spaced teeth that slice produce into fine julienne cuts, perfect for garnishes, salads, and stir-fries.
            <br></br>
            <br></br>
This peeler makes it easy to prepare carrots, zucchini, and cucumbers for decorative plating or healthy meals. It is an excellent alternative to using a knife for julienne slicing, providing a quick and precise way to create restaurant-quality presentations. With its ergonomic handle and sharp blade, it allows for effortless cutting with minimal pressure.
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

export default Julienne;