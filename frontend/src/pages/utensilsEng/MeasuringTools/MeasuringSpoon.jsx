import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item">
                    <a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item">
                    <a href="/Measuring" style={{ color: "black", textDecoration: "none" }}>Measuring Tools</a>
                </li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Measuring Spoon</li>
            </ol>
        </nav>
    );
};

const Cutting = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid py-3">
                <Breadcrumb />
                
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        <h1 className="text-left mb-4" style={{ fontSize: "35px" }}>Measuring Spoon</h1>

                        <div className="d-grid gap-4" style={{
                            gridTemplateColumns: "repeat(3, 1fr)",
                        }}>
                            <a href="Teaspoon" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739986385/Group_10_7_gr9jm7.png"
                                     alt="Teaspoon"
                                     className="img-fluid hover-shadow" />
                            </a>
                            <a href="Tablespoon" className="protein-item text-center">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739986406/Group_1000005992_6_wtnabj.png"
                                     alt="Tablespoon"
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

export default Cutting;
