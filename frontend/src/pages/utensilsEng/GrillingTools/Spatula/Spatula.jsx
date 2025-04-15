import "../../../../fw-cuisining.css";
import { useEffect, useState } from 'react';
import Navbar from '../../../../components/Navbar';

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
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Spatulas</li>
            </ol>
        </nav>
    );
};

const Spatula = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Spatulas</h1>

                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: getGridColumns(),
                        }}>
                            <a href="Turnerspatula" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740388775/Group_10_19_zb6jkd.png"
                                     alt="Turner Spatula"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Offsetspatula" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740388817/Group_1000005992_17_zw6z6l.png"
                                     alt="Offset Spatula"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Fishspatula" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740388880/Group_1000005997_1_n96sgi.png"
                                     alt="Fish Spatula"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Grillspatula" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740388960/Group_1000005998_1_blfrju.png"
                                     alt="Grill Spatula"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Spoonspatula" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389018/Group_1000005999_1_pe6yb8.png"
                                     alt="Spoon Spatula"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Slottedspatula" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740389073/Group_1000005993_8_jt3usk.png"
                                     alt="Slotted Spatula"
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

export default Spatula;
