

import "../../fw-cuisining.css";

const Measuring = () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="back.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Measuring Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="">
            <img src="Measuringcup.png"></img>
        </a>
        <a href="">
            <img src="MeasuringSpoon.png"></img>
        </a>
        <a href="">
            <img src="thermometer.png"></img>
        </a> 
        <a href="">
            <img src="Timer.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Measuring;