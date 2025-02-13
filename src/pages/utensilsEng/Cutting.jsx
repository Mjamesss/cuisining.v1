
import "../../fw-cuisining.css";

const Cutting = () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Cutting Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Knife">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739383404/knives_jxbew1.png"></img>
        </a>
        <a href="Scissors">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739383404/knives_jxbew1.png"></img>
        </a>
        <a href="Peelers">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739383459/peelers_vge6v7.png"></img>
        </a> 
        <a href="Grater">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739383482/graters_zbehxs.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Cutting;