import "../../../../fw-cuisining.css";
import { useEffect } from "react";

const Pots = () =>{
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Pot";
      }, []);
    return (
        <>
        <div className="p5 ">
       <a href="Cookware"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Pots</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Brazier">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711863/Group_10_25_ofcdrc.png"></img>
            
        </a>
        <a href="Dutchoven">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711932/Group_1000005998_4_g3odeu.png"></img>
            
        </a>
        <a href="Stockpot">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711995/Group_1000005993_14_ygbrqa.png"></img>
            
        </a>
        <a href="Fryerpot">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740712249/Group_1000005994_8_pn4o5r.png"></img>
        </a>
        <a href="Pastapot">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740712302/Group_1000005995_10_szh3mr.png"></img>
        </a>
       
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Pots;