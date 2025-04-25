import "../../../../fw-cuisining.css";
import Navbar from '../../../../components/Navbar';
import { useEffect } from "react";

// Breadcrumb Component
const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginBottom: "30px", marginTop: "30px" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
                <li className="breadcrumb-item"><a href="/Utensils" style={{ color: "black", textDecoration: "none" }}>Utensils</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item"><a href="/GrillingTools" style={{ color: "black", textDecoration: "none" }}>Grilling Tools</a></li>
                <span style={{ margin: "0 10px" }}>&gt;</span>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold" }}>Grills</li>
            </ol>
        </nav>
    );
};

// Grills Page
const Grills = () => {
    
     useEffect(() => {
                // Change the document title when this page is rendered
                document.title = "CuiSining - Grills";
              }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <div className="p2 d-flex justify-content-center align-items-center">
                <div className="d-grid justify-content-center align-items-center">
                    <div className="p2 d-grid">
                        <h1 className="font-weight-900" style={{ fontSize: "35px" }}>Grills</h1>
                        <div className="d-grid g4" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
                            <a href="Opengrill">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740541496/Group_10_jn9m9m.png" alt="Open Grill" />
                            </a>
                            <a href="Covergrill">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740329887/Group_1000005992_16_y1alsa.png" alt="Cover Grill" />
                            </a>
                            <a href="Smokergrill">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740329941/Group_1000005995_8_li5uvj.png" alt="Smoker Grill" />
                            </a>
                            <a href="Grillss">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740666436/Group_1000005996_5_lahjet.png" alt="Grills" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Grills;