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
                    Fruits
                </li>
            </ol>
        </nav>
    );
};

const Fruits = () => {

    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Fruits";
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
    
    const getGridColumns = () => {
        if (windowWidth < 576) {
            return "1fr";
        } else if (windowWidth < 992) {
            return "repeat(2, 1fr)";
        } else {
            return "repeat(3, 1fr)";
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
                    <h1 className="text-left mb-4 font-weight-800" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "26px" }}>Fruits</h1>
                    
                    <div className="d-grid gap-4" style={{ marginBottom: "100px", gridTemplateColumns: getGridColumns() }}>
                        {/* Apple */}
                        <a href="Apple" className="fruit-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804859/Group_11_wybhg6.png" 
                                className="img-fluid hover-shadow" alt="Apple"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Apple
                            </h1>
                        </a>

                        {/* Banana */}
                        <a href="Banana" className="fruit-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_12_zrwdet.png" 
                                className="img-fluid hover-shadow" alt="Banana"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Banana
                            </h1>
                        </a>

                        {/* Lemon */}
                        <a href="Lemon" className="fruit-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_13_ofawna.png" 
                                className="img-fluid hover-shadow" alt="Lemon"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Lemon
                            </h1>
                        </a>

                        {/* Papaya */}
                        <a href="Papaya" className="fruit-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_14_tkjcs9.png" 
                                className="img-fluid hover-shadow" alt="Papaya"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Papaya
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default Fruits;