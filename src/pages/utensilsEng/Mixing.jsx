import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" style={{ marginLeft: "60px", padding: "1 40px", marginBottom: "40px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Mixing Tools</li>
            </ol>
        </nav>
    );
};

const Peelers = () =>{
    return (
        <>
        <Navbar/>
        <div className="p5 ">
        <Breadcrumb />
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid"style={{marginTop: "-70px"}}>
        <h1>Mixing Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Mixingbowls">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740113635/Group_10_12_suhnf9.png"></img>
        </a>
        <a href="whisk">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740113733/Group_1000005992_10_p3kybu.png"></img>
        </a>
        <a href="Electricmixer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740113822/Group_1000005994_4_sclnxa.png"></img>
        </a>
        <a href="Rubberscraper">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740113877/Group_1000005995_6_kobrg0.png"></img>
        </a>
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Peelers;