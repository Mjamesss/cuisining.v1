import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("dutchoven.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Dutchoven = () => {
     useEffect(() => {
            // Change the document title when this page is rendered
            document.title = "CuiSining - Pots";
          }, []);
    return(
        <>
         <div className="p5 ">
       <a href="Pots"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Dutch Oven</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Dutch ovens, also known as cocotte pots, are heavy, wide, and relatively shallow pots with thick, curved walls and tight-fitting lids. Dutch ovens are versatile and are great for braising tough cuts of meat like chuck roast, lamb shanks, and pork shoulder, as well as cooking no-knead bread, soups, and stews.
          <br></br><br></br>
• Heavy weight maintains constant temperatures for a long time to cook foods evenly<br></br>
• Come in enamel cast iron or cast aluminum options<br></br>
• Ideal for braising, searing, simmering, and baking<br></br>
• Oven-safe and induction-ready




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

export default Dutchoven;