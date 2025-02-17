import "../../fw-cuisining.css";

const Peelers = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Cutting"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Peelers</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Swivel">
            <img src="chefknife.png"></img>
            <p>Swivel</p>
        </a>
        <a href="Swis">
            <img src="santokuknife.png"></img>
            <p>Swiss</p>
        </a>
        <a href="Landcashier">
            <img src="Utilityknife.png"></img>
            <p>Lancashier</p>
        </a>
        <a href="Serrated">
            <img src="boningknife.png"></img>
            <p>Serrated</p>
        </a>
        <a href="Julienne">
            <img src="breadknife.png"></img>
            <p>julienne</p>
        </a>
        <a href="Mechanical">
            <img src="cleverknife.png"></img>
            <p>Mechanical</p>
        </a>
        <a href="Rotary">
            <img src="cleverknife.png"></img>
            <p>Rotary</p>
        </a>
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Peelers;