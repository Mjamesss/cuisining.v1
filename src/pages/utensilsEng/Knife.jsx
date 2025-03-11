import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "110px", padding: "1 40px", marginBottom: "40px", marginTop: "-2%" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item"><a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting Tools</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Knife</li>
            </ol>
        </nav>
    );
};

const Knife = () => {
    return (
        <>
        <Navbar/>
        <div className="p5 ">
       </div>
       <Breadcrumb /> {/* Breadcrumb added here */}
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-30px"}}>
        <h1>Knife</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Chefknife">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964983/Group_10_dp7gt7.png"></img>
        </a>
        <a href="Santoku">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965039/Group_1000005992_1_od2i72.png"></img>
        </a>
        <a href="Boning">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965090/Group_1000005994_pawuix.png"></img>
        </a>
        <a href="Bread">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965139/Group_1000005995_1_iwkcfd.png"></img>
        </a>
        <a href="Clever">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965180/Group_1000005996_wzdwrh.png"></img>
        </a>
        <a href="Paring">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965242/Group_10_1_kuaa0l.png"></img>
        </a>
        <a href="Steak">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965323/Group_1000005992_2_ncmqrk.png"></img>
        </a>
        <a href="Fillet">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739975766/fillet_qzuiw0.png"></img>
        </a>
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Knife;