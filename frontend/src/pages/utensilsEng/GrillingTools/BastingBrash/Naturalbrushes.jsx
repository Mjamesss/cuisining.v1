import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense,useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("Natural Bristle Brushes.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const  Naturalbrush = () => {
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
        <h1 className="font-weight-900">Natural Bristle Brush</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Traditionally made from boar hair, these brushes are soft and ideal for delicate tasks like applying egg wash to pastries. They hold liquids well but require careful cleaning and maintenance to prevent contamination and bristle shedding. Natural bristle brushes are preferred by bakers and chefs who need precision in pastry and dough applications. They provide a smooth, even coating of liquids, making them perfect for butter, glazes, and sauces. However, they must be hand-washed and thoroughly dried to maintain hygiene.


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

export default Naturalbrush;