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
                <li className="breadcrumb-item" style={{ display: "inline" }}>
                    <a href="/Measuring" style={{ color: "black", textDecoration: "none" }}>Measuring</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ display: "inline", color: "black", fontWeight: "bold" }}>Kitchen Scales</li>
            </ol>
        </nav>
    );
};

const Kitchenscale = () => {
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
            <Navbar />
            <div className="container-fluid py-3">
                <Breadcrumb />
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Kitchen Scales</h1>
                        <div className="d-grid gap-4" style={{ gridTemplateColumns: getGridColumns() }}>
                            <a href="Mechanicalscale" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740067056/Group_10_8_z1aqql.png" className="img-fluid hover-shadow" alt="Mechanical Scale" />
                            </a>
                            <a href="Digitalscale" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740067478/Group_1000005992_7_ko5a0i.png" className="img-fluid hover-shadow" alt="Digital Scale" />
                            </a>
                            <a href="Smartnutritionscale" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740067580/Group_1000005997_orbvc2.png" className="img-fluid hover-shadow" alt="Smart Nutrition Scale" />
                            </a>
                            <a href="Hangingscale" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740067687/Group_1000005998_ylxism.png" className="img-fluid hover-shadow" alt="Hanging Scale" />
                            </a>
                            <a href="Largecapacityscale" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740067758/Group_1000005999_i7hmhy.png" className="img-fluid hover-shadow" alt="Large Capacity Scale" />
                            </a>
                            <a href="Gramscale" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740067838/Group_1000005993_3_ivh1bu.png" className="img-fluid hover-shadow" alt="Gram Scale" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .grilling-item {
                    transition: transform 0.3s ease;
                    display: block;
                }
                .grilling-item:hover {
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

export default Kitchenscale;
