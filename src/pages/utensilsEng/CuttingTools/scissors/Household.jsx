import "../../../../fw-cuisining.css";

const Household = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Scissors"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Household Scissor</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Household scissors are general-purpose scissors designed for everyday tasks, such as cutting paper, fabric, plastic, and lightweight materials. They have sharp, straight blades and ergonomic handles for comfort.
            <br></br>
            <br></br>
Unlike specialized kitchen shears, household scissors are not meant for food preparation, as they may lack the necessary durability and blade strength for cutting tougher materials.
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default Household;