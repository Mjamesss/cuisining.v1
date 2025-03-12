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
                    <a href="/Cutting" style={{ color: "black", textDecoration: "none" }}>Cutting</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ display: "inline", color: "black", fontWeight: "bold" }}>Grater</li>
            </ol>
        </nav>
    );
};

const Grater = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Grater</h1>
                        <div className="d-grid gap-4" style={{ gridTemplateColumns: getGridColumns() }}>
                            <a href="BoxGrater" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976980/Group_10_5_etxib9.png" className="img-fluid hover-shadow" alt="Box Grater" />
                            </a>
                            <a href="HandGrater" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739977069/Group_1000005992_4_pnd7mp.png" className="img-fluid hover-shadow" alt="Hand Grater" />
                            </a>
                            <a href="RaspGrater" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739977131/Group_1000005993_2_igydby.png" className="img-fluid hover-shadow" alt="Rasp Grater" />
                            </a>
                            <a href="MandolineGrater" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739977200/Group_1000005994_2_wm3kir.png" className="img-fluid hover-shadow" alt="Mandoline Grater" />
                            </a>
                            <a href="RotaryGrater" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739977477/Group_1000005995_3_mpd4ph.png" className="img-fluid hover-shadow" alt="Rotary Grater" />
                            </a>
                            <a href="SpiceGrater" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739977884/Group_1000005996_2_jnuabs.png" className="img-fluid hover-shadow" alt="Spice Grater" />
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

export default Grater;
