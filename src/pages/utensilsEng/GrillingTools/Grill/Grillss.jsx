import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("grill.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const  Grillss = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Grills"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Grill</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A grill is a cooking device that uses direct heat to cook food, often imparting a distinct smoky flavor. Grills can be fueled by charcoal, gas, electricity, or wood, and they are widely used for outdoor cooking. Each type offers different cooking techniques, such as slow smoking, high-heat searing, or roasting. Many modern grills feature adjustable temperature controls, grates for even heat distribution, and additional accessories like side burners or warming racks.
         <br></br><br></br>
Grilling is a popular method for cooking steaks, burgers, hotdogs, seafood, and even vegetables. It is favored for its ability to enhance natural flavors with minimal added fat, making it a healthier cooking option.



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

export default Grillss;