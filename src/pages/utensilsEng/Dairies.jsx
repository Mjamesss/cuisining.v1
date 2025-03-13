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
                    Dairies
                </li>
            </ol>
        </nav>
    );
};

const Dairies = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px", }}>Dairies</h1>

                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: getGridColumns(),
                        }}>
                            <a href="Butter" className="dairy-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804679/Group_10_dacyo5.png"
                                    className="img-fluid hover-shadow"
                                    alt="Butter" />
                            </a>
                            <a href="Cheese" className="dairy-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804679/Group_1000005992_n5cuog.png"
                                    className="img-fluid hover-shadow"
                                    alt="Cheese" />
                            </a>
                            <a href="Milk" className="dairy-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804680/Group_1000005993_npkdf4.png"
                                    className="img-fluid hover-shadow"
                                    alt="Milk" />
                            </a>
                            <a href="Yogurt" className="dairy-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804680/Group_1000005994_qssqz8.png"
                                    className="img-fluid hover-shadow"
                                    alt="Yogurt" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .dairy-item {
                    transition: transform 0.3s ease;
                    display: block;
                }

                .dairy-item:hover {
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

export default Dairies;