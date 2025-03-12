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
                <li className="breadcrumb-item active" aria-current="page" style={{ display: "inline", color: "black", fontWeight: "bold" }}>Scissors and Shears</li>
            </ol>
        </nav>
    );
};

const Scissors = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Scissors and Shears</h1>
                        <div className="d-grid gap-4" style={{ gridTemplateColumns: getGridColumns() }}>
                            <a href="Poultry" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739975938/poultry_in7ywu.png" className="img-fluid hover-shadow" alt="Poultry Shears" />
                            </a>
                            <a href="Wusthof" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976008/wushtof_iac007.png" className="img-fluid hover-shadow" alt="Wusthof Shears" />
                            </a>
                            <a href="Household" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976124/kitchen_xqxkmi.png" className="img-fluid hover-shadow" alt="Household Scissors" />
                            </a>
                            <a href="HerbScissor" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976241/herb_ck2uno.png" className="img-fluid hover-shadow" alt="Herb Scissors" />
                            </a>
                            <a href="SeafoodScissors" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976331/seafood_miepsj.png" className="img-fluid hover-shadow" alt="Seafood Scissors" />
                            </a>
                            <a href="Multipurpose" className="grilling-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739976385/Group_10_2_kgue44.png" className="img-fluid hover-shadow" alt="Multipurpose Scissors" />
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

export default Scissors;
