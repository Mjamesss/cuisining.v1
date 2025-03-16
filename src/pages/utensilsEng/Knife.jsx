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
                    <a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting Tools</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ display: "inline", color: "black", fontWeight: "bold" }}>Knife</li>
            </ol>
        </nav>
    );
};

const Knife = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Knife</h1>
                        <div className="d-grid gap-4" style={{ gridTemplateColumns: getGridColumns() }}>
                            <a href="Chefknife" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964983/Group_10_dp7gt7.png" className="img-fluid hover-shadow" alt="Chef Knife" />
                            </a>
                            <a href="Santoku" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965039/Group_1000005992_1_od2i72.png" className="img-fluid hover-shadow" alt="Santoku Knife" />
                            </a>
                            <a href="Boning" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965090/Group_1000005994_pawuix.png" className="img-fluid hover-shadow" alt="Boning Knife" />
                            </a>
                            <a href="Bread" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965139/Group_1000005995_1_iwkcfd.png" className="img-fluid hover-shadow" alt="Bread Knife" />
                            </a>
                            <a href="Clever" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965180/Group_1000005996_wzdwrh.png" className="img-fluid hover-shadow" alt="Clever Knife" />
                            </a>
                            <a href="Paring" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965242/Group_10_1_kuaa0l.png" className="img-fluid hover-shadow" alt="Paring Knife" />
                            </a>
                            <a href="Steak" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739965323/Group_1000005992_2_ncmqrk.png" className="img-fluid hover-shadow" alt="Steak Knife" />
                            </a>
                            <a href="Fillet" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739975766/fillet_qzuiw0.png" className="img-fluid hover-shadow" alt="Fillet Knife" />
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

export default Knife;
