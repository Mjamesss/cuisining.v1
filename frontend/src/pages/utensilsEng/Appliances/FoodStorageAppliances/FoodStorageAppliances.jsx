import "../../../../fw-cuisining.css";
import { useEffect } from "react";

const HeatingAppliances = () =>{
      useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining -Food Storage";
      }, []);
    return (
        <>
        <div className="p5 ">
       <a href="Appliances"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Food Storage  Appliances</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Refrigirator">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740726237/Group_10_29_tvbnli.png"></img>
            
        </a>
        <a href="Freezer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740726305/Group_1000005992_27_rxrf2i.png"></img>
            
        </a>
        <a href="BreadBox">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740726352/Group_1000005993_18_lxal3t.png"></img>
            
        </a>
        <a href="Cooler">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740726401/Group_1000005993_19_cmkfvm.png"></img>
        </a>
      
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default HeatingAppliances;