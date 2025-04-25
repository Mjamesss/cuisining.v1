import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("MuffinPans.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Muffinpan = () => {
      useEffect(() => {
                // Change the document title when this page is rendered
                document.title = "CuiSining - Bakeware";
              }, []);
    return(
        <>
         <div className="p5 ">
       <a href="Bakeware"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Muffin Pan</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Commercial muffin and cupcake pans are made from aluminized steel, aluminum, cast iron, and even silicone to provide longevity in high-volume kitchens. Many have reinforced rims to prevent warping as well as non-stick glazes for easy release and cleanup.
            <br></br><br></br>
• Ideal for mini-, standard-, and jumbo-sized muffins or cupcakes<br></br>
• Can also be used for baking egg cups, mini quiches, and tarts<br></br>
• Models available with 6 to 48 cups for high-volume efficiency






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

export default Muffinpan;