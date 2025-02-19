import "../../fw-cuisining.css";

const Scissors = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Cutting"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Scissors and shears</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Poultry">
            <img src="chefknife.png"></img>
            <p>Poultry</p>
        </a>
        <a href="Wusthof">
            <img src="santokuknife.png"></img>
            <p>Wusthof</p>
        </a>
        <a href="Household">
            <img src="breadknife.png"></img>
            <p>Household</p>
        </a>
        <a href="HerbScissor">
            <img src="cleverknife.png"></img>
            <p>HerbScissor</p>
        </a>
        <a href="SeafoodScissors">
            <img src="paringknife.png"></img>
            <p>Seafood</p>
        </a>
        <a href="Multipurpose">
            <img src="steakknife.png"></img>
            <p>Multipurpose</p>
        </a>
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Scissors;