import "../../../fw-cuisining.css";
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item">
                    <a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item">
                    <a href="/Measuring" style={{ color: "black", textDecoration: "none" }}>Measuring Tools</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Measuring Cups</li>
            </ol>
        </nav>
    );
};

const Cutting = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Measuring Cups</h1>

                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: getGridColumns(),
                        }}>
                            <a href="DryMeasuring" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739981254/Group_10_6_jyho9x.png"
                                     alt="Dry Measuring Cup"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="LiquidMeasure" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739981307/Group_1000005992_5_pmqyha.png"
                                     alt="Liquid Measuring Cup"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Collapsemeasure" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739981355/Group_1000005994_3_l6rznf.png"
                                     alt="Collapsible Measuring Cup"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Digitalmeasure" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739981431/Group_1000005995_4_fpfuwm.png"
                                     alt="Digital Measuring Cup"
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

export default Cutting;
