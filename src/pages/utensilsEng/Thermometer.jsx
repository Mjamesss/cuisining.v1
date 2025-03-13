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
                <li className="breadcrumb-item active" aria-current="page" style={{ display: "inline", color: "black", fontWeight: "bold" }}>Peelers</li>
            </ol>
        </nav>
    );
};

const Peelers = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Peelers</h1>
                        <div className="d-grid gap-4" style={{ gridTemplateColumns: getGridColumns() }}>
                            <a href="Swivel" className="peeler-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976493/Group_10_3_gk3sep.png" className="img-fluid hover-shadow" alt="Swivel Peeler" />

                            </a>
                            <a href="Swiss" className="peeler-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976584/Group_1000005992_3_vwegtx.png" className="img-fluid hover-shadow" alt="Swiss Peeler" />

                            </a>
                            <a href="Lancashire" className="peeler-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976652/Group_1000005993_1_oped9j.png" className="img-fluid hover-shadow" alt="Lancashire Peeler" />

                            </a>
                            <a href="Serrated" className="peeler-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976712/Group_1000005994_1_rrczff.png" className="img-fluid hover-shadow" alt="Serrated Peeler" />

                            </a>
                            <a href="Julienne" className="peeler-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976777/Group_1000005995_2_eajt8i.png" className="img-fluid hover-shadow" alt="Julienne Peeler" />

                            </a>
                            <a href="Mechanical" className="peeler-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976854/Group_1000005996_1_dv4lf4.png" className="img-fluid hover-shadow" alt="Mechanical Peeler" />

                            </a>
                            <a href="Rotary" className="peeler-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976901/Group_10_4_miqvmv.png" className="img-fluid hover-shadow" alt="Rotary Peeler" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .peeler-item {
                    transition: transform 0.3s ease;
                    display: block;
                }
                .peeler-item:hover {
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

export default Peelers;
