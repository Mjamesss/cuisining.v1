import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Measuring Tools</li>
            </ol>
        </nav>
    );
};

const Measuring = () => {
    return (
       <>
      <Navbar/>
      <div className="p5 ">
        <Breadcrumb />
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Measuring Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="MeasuringCup">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739420257/measuring_cup_ejspoa.png"></img>
        </a>
        <a href="MeasuringSpoon">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739420285/MeasuringSpoon_kvzzqq.png"></img>
        </a>
        <a href="Kitchenscale">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739420343/KitchenScale_qry07v.png"></img>
        </a>
        <a href="Thermometer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739421084/Group_1000005994_layaem.png"></img>
        </a> 
        <a href="Timer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739420392/Timer_yybwn6.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Measuring;