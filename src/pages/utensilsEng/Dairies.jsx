
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Dairies</li>
            </ol>
        </nav>
    );
};

const Dairies = () => {
    return (
       <>
        <Navbar/>
      <div className="p5 ">
        <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid" style={{marginTop: "-70px"}}>
        <h1>Dairies</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Butter">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804679/Group_10_dacyo5.png"></img>
        </a>
        <a href="Cheese">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804679/Group_1000005992_n5cuog.png"></img>
        </a>
        <a href="Milk">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804680/Group_1000005993_npkdf4.png"></img>
        </a> 
        <a href="Yogurt">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804680/Group_1000005994_qssqz8.png"></img>
        </a>

        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Dairies;