
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Seasoning and Condiments</li>
            </ol>
        </nav>
    );
};

const SeasoningCondiments= () => {
    return (
       <>
        <Navbar/>
      <div className="p5 ">
        <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Seasoning & Condiments</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="FishSauce">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740827641/Group_1000005993_m6f8a3.png"></img>
        </a>
        <a href="HotSauce">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806784/Group_36_rljza0.png"></img>
        </a>
        <a href="Pepper">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806782/Group_38_qxojiv.png"></img>
        </a>
        <a href="Salt">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806778/Group_39_sqbf4q.png"></img>
        </a>
        <a href="SoySauce">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806778/Group_40_v0nw6h.png"></img>
        </a>

        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default SeasoningCondiments;