import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("stainelessbowl.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Stainlessbowl = () => {
    
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Mixing Bowl";
      }, []);

    return(
        <>
         <div className="p5 ">
       <a href="Mixingbowls"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Stainless Bowl</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A bowl is a versatile kitchen container used for mixing, holding, and serving food. It comes in various materials such as stainless steel, glass, plastic, and ceramic, each suited for different culinary tasks.
           <br></br>
           <br></br>
Mixing bowls are essential for preparing batters, doughs, and salads, while heat-resistant bowls are ideal for melting ingredients or double-boiler cooking. Some bowls come with lids for easy storage, making them practical for meal prep and leftovers.




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

export default Stainlessbowl;