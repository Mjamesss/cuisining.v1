
import "../../fw-cuisining.css";

const Protein= () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Proteins</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Beef">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740802732/1_ogztxj.png"></img>
        </a>
        <a href="ChickenBreast">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005992_imveha.png"></img>
        </a>
        <a href="CodFillet">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005993_nf5adu.png"></img>
        </a> 
        <a href="GroundBeef">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005994_twtqol.png"></img>
        </a>
        <a href="Shrimp">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740755891/Group_10_dogskh.png"></img>
        </a>
        <a href="Tofu">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803988/Group_1000005672_jaxydc.png"></img>
        </a>
        <a href="Tuna">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_10000054321_klpegm.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Protein;