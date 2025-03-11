
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Herbs and Spices</li>
            </ol>
        </nav>
    );
};

const HerbsSpices= () => {
    return (
       <>
         <Navbar/>
      <div className="p5 ">
      <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Herbs & Spices</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="BayLeaf">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806464/Group_26_himoec.png"></img>
        </a>
        <a href="Chives">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806463/Group_27_bl00j7.png"></img>
        </a>
        <a href="CurryPowder">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806461/Group_28_hcqfmw.png"></img>
        </a> 
        <a href="Paprika">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806454/Group_29_rvezrc.png"></img>
        </a>
        <a href="Rosemary">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806453/Group_30_edjrdp.png"></img>
        </a>
        
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default HerbsSpices;