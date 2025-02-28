
import "../../../fw-cuisining.css";

const GrillingTools = () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Grilling Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Grills">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740324097/Group_10_17_je7guk.png"></img>
        </a>
        <a href="Spatula">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740324213/Group_1000005992_15_kwaoyk.png"></img>
        </a>
        <a href="Tongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740324259/Group_1000005993_7_vhfapl.png"></img>
        </a> 
        <a href="BastingBrushes">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740324307/Group_1000005994_6_nh01do.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default GrillingTools;