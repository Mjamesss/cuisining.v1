import "../../../../fw-cuisining.css";

const Bread = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="back.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Bread knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A bread knife is a long, serrated knife designed for slicing through bread 
            without crushing or tearing it. The serrated edge allows for clean cuts
            through crusty loaves, soft bread, bagels, and pastries while maintaining
            their shape and texture.
            <br></br>
            <br></br>
            In addition to bread, this knife is useful for slicing delicate cakes, 
            tomatoes, and other foods with a tough exterior and soft interior. A gentle
            sawing motion is recommended when using a bread knife to achieve
            precise and effortless cuts.
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default Bread;