import "../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

const Model = (props) => {
    const { scene } = useGLTF("DigitalScale.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);
const Digitalscale = () => {
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
        <h1 className="font-weight-900">Digital Scale</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A digital kitchen scale uses sensors to weigh objects. The display screen makes it easy to read the weight of an item, and the sensors allow for more accurate measurements than traditional analog scales.
            <br></br><br></br>
This kitchen scale measures ingredients for recipes and portions of food for individual meals. Digital scales typically have a capacity of up to 5 kilograms and are accurate to within 0.1 grams.
             <br></br><br></br>
Some digital scales also include a tare function, which resets the scale's measurement back to zero. This can be useful for measuring multiple ingredients in the same bowl or container.



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

export default Digitalscale;