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
                <li className="breadcrumb-item active" aria-current="page" style={{
                    display: "inline",
                    color: "black",
                    fontWeight: "bold"
                }}>
                    Appliances
                </li>
            </ol>
        </nav>
    );
};

const Appliances = () => {
     useEffect(() => {
                // Change the document title when this page is rendered
                document.title = "CuiSining - Appliances";
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
                    <h1 className="text-left mb-4 font-weight-800" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "26px" }}>Appliances</h1>
                    
                    <div className="d-grid gap-4" style={{ marginBottom: "100px", gridTemplateColumns: getGridColumns() }}>

                        {/* Blending Appliances */}
                        <a href="BlendingAppliances" className="appliance-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710565/Group_10_23_safwdo.png" 
                                className="img-fluid hover-shadow" alt="Blending Appliances"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Blending Appliances
                            </h1>
                        </a>

                        {/* Heating Appliances */}
                        <a href="HeatingAppliances" className="appliance-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710638/Group_1000005992_21_xyij7j.png" 
                                className="img-fluid hover-shadow" alt="Heating Appliances"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Heating Appliances
                            </h1>
                        </a>

                        {/* Food Storage Appliances */}
                        <a href="FoodStorageAppliances" className="appliance-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710702/Group_1000005993_11_bupwm5.png" 
                                className="img-fluid hover-shadow" alt="Food Storage Appliances"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Food Storage Appliances
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default Appliances;