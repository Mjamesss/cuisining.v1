import "../../fw-cuisining.css";

const Timer = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Measuring"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Timer</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Mechanicaltimer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740070645/Group_1000005995_5_tg1ngl.png"></img>
        </a>
        <a href="Digitaltimer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740072051/Group_1000005992_9_bwcsmr.png"></img>
        </a>
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Timer;