import "../../fw-cuisining.css";

const Cookware = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Cookware</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Pans">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710151/Group_10_22_gtqyzc.png"></img>
        </a>
        <a href="Pots">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710393/Group_1000005992_20_efvzp1.png"></img>
        </a>
        <a href="Bakeware">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710793/Group_1000005993_12_ykhldv.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Cookware;