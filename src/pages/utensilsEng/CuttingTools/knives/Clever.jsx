import "../../../../fw-cuisining.css";

const Clever = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="back.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Clever knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A cleaver knife is a large, heavy-duty knife designed for cutting through
            tough meats, bones, and dense vegetables. It features a broad,
            rectangular blade that provides both power and precision when chopping,
            slicing, and crushing ingredients.
            <br></br>
            <br></br>
            This knife is commonly used in butchery and professional kitchens for 
            breaking down large cuts of meat, cutting through bones, and preparing  
            hard vegetables like squash. The flat side of the blade can also be used to 
            crush garlic or tenderize meat. Its sturdy design makes it an essential tool
            for heavy-duty kitchen tasks
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default Clever