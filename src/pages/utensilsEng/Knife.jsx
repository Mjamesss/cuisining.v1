import "../../fw-cuisining.css";

const Knife = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Cutting"><img src="back.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Knife</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Chefknife">
            <img src="chefknife.png"></img>
        </a>
        <a href="Santoku">
            <img src="santokuknife.png"></img>
        </a>
        <a href="Utility">
            <img src="Utilityknife.png"></img>
        </a>
        <a href="Boning">
            <img src="boningknife.png"></img>
        </a>
        <a href="Bread">
            <img src="breadknife.png"></img>
        </a>
        <a href="Clever">
            <img src="cleverknife.png"></img>
        </a>
        <a href="Paring">
            <img src="paringknife.png"></img>
        </a>
        <a href="Steak">
            <img src="steakknife.png"></img>
        </a>
        <a href="Fillet">
            <img src="filletknife.png"></img>
        </a>
        <a href="">
            <img src="filletknife2.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Knife;