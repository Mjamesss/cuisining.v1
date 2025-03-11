import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';


const Model = (props) => {
    const { scene } = useGLTF("BoxGrater.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "80px", padding: "0 40px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/" style={{ color: "black", textDecoration: "none" }}>Home</a></li>
                <li className="breadcrumb-item"><a href="Grater" style={{ color: "black", textDecoration: "none" }}>Grater</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Box Grater</li>
            </ol>
        </nav>
    );
};

const BoxGrater = () => {
    return(
        <>
          <Navbar />
         <div className="p5 ">
       <a href="Grater"></a>
       </div>
       <Breadcrumb />
        <div className="p5 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Box Grater</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            This is the four-sided kitchen grater, each side with different size holes. It often has a side for slicing as well. It has a handle to keep the grater sturdy. Use it to grate hard cheeses like Cheddar and Mozzarella, shred potatoes for hashbrowns, grate chocolate for desserts, cut butter for biscuits, shred cucumbers and carrots, or ricing cauliflower.
             <br></br>
             <br></br>
The only downside to a box grater is that it takes up more room than other types of kitchen graters.

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
        <Footer />
        </>
        
    )
}

export default BoxGrater;