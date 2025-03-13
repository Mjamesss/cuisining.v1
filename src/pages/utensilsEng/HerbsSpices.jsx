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
                    Herbs & Spices
                </li>
            </ol>
        </nav>
    );
};

const GrainStarches = () => {
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
                        <h1 className="text-left mb-4" style={{ fontSize: "35px", }}>Herbs & Spices</h1>

                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: getGridColumns(),
                        }}>
                            <a href="BayLeaf" className="herb-spice-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806464/Group_26_himoec.png"
                                    className="img-fluid hover-shadow"
                                    alt="Barley" />
                            </a>
                            <a href="Chives" className="herb-spice-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806463/Group_27_bl00j7.png"
                                    className="img-fluid hover-shadow"
                                    alt="Buckwheat" />
                            </a>
                            <a href="CurryPowder" className="herb-spice-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806461/Group_28_hcqfmw.png"
                                    className="img-fluid hover-shadow"
                                    alt="Corn" />
                            </a>
                            <a href="Paprika" className="herb-spice-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806454/Group_29_rvezrc.png"
                                    className="img-fluid hover-shadow"
                                    alt="Farro" />
                            </a>
                                    <a href="Rosemary" className="herb-spice-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806453/Group_30_edjrdp.png"
                                    className="img-fluid hover-shadow"
                                    alt="Rosemary" />
                            </a>
                </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .herb-spice-item {
                    transition: transform 0.3s ease;
                    display: block;
                }

                .herb-spice-item:hover {
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

export default GrainStarches;
