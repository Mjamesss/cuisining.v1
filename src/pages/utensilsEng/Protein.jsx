import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px", }}>
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
                  Protein
                </li>
            </ol>
        </nav>
    );
};

const Protein = () => {
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
        <Navbar/>
        <div className="container-fluid py-3">
            <Breadcrumb />
            
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9">
                    <h1 className="text-left mb-4" style={{ fontSize: "35px", }}>Proteins</h1>
                    
                    <div className="d-grid gap-4" style={{
                        gridTemplateColumns: getGridColumns(),
                    }}>
                        <a href="Beef" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740802732/1_ogztxj.png" 
                                 className="img-fluid hover-shadow" 
                                 alt="Beef" />
                        </a>
                        <a href="ChickenBreast" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005992_imveha.png" 
                                 className="img-fluid hover-shadow" 
                                 alt="Chicken Breast" />
                        </a>
                        <a href="CodFillet" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005993_nf5adu.png" 
                                 className="img-fluid hover-shadow" 
                                 alt="Cod Fillet" />
                        </a> 
                        <a href="GroundBeef" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_1000005994_twtqol.png" 
                                 className="img-fluid hover-shadow" 
                                 alt="Ground Beef" />
                        </a>
                        <a href="Shrimp" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740755891/Group_10_dogskh.png" 
                                 className="img-fluid hover-shadow" 
                                 alt="Shrimp" />
                        </a>
                        <a href="Tofu" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803988/Group_1000005672_jaxydc.png" 
                                 className="img-fluid hover-shadow" 
                                 alt="Tofu" />
                        </a>
                        <a href="Tuna" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740803989/Group_10000054321_klpegm.png" 
                                 className="img-fluid hover-shadow" 
                                 alt="Tuna" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Add this CSS to your stylesheet */}
        <style jsx>{`
            .protein-item {
                transition: transform 0.3s ease;
                display: block;
            }
            
            .protein-item:hover {
                transform: scale(1.05);
            }
            
            .hover-shadow:hover {
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            
            @media (max-width: 576px) {
                h1 {
                    font-size: 1.8rem;
                }
            }
        `}</style>
       </>
    );
};

export default Protein;