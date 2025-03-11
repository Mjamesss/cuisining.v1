
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Fruits</li>
            </ol>
        </nav>
    );
};

const Fruits= () => {
    return (
       <>
       <Navbar/>
      <div className="p5 ">
        <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Fruits</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Apple">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804859/Group_11_wybhg6.png"></img>
        </a>
        <a href="Banana">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_12_zrwdet.png"></img>
        </a>
        <a href="Lemon">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_13_ofawna.png"></img>
        </a> 
        <a href="Papaya">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_14_tkjcs9.png"></img>
        </a>
        <a href="Pineapple">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804862/Group_15_pfqvhd.png"></img>
        </a>
        <a href="Strawberry">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804866/Group_1000005996_zwcssh.png"></img>
        </a>
        
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Fruits;