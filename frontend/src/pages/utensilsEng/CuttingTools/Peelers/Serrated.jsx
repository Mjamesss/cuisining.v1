import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("serratedpeeler.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Serrated = () => {
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
        <h1 className="font-weight-900">Serrated Peelers</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A serrated peeler is equipped with a jagged-edged blade designed to grip and remove delicate skins from soft produce like tomatoes, peaches, and kiwis. The serrated edge allows for easy peeling without damaging the flesh inside, making it a valuable tool for handling fragile ingredients.
             <br></br>
             <br></br>
This type of peeler is ideal for tasks where a regular straight blade might slip or crush soft produce. It ensures clean and even peeling while maintaining the texture of the food. Its lightweight design and sharp serrated teeth make it a must-have tool for any kitchen that frequently prepares soft fruits and vegetables.
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

export default Serrated;