import "../../../../fw-cuisining.css";

const Paring = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Paring knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A paring knife is a small, sharp knife designed for precise cutting tasks. It
            s commonly used for peeling fruits and vegetables, trimming fat,
            deveining shrimp, and making intricate cuts.
            <br></br>
            <br></br>
            With its short, pointed blade, a paring knife offers excellent control, 
            making it ideal for delicate kitchen tasks that require accuracy. It is a
            must-have tool for any kitchen, providing versatility for both simple and
            detailed food preparation
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default Paring;