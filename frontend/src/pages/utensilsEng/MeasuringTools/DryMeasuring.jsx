import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("drymeasuringcup.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const DryMeasuring = () => {
     useEffect(() => {
                // Change the document title when this page is rendered
                document.title = "CuiSining - Measuring Cup";
              }, []);
    return(
        <>
         <div className="p5 ">
       <a href="MeasuringCup"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Dry Measuring Cup</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A dry measuring cup is designed for measuring dry ingredients like flour, sugar, and grains. It typically comes in a set with different volume sizes, allowing for precise measurement by leveling off the ingredient. These cups are usually made of plastic, metal, or ceramic and ensure accurate portioning for baking and cooking.
           <br></br>
           <br></br>
These measuring cups are essential for bakers who need exact ingredient amounts to achieve consistent results. Some models have etched or engraved measurement markings for long-lasting readability. Using the correct measuring technique, such as spooning and leveling flour, ensures the best accuracy.
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

export default DryMeasuring;