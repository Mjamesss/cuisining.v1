
import "../../fw-cuisining.css";

const GrainStarches= () => {
    return (
       <>
      <div className="p5">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Grain & Starches</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Barley">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740805015/Group_17_vo6xus.png"></img>
        </a>
        <a href="Buckwheat">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740805018/Group_18_nzfsyh.png"></img>
        </a>
        <a href="Corn">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740805019/Group_19_zlrxup.png"></img>
        </a> 
        <a href="Farro">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740805019/Group_20_vt0czl.png"></img>
        </a>

        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default GrainStarches;