

import "../../fw-cuisining.css";

const Cutting = () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="back.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Cutting Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Knife">
            <img src="knives.png"></img>
        </a>
        <a href="">
            <img src="gunting.png"></img>
        </a>
        <a href="">
            <img src="peelers.png"></img>
        </a>
        <a href="">
            <img src="grater.png"></img>
        </a>
        <a href="">
            <img src="graters.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Cutting;