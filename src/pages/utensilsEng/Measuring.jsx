

import "../../fw-cuisining.css";

const Measuring = () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Measuring Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="MeasuringCup">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739420257/measuring_cup_ejspoa.png"></img>
        </a>
        <a href="MeasuringSpoon">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739420285/MeasuringSpoon_kvzzqq.png"></img>
        </a>
        <a href="Kitchenscale">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739420343/KitchenScale_qry07v.png"></img>
        </a>
        <a href="Thermometer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739421084/Group_1000005994_layaem.png"></img>
        </a> 
        <a href="Timer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739420392/Timer_yybwn6.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Measuring;