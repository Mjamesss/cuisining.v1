import "../../../../fw-cuisining.css";

const HerbScissor = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Scissors"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Herb Scissor</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Herb scissors are specialized kitchen shears with multiple blades (usually five) that allow you to cut herbs quickly and evenly. They are perfect for finely chopping green onions, dill, or mint without crushing them.
             <br></br>
             <br></br>
These scissors often come with a cleaning comb to remove herb residue between the blades, ensuring efficiency and ease of use.
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default HerbScissor;