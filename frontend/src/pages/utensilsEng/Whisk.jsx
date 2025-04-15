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
                    <a href="/Mixing" style={{ color: "black", textDecoration: "none" }}>Mixing Tools</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{
                    display: "inline",
                    color: "black",
                    fontWeight: "bold"
                }}>
                    Whisks
                </li>
            </ol>
        </nav>
    );
};

const Whisk = () => {
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
                    <h1 className="text-left mb-4 font-weight-800" style={{ fontFamily: "'Nunito', sans-serif", color: "#000000", fontSize: "26px" }}>Whisks</h1>
                    
                    <div className="d-grid gap-4" style={{ marginBottom: "100px", gridTemplateColumns: getGridColumns() }}>

                        {/* Whisk */}
                        <a href="Whiskk" className="whisk-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236291/Group_10_14_gp5a5e.png" 
                                className="img-fluid hover-shadow" alt="Whisk"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Whisk
                            </h1>
                        </a>

                        {/* Kettle Whisk */}
                        <a href="Kettlewhisk" className="whisk-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236362/Group_1000005992_12_o2vyys.png" 
                                className="img-fluid hover-shadow" alt="Kettle Whisk"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Kettle Whisk
                            </h1>
                        </a>

                        {/* Minibar Whisk */}
                        <a href="Minibarwhisk" className="whisk-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236428/Group_1000005993_6_mfuwky.png" 
                                className="img-fluid hover-shadow" alt="Minibar Whisk"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Minibar Whisk
                            </h1>
                        </a>

                        {/* Flat Whisk */}
                        <a href="Flatwhisk" className="whisk-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236470/Group_1000005994_5_jcncfz.png" 
                                className="img-fluid hover-shadow" alt="Flat Whisk"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Flat Whisk
                            </h1>
                        </a>

                        {/* Spiral Whisk */}
                        <a href="Spiralwhisk" className="whisk-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236508/Group_1000005995_7_wnvskp.png" 
                                className="img-fluid hover-shadow" alt="Spiral Whisk"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Spiral Whisk
                            </h1>
                        </a>

                        {/* Dough Whisk */}
                        <a href="Doughwhisk" className="whisk-item text-center" style={{ textDecoration: "none", position: "relative" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236548/Group_1000005996_3_hnwgvm.png" 
                                className="img-fluid hover-shadow" alt="Dough Whisk"
                                style={{ clipPath: "inset(0 0 25px 0)" }} />
                            <h1 className="font-weight-800" 
                                style={{ fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000", position: "absolute", bottom: "10px", 
                                left: "0", right: "0", textAlign: "center", padding: "0 10px", margin: 0 }}>
                                Dough Whisk
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default Whisk;