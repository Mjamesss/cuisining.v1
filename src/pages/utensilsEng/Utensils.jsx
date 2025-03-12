import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Utensils = () => {
    return (
        <>
            <Navbar />
            <div style={{ width: "100%", margin: "0", padding: "90px 0" }}>
                {/* Cooking Utensils Section */}
                <div style={{ width: "100%", marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "26px", marginLeft: "13%", marginBottom: "20px", }}>Cooking Utensils Identification</h2>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        fontWeight: "920",
                        gap: "40px",
                        padding: "0 40px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}>
                        <a href="Cutting" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/Group_1000005992_hxapwx.png" 
                            alt="Cutting" className="img-fluid hover-shadow" />
                        </a>
                        <a href="Measuring" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/Group_10_b2dfuj.png" 
                            alt="Measuring" className="img-fluid hover-shadow" />
                        </a>
                        <a href="Mixing" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/9_akb2gk.png" 
                            alt="Mixing" className="img-fluid hover-shadow" />
                        </a>
                        <a href="GrillingTools" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/Group_1000005999_nqki9c.png" 
                            alt="Grilling Tools" className="img-fluid hover-shadow" />
                        </a>
                        <a href="Cookware" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/Group_1000006123_qqvvyi.png" 
                            alt="Cookware" className="img-fluid hover-shadow" />
                        </a>
                        <a href="Appliances" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844132/Group_1000006124_mbpotq.png" 
                            alt="Appliances" className="img-fluid hover-shadow" />
                        </a>
                    </div>
                </div>

                {/* Ingredients Section */}
                <div style={{ width: "100%", marginBottom: "40px", padding: "30px" }}>
                    <h2 style={{ fontSize: "26px", marginLeft: "11%", marginBottom: "20px", }}>Ingredients Identification</h2>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px",
                        padding: "0 20px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}>
                        <a href="Proteins" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844574/Frame_1000006205_pyfydd.png" 
                            alt="Proteins" className="img-fluid hover-shadow" />
                        </a>
                        <a href="Dairies" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844571/Frame_26086231_zhyegt.png" 
                            alt="Dairies" className="img-fluid hover-shadow" />
                        </a>
                        <a href="GrainStarches" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844572/Frame_26086233_hgathp.png" 
                            alt="Grain Starches" className="img-fluid hover-shadow" />
                        </a>
                        <a href="Fruits" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844572/Frame_26086234_klto9r.png" 
                            alt="Fruits" className="img-fluid hover-shadow" />
                        </a>
                        <a href="Vegetables" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844572/Frame_26086235_zbprq3.png" 
                            alt="Vegetables" className="img-fluid hover-shadow" />
                        </a>
                        <a href="HerbsSpices" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844572/Frame_26086236_mdgru4.png" 
                            alt="Herbs and Spices" className="img-fluid hover-shadow" />
                        </a>
                        <a href="OilFats" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844573/Frame_26086237_mtyafy.png" 
                            alt="Oil and Fats" className="img-fluid hover-shadow" />
                        </a>
                        <a href="SeasoningCondiments" className="protein-item text-center">
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844573/Frame_26086238_lx0wbl.png" 
                            alt="Seasoning and Condiments" className="img-fluid hover-shadow" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Hover Effect Style */}
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
            `}</style>
        </>
    );
};

export default Utensils;
