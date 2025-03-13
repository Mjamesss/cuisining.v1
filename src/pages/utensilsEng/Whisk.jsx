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
                    <a href="/Mixing" style={{ color: "black", textDecoration: "none" }}>Mixing Tools</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ display: "inline", color: "black", fontWeight: "bold" }}>Whisks</li>
            </ol>
        </nav>
    );
};

const Whisk = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Whisks</h1>
                        <div className="d-grid gap-4" style={{ gridTemplateColumns: getGridColumns() }}>
                            <a href="Whiskk" className="whisk-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236291/Group_10_14_gp5a5e.png" className="img-fluid hover-shadow" alt="Whisk" />
                            </a>
                            <a href="Kettlewhisk" className="whisk-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236362/Group_1000005992_12_o2vyys.png" className="img-fluid hover-shadow" alt="Kettle Whisk" />
                            </a>
                            <a href="Minibarwhisk" className="whisk-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236428/Group_1000005993_6_mfuwky.png" className="img-fluid hover-shadow" alt="Minibar Whisk" />
                            </a>
                            <a href="Flatwhisk" className="whisk-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236470/Group_1000005994_5_jcncfz.png" className="img-fluid hover-shadow" alt="Flat Whisk" />
                            </a>
                            <a href="Spiralwhisk" className="whisk-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236508/Group_1000005995_7_wnvskp.png" className="img-fluid hover-shadow" alt="Spiral Whisk" />
                            </a>
                            <a href="Doughwhisk" className="whisk-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740236548/Group_1000005996_3_hnwgvm.png" className="img-fluid hover-shadow" alt="Dough Whisk" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .whisk-item {
                    transition: transform 0.3s ease;
                    display: block;
                }
                .whisk-item:hover {
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

export default Whisk;
