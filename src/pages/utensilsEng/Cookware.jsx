import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Cookware</li>
            </ol>
        </nav>
    );
};


const Cookware = () =>{
    return (
        <>
        <Navbar/>
        <div className="p5 ">
        <Breadcrumb />
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-80px"}}>
        <h1>Cookware</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Pans">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710151/Group_10_22_gtqyzc.png"></img>
        </a>
        <a href="Pots">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710393/Group_1000005992_20_efvzp1.png"></img>
        </a>
        <a href="Bakeware">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710793/Group_1000005993_12_ykhldv.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Cookware;