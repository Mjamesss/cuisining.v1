import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("MechanicalScale.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Mechanicalscale = () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Kitchen Scale";
      }, []);
      
    return(
        <>
         <div className="p5 ">
       <a href="Kitchenscale"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Mechanical Scale</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Over the centuries, people have used various methods to weigh objects. The most common type of scale is the mechanical scale. This tool works by adding the object you wish to weigh on the bowl-like plate, and the hand will move accordingly, pointing to the designated weight reading.
           <br></br><br></br>
Mechanical kitchen scales are a staple in any baker's kitchen. They are exact, easy to use and durable. These scales can measure in either grams or kilograms and can be easily zeroed out in between ingredients.
            <br></br><br></br>
The scale's platform is usually made of stainless steel for easy cleanup. Some of these kitchen scales also have a bowl attached to the platform, making it even easier to measure ingredients without making a mess.

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

export default Mechanicalscale;