
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Cutting Tools</li>
            </ol>
        </nav>
    );
};


const Cutting = () => {
    return (
       <>
       <Navbar/>
      <div className="p5 ">
      <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Cutting Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Knife">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964025/knives3d_gjmfpy.png"></img>
        </a>
        <a href="Scissors">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964299/Group_1000005992_i4zcwy.png"></img>
        </a>
        <a href="Peelers">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964350/Group_1000005993_vzrrhc.png"></img>
        </a> 
        <a href="Grater">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964394/Group_1000005995_pavlqd.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Cutting;