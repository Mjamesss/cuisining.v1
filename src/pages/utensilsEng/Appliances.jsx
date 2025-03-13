import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Appliances</li>
            </ol>
        </nav>
    );
};

const Appliances = () =>{
    return (
        <>
        <Navbar/>
        <div className="p5 ">
        <Breadcrumb />
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-80px"}}>
        <h1>Appliances</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="BlendingAppliances">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710565/Group_10_23_safwdo.png"></img>
        </a>
        <a href="HeatingAppliances">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710638/Group_1000005992_21_xyij7j.png"></img>
        </a>
        <a href="FoodStorageAppliances">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710702/Group_1000005993_11_bupwm5.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Appliances;