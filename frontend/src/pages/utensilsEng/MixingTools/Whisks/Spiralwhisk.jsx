import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("SpiralWhisks.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const  Spiralwhisk = () => {
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
        <h1 className="font-weight-900">Spiral Whisk</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Spiral whisks are composed of a singular wire loop wrapped in tight coils. Because the head of this whisk is placed at an angle, it is meant to always be in contact with the bottom of your pan during the mixing process. This allows the whisk to catch all ingredients and prevents burning.
<br></br><br></br>
As the angled head makes contact with the bottom of the pan, the smaller coils work to break up clumps of dry ingredients for a smoother final product. Because of their flat, compact construction, spiral whips are also ideal for use in small bowls where balloon or French whisks may be too bulky.







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

export default Spiralwhisk;