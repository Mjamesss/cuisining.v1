import "../../../../fw-cuisining.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
    const { scene } = useGLTF("chefsknife.glb"); // Ensure the model is in the public folder
    return <primitive object={scene} scale={0.01} {...props} />;
};

const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="gray" wireframe />
    </mesh>
);

const Chefknife = () => {
    return (
        <>
            <div className="p5">
                <a href="Knife"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back" /></a>
            </div>
            <div className="p2 d-grid justify-content-center align-items-center">
                <h1 className="font-weight-900">Chef's Knife</h1>
                <p className="p3 d-flex justify-content-center" style={{ fontSize: "30px", maxWidth: "1000px" }}>
                    A chef's knife is among the most versatile knives in the kitchen and can be used for anything from chopping to cutting.
                    Common uses include cutting meat, dicing vegetables, slicing herbs, and chopping nuts. The flat side of the knife can even be used to crush garlic.
                    <br /><br />
                    The versatility of this multi-purpose knife makes it a must-have in any kitchen. It is important to avoid any hard surfaces that would render the 
                    blade dull. In addition, learning how to hold a chef's knife is an important first step to ensure the best results when using it.
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
    );
};




export default Chefknife;
