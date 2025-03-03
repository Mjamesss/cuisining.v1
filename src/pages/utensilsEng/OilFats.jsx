
import "../../fw-cuisining.css";

const OilFats= () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Oil & Fats</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="CanolaOil">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806641/Group_32_fnewmq.png"></img>
        </a>
        <a href="CoconutOil">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806641/Group_33_hgbnrk.png"></img>
        </a>
        <a href="Lard">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806641/Group_34_jczqrn.png"></img>
        </a> 
        <a href="OliveOil">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806638/Group_35_tdegui.png"></img>
        </a>
        
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default OilFats;