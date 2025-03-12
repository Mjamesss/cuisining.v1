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
                }}>Cutting Tools</li>
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Cutting Tools</h1>

                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: getGridColumns(),
                        }}>
                            <a href="Knife" className="cutting-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964025/knives3d_gjmfpy.png" className="img-fluid hover-shadow" alt="Knife" />
                            </a>
                            <a href="Scissors" className="cutting-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964299/Group_1000005992_i4zcwy.png" className="img-fluid hover-shadow" alt="Scissors" />
                            </a>
                            <a href="Peelers" className="cutting-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964350/Group_1000005993_vzrrhc.png" className="img-fluid hover-shadow" alt="Peelers" />
                            </a>
                            <a href="Grater" className="cutting-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739964394/Group_1000005995_pavlqd.png" className="img-fluid hover-shadow" alt="Grater" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cutting-item {
                    transition: transform 0.3s ease;
                    display: block;
                }

                .cutting-item:hover {
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
