
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Oil and Fats</li>
            </ol>
        </nav>
    );
};


const OilFats= () => {
    return (
       <>
         <Navbar/>
      <div className="p5 ">
        <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Oil & Fats</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="CanolaOil">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806641/Group_32_fnewmq.png"></img>
        </a>
        <a href="CoconutOil">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806641/Group_33_hgbnrk.png"></img>
        </a>
        <a href="Lard">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806641/Group_34_jczqrn.png"></img>
        </a> 
        <a href="OliveOil">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806638/Group_35_tdegui.png"></img>
        </a>
        
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default OilFats;