
import "../../../fw-cuisining.css";

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>GrillingTools</li>
            </ol>
        </nav>
    );
};

const GrillingTools = () => {
    return (
       <>
      <div className="p5 ">
      <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Grilling Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Grills">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740324097/Group_10_17_je7guk.png"></img>
        </a>
        <a href="Spatula">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740324213/Group_1000005992_15_kwaoyk.png"></img>
        </a>
        <a href="Tongs">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740324259/Group_1000005993_7_vhfapl.png"></img>
        </a> 
        <a href="BastingBrushes">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740324307/Group_1000005994_6_nh01do.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default GrillingTools;