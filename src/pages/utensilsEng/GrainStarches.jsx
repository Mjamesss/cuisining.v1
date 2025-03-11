
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Grain and Starches</li>
            </ol>
        </nav>
    );
};

const GrainStarches= () => {
    return (
       <>
         <Navbar/>
      <div className="p5">
      <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Grain & Starches</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Barley">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740805015/Group_17_vo6xus.png"></img>
        </a>
        <a href="Buckwheat">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740805018/Group_18_nzfsyh.png"></img>
        </a>
        <a href="Corn">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740805019/Group_19_zlrxup.png"></img>
        </a> 
        <a href="Farro">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740805019/Group_20_vt0czl.png"></img>
        </a>

        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default GrainStarches;