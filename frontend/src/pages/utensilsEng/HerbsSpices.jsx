import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "80px", marginBottom: "30px", marginTop: "30px", }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0, }}>
                <li className="breadcrumb-item" style={{ display: "inline" }}>
                  <a href="/Ingredients" style={{ color: "black", textDecoration: "none" }}>Ingredients</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ 
                    display: "inline", 
                    color: "black", 
                    fontWeight: "bold" 
                }}>
                  Herbs & Spices
                </li>
            </ol>
        </nav>
    );
};

const HerbsSpices = () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Herb And Spices";
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
                    <h1 className="text-left mb-4 font-weight-800" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "26px" }}>Herbs & Spices</h1>
                    
                    <div className="d-grid gap-4" style={{ marginBottom: "100px", gridTemplateColumns: getGridColumns() }}>

                        {/* Bay Leaf */}
                        <a href="BayLeaf" className="herb-spice-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806464/Group_26_himoec.png" 
                                className="img-fluid hover-shadow" alt="Bay Leaf"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Bay Leaf
                            </h1>
                        </a>

                        {/* Chives */}
                        <a href="Chives" className="herb-spice-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806463/Group_27_bl00j7.png" 
                                className="img-fluid hover-shadow" alt="Chives"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Chives
                            </h1>
                        </a>

                        {/* Curry Powder */}
                        <a href="CurryPowder" className="herb-spice-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806461/Group_28_hcqfmw.png" 
                                className="img-fluid hover-shadow" alt="Curry Powder"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Curry Powder
                            </h1>
                        </a>

                        {/* Paprika */}
                        <a href="Paprika" className="herb-spice-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806454/Group_29_rvezrc.png" 
                                className="img-fluid hover-shadow" alt="Paprika"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Paprika
                            </h1>
                        </a>

                        {/* Rosemary */}
                        <a href="Rosemary" className="herb-spice-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806453/Group_30_edjrdp.png" 
                                className="img-fluid hover-shadow" alt="Rosemary"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Rosemary
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default HerbsSpices;