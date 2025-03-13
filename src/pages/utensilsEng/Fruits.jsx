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
                    Fruits
                </li>
            </ol>
        </nav>
    );
};

const Fruits = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px", }}>Fruits</h1>

                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: getGridColumns(),
                        }}>
                            <a href="Apple" className="dairy-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804859/Group_11_wybhg6.png"
                                    className="img-fluid hover-shadow"
                                    alt="Butter" />
                            </a>
                            <a href="Banana" className="dairy-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_12_zrwdet.png"
                                    className="img-fluid hover-shadow"
                                    alt="Cheese" />
                            </a>
                            <a href="Lemon" className="dairy-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_13_ofawna.png"
                                    className="img-fluid hover-shadow"
                                    alt="Milk" />
                            </a>
                            <a href="Papaya" className="dairy-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_14_tkjcs9.png"
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

export default Fruits;
