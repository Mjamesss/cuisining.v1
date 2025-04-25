import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("Mop-Style Brushes.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const  Mopbrushes = () => {
     useEffect(() => {
            // Change the document title when this page is rendered
            document.title = "CuiSining - Basting Brushes";
          }, []);
    return(
        <>
         <div className="p5 ">
       <a href="Bastingbrushes"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Mop-Style Brush</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Featuring longer, more absorbent fibers, mop-style brushes are excellent for applying thicker sauces or marinades, especially in barbecue applications. They can hold large amounts of liquid, allowing for even distribution over meats and roasts. These brushes are often used by pitmasters for slathering barbecue sauce over ribs, briskets, and other slow-cooked meats. They require regular cleaning to prevent sauce buildup, but their ability to coat large surfaces efficiently makes them indispensable for outdoor cooking.


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

export default Mopbrushes;