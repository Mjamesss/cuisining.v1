import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";




const Model = (props) => {
    const { scene } = useGLTF("santoku.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Santoku= () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Santoku knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A Santoku knife is a Japanese-style knife known for its precision and 
            versatility in the kitchen. It has a shorter, wider blade with a slight curve,
            making it ideal for slicing, dicing, and mincing. The word "Santoku"
            translates to "three virtues," referring to its ability to handle meat, fish,
            and vegetables with ease.
            <br></br>
            <br></br>
            Unlike a chef’s knife, the Santoku knife has a thinner blade and a granton
            edge, which helps prevent food from sticking. Its lightweight design 
            makes it easy to control, making it a great choice for those who prefer a 
            more balanced and comfortable grip while preparing ingredients.
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

export default Santoku;