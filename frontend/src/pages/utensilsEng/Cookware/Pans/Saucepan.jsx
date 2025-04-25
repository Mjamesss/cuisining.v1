import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("Saucepan.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Saucepan = () => {
      useEffect(() => {
                // Change the document title when this page is rendered
                document.title = "CuiSining - Pan";
              }, []);
    return(
        <>
         <div className="p5 ">
       <a href="Pans"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Sauce Pan</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A saucepan is a deep, round pan with a long handle, designed for cooking liquids like soups, sauces, and stews. It has high sides to prevent spills and ensure even heat distribution. Saucepans come in different sizes and are often made of stainless steel, nonstick, or copper. Many include a lid, which helps retain heat and moisture for efficient cooking.

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

export default Saucepan;