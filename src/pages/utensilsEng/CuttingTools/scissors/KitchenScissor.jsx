import "../../../../fw-cuisining.css";

const KitchenScissor = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Scissors"><img src="back.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Kitchen Scissor</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Kitchen scissors are versatile cutting tools used for a variety of food preparation tasks, such as trimming herbs, cutting meat, snipping vegetables, and opening food packaging. They often feature stainless steel blades for durability and easy cleaning.
            <br></br>
            <br></br>
Some kitchen scissors come with additional functions like a built-in bottle opener, nutcracker, or fish scaler, making them a must-have tool in any kitchen.
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default KitchenScissor;