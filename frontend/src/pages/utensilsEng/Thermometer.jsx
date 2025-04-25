import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "80px", marginBottom: "30px", marginTop: "30px", }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0, }}>
                <li className="breadcrumb-item" style={{ display: "inline" }}>
                    <a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item" style={{ display: "inline" }}>
                    <a href="/Measuring" style={{ color: "black", textDecoration: "none" }}>Measuring Tools</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{
                    display: "inline",
                    color: "black",
                    fontWeight: "bold"
                }}>
                   Thermometer
                </li>
            </ol>
        </nav>
    );
};

const Peelers = () => {

     useEffect(() => {
            // Change the document title when this page is rendered
            document.title = "CuiSining - thermometer";
          }, []);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    // Determine number of columns based on screen width
    const getGridColumns = () => {
        if (windowWidth < 576) {
            return "1fr"; // 1 column for mobile
        } else if (windowWidth < 992) {
            return "repeat(2, 1fr)"; // 2 columns for tablets
        } else {
            return "repeat(3, 1fr)"; // 3 columns for desktops
        }
    };
    
    return (
       <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>

        <Navbar/>
        <div className="container-fluid py-2">
            <Breadcrumb />
            
            <div className="row justify-content-center" style={{ marginTop: "-30px" }}>
                <div className="col-12 col-md-10 col-lg-9">
                    <h1 className="text-left mb-4 font-weight-800" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "26px" }}>Thermometer</h1>
                    
                    <div className="d-grid gap-4" style={{ marginBottom: "100px", gridTemplateColumns: getGridColumns() }}>

                        {/* Swivel Peeler */}
                        <a href="Candythermometer" className="peeler-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976493/Group_10_3_gk3sep.png" 
                                className="img-fluid hover-shadow" alt="Swivel Peeler"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Candy Thermometer
                            </h1>
                        </a>

                        {/* Swiss Peeler */}
                        <a href="FridgeThermometer" className="peeler-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976584/Group_1000005992_3_vwegtx.png" 
                                className="img-fluid hover-shadow" alt="Swiss Peeler"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                               FridgeThermometer
                            </h1>
                        </a>

                        {/* Lancashire Peeler */}
                        <a href="Meatthermometer" className="peeler-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976652/Group_1000005993_1_oped9j.png" 
                                className="img-fluid hover-shadow" alt="Lancashire Peeler"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Meat Thermometer
                            </h1>
                        </a>

                        {/* Serrated Peeler */}
                        <a href="Oventhermometer" className="peeler-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976712/Group_1000005994_1_rrczff.png" 
                                className="img-fluid hover-shadow" alt="Serrated Peeler"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Oven Thermometer
                            </h1>
                        </a>

                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default Peelers;