
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Protein</li>
            </ol>
        </nav>
    );
};


const Protein= () => {
    return (
       <>
        <Navbar/>
      <div className="p5 ">
        <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Proteins</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Beef">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740802732/1_ogztxj.png"></img>
        </a>
        <a href="ChickenBreast">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005992_imveha.png"></img>
        </a>
        <a href="CodFillet">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005993_nf5adu.png"></img>
        </a> 
        <a href="GroundBeef">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005994_twtqol.png"></img>
        </a>
        <a href="Shrimp">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740755891/Group_10_dogskh.png"></img>
        </a>
        <a href="Tofu">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803988/Group_1000005672_jaxydc.png"></img>
        </a>
        <a href="Tuna">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_10000054321_klpegm.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Protein;