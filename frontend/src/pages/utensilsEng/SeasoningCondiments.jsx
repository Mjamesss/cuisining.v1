import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "80px", marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item" style={{ display: "inline" }}>
                    <a href="/Ingredients" style={{ color: "black", textDecoration: "none" }}>Ingredients</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ 
                    display: "inline", 
                    color: "black", 
                    fontWeight: "bold" 
                }}>
                    Seasoning & Condiments
                </li>
            </ol>
        </nav>
    );
};

const SeasoningCondiments = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Seasoning And Condiments";
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
                    <h1 className="text-left mb-4 font-weight-800" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "26px" }}>Seasoning & Condiments</h1>
                    
                    <div className="d-grid gap-4" style={{ marginBottom: "100px", gridTemplateColumns: getGridColumns() }}>

                        {/* Fish Sauce */}
                        <a href="FishSauce" className="protein-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740827641/Group_1000005993_m6f8a3.png" 
                                className="img-fluid hover-shadow" alt="Fish Sauce"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Fish Sauce
                            </h1>
                        </a>

                        {/* Hot Sauce */}
                        <a href="HotSauce" className="protein-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806784/Group_36_rljza0.png" 
                                className="img-fluid hover-shadow" alt="Hot Sauce"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Hot Sauce
                            </h1>
                        </a>

                        {/* Pepper */}
                        <a href="Pepper" className="protein-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806782/Group_38_qxojiv.png" 
                                className="img-fluid hover-shadow" alt="Pepper"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Pepper
                            </h1>
                        </a>

                        {/* Salt */}
                        <a href="Salt" className="protein-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806778/Group_39_sqbf4q.png" 
                                className="img-fluid hover-shadow" alt="Salt"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Salt
                            </h1>
                        </a>

                        {/* Soy Sauce */}
                        <a href="SoySauce" className="protein-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806778/Group_40_v0nw6h.png" 
                                className="img-fluid hover-shadow" alt="Soy Sauce"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Soy Sauce
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default SeasoningCondiments;