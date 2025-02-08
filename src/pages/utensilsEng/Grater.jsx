import "../../fw-cuisining.css";

const Grater = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Cutting"><img src="back.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Grater</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="BoxGrater">
            <img src="chefknife.png"></img>
            <p>BoxGrater</p>
        </a>
        <a href="HandGrater">
            <img src="santokuknife.png"></img>
            <p>HandGrater</p>
        </a>
        <a href="RaspGrater">
            <img src="Utilityknife.png"></img>
            <p>RaspGrater</p>
        </a>
        <a href="MandolineGrater">
            <img src="boningknife.png"></img>
            <p>MandolineGrater</p>
        </a>
        <a href="RotaryGrater">
            <img src="breadknife.png"></img>
            <p>RotaryGrater</p>
        </a>
        <a href="SpiceGrater">
            <img src="cleverknife.png"></img>
            <p>SpiceGrater</p>
        </a>
     
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Grater;