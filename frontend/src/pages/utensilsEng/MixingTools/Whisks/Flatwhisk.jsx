import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("FlatWhisks.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const  Flatwhisk = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Whisk";
      }, []);
    return(
        <>
         <div className="p5 ">
       <a href="Whisk"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Flat Whisk</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Flat whisks, also known as roux whisks, feature looped wires, typically four, in a flattened ballooned shape. These whisks are designed to be used with shallow pans to reach the optimal angle when mixing.
     <br></br><br></br>
The lower the handle is to the pan, the flatter the whisk will lay, and the more surface area can be covered. The flat wires allow the user to scrape up product in the pan and effectively combine ingredients. This is especially beneficial when cooking a roux for a mother sauce.






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

export default Flatwhisk;