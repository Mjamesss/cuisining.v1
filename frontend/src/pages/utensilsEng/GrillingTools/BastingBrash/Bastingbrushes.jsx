import "../../../../fw-cuisining.css";
import Navbar from '../../../../components/Navbar';
import { useEffect, useState } from 'react';

// Breadcrumb Component
const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item">
                    <a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item">
                    <a href="/GrillingTools" style={{ color: "black", textDecoration: "none" }}>Grilling Tools</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>
                    Basting Brushes
                </li>
            </ol>
        </nav>
    );
};

// Basting Brushes Page
const Bastingbrushes = () => {
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Basting Brushes";
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
            <Navbar />
            <div className="container-fluid py-3">
                <Breadcrumb />
                
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Basting Brushes</h1>
                        
                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: getGridColumns(),
                        }}>
                            <a href="Naturalbrush" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740390158/Group_10_21_svholp.png" 
                                     alt="Natural Brush" 
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Siliconbrushes" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740390954/Group_1000005992_19_jfdbxx.png" 
                                     alt="Silicon Brush" 
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Nylonbrushes" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740391067/Group_1000005997_4_vov4hq.png" 
                                     alt="Nylon Brush" 
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Mopbrushes" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740391157/Group_1000005998_3_u1fbof.png" 
                                     alt="Mop Brush" 
                                     className="img-fluid hover-shadow" />
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

export default Bastingbrushes;
