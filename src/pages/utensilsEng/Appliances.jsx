import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Appliances</h1>

                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: getGridColumns(),
                        }}>
                            <a href="BlendingAppliances" className="appliance-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710565/Group_10_23_safwdo.png"
                                    className="img-fluid hover-shadow"
                                    alt="Blending Appliances" />
                            </a>
                            <a href="HeatingAppliances" className="appliance-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710638/Group_1000005992_21_xyij7j.png"
                                    className="img-fluid hover-shadow"
                                    alt="Heating Appliances" />
                            </a>
                            <a href="FoodStorageAppliances" className="appliance-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710702/Group_1000005993_11_bupwm5.png"
                                    className="img-fluid hover-shadow"
                                    alt="Food Storage Appliances" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add this CSS to your stylesheet */}
            <style jsx>{`
                .appliance-item {
                    transition: transform 0.3s ease;
                    display: block;
                }
                
                .appliance-item:hover {
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

export default Appliances;
