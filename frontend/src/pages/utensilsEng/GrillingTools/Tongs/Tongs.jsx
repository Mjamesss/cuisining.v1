
import "../../../../fw-cuisining.css";
import { useEffect } from "react";

const Tongs = () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Tongs";
      }, []);

    return (
       <>
      <div className="p5 ">
       <a href="GrillingTools"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Tongs</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Saladtongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389440/Group_10_20_b6x8qf.png"></img>
        </a>
        <a href="Servingtongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389558/Group_1000005992_18_v3gysf.png"></img>
        </a>
        <a href="Scissortongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389600/Group_1000005997_2_qu1h2s.png"></img>
        </a> 
        <a href="Pastatongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389649/Group_1000005998_2_a5btcp.png"></img>
        </a>
        <a href="Lockingtongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389753/Group_1000005999_2_tthdla.png"></img>
        </a>
        <a href="Flattongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389796/Group_1000005993_9_mnojtc.png"></img>
        </a>
        <a href="Utilitytongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389865/Group_1000005993_10_ldfori.png"></img>
        </a>
        <a href="Bbqtongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389927/Group_1000006083_ajzrmo.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Tongs;