
import "../../../../fw-cuisining.css";

const Grills = () => {
    return (
       <>
      <div className="p5 ">
       <a href="GrillingTools"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Grills</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Opengrill">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740541496/Group_10_jn9m9m.png"></img>
        </a>
        <a href="Covergrill">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740329887/Group_1000005992_16_y1alsa.png"></img>
        </a>
        <a href="Smokergrill">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740329941/Group_1000005995_8_li5uvj.png"></img>
        </a> 
        <a href="Grillss">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740666436/Group_1000005996_5_lahjet.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Grills;