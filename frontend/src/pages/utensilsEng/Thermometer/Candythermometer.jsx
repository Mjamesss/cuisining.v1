import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("candyanddeepfrythermometer.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const  Candythermometer = () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Thermometer";
      }, []);
    return(
        <>
         <div className="p5 ">
       <a href="Thermometer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Candy and Deep Fry Thermometer</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A candy and deep fry thermometer is a specialized kitchen tool designed to measure high temperatures when making candy, caramel, or deep-frying foods. It typically has a metal probe and a clip to attach it to pots, ensuring accurate temperature readings.
      <br></br><br></br>
This thermometer helps prevent burning or undercooking by providing precise heat control. It is essential for tasks like making toffee, tempering chocolate, or frying crispy foods to perfection.

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

export default Candythermometer;