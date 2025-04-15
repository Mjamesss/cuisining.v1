import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Utensils = () => {
    return (
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        
            <Navbar />
            <div style={{ width: "100%", margin: "0", padding: "90px 0" }}>
                
                {/* Cooking Utensils Section */}
                <div style={{ width: "100%", marginBottom: "40px" }}>
                    <h1 className="font-weight-800" style={{ fontSize: "26px", marginLeft: "13.5%", marginBottom: "40px", fontFamily:"'Nunito', sans-serif", color: "#000000" }}>
                        Cooking Utensils Identification
                    </h1>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 350px)", fontWeight: "920", gap: "25px", padding: "0 40px",
                        maxWidth: "1200px", margin: "0 auto",}}>
                        <a href="Cutting" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742524580/utensils1_dmakse.png" 
                                width="100%" height="auto" alt="Cutting" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Cutting Tools</h1>
                            <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Essential knives and cutting implements for food preparation.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif",
                            }}>LEARN MORE</button>
                        </a> 

                        <a href="Measuring" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742524579/utensils2_xdpqzh.png" 
                                width="100%" height="auto" alt="Measuring" />
                             <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Measuring Tools</h1>
                            <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Precise measurement tools for accurate cooking.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif",
                            }}>LEARN MORE</button>
                        </a>

                        <a href="Mixing" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742524580/utensils3_xv3nqv.png" 
                                width="100%" height="auto" alt="Mixing" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Mixing Tools</h1>
                             <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Essential tools for combining ingredients effectively.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif",
                            }}>LEARN MORE</button>
                        </a>

                        <a href="GrillingTools" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742524579/utensils4_rldvk1.png" 
                                width="100%" height="auto" alt="Grilling Tools" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}> Grilling Tools</h1>
                            <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                               Essential tools for outdoor cooking and grilling.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif",
                            }}>LEARN MORE</button>
                        </a>

                        <a href="Cookware" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742524579/utensils5_r7ck5r.png" 
                                width="100%" height="auto" alt="Cookware" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}> Cookware</h1>
                            <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                               Essential pots, pans, and cooking equipment for meal preparation.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif",
                            }}>LEARN MORE</button>
                        </a>

                        <a href="Appliances" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742524577/utensils6_n5efaj.png" 
                                width="100%" height="auto" alt="Appliances" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}> Appliances</h1>
                            <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Modern electrical kitchen equipment and tools.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", 
                            }}>LEARN MORE</button>
                        </a>
                    </div>
                </div>

                <div style={{ height: "40px" }}></div> 

                {/* Ingredients Section */}
                <div style={{ width: "100%", marginBottom: "90px" }}>
                    <h1 className="font-weight-800" style={{ fontSize: "26px", marginLeft: "13.5%", marginBottom: "40px", fontFamily:"'Nunito', sans-serif", color: "#000000" }}>
                       Ingridients Identification
                    </h1>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 350px)", fontWeight: "920", gap: "25px", padding: "0 40px",
                        maxWidth: "1200px", margin: "0 auto",}}>
                        <a href="Proteins" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698465/ingrid2_wpshzb.png" 
                                width="100%" height="auto" alt="Proteins" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Proteins</h1>
                             <p style={{ width: "280px", position: "absolute", bottom: "65px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Essential protein ingredients for cooking.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif",
                            }}>LEARN MORE</button>
                        </a>

                        <a href="Dairies" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698474/ingrid1_dle8ci.png" 
                                width="100%" height="auto" alt="Dairies" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Dairies</h1>
                             <p style={{ width: "280px", position: "absolute", bottom: "65px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Various dairy ingredients for cooking.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif",
                            }}>LEARN MORE</button>
                        </a>

                        <a href="GrainStarches" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698465/ingrid4_evjbis.png" 
                                width="100%" height="auto" alt="Grain Starches" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Grains & Starches</h1>
                             <p style={{ width: "280px", position: "absolute", bottom: "65px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Common grains and starch ingredients.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", 
                            }}>LEARN MORE</button>
                        </a>

                        <a href="Fruits" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698469/ingrid3_oko19a.png" 
                                width="100%" height="auto" alt="Fruits" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Fruits</h1>
                             <p style={{ width: "280px", position: "absolute", bottom: "65px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Various fruits for diverse recipes.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", 
                            }}>LEARN MORE</button>
                        </a>

                        <a href="Vegetables" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698469/ingrid5_aq4ech.png" 
                                width="100%" height="auto" alt="Vegetables" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Vegetables</h1>
                             <p style={{ width: "280px", position: "absolute", bottom: "65px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Essential vegetables for cooking.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", 
                            }}>LEARN MORE</button>
                        </a>

                        <a href="HerbsSpices" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698467/ingrid6_ngqbwy.png" 
                                width="100%" height="auto" alt="Herbs and Spices" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Herbs & Spices</h1>
                             <p style={{ width: "280px", position: "absolute", bottom: "65px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Flavorful herbs and spices for seasoning.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", 
                            }}>LEARN MORE</button>
                        </a>

                        <a href="OilFats" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698479/ingrid7_tmdky2.png" 
                                width="100%" height="auto" alt="Oil and Fats" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Oil & Fats</h1>
                             <p style={{ width: "280px", position: "absolute", bottom: "65px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                                Cooking oils and fats for various dishes.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px", 
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", 
                            }}>LEARN MORE</button>
                        </a>

                        <a href="SeasoningCondiments" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698943/ingrid8_shxlvl.png" 
                                width="100%" height="auto" alt="Seasoning and Condiments" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Seasonings & Condiments</h1>
                            <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "14px", color: "#fff", fontWeight: "50" }}>
                               Various seasonings and condiments for flavor.
                            </p>
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", bottom: "5px", left: "188px", color: "white", width: "120px", height: "39px",
                                fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", 
                            }}>LEARN MORE</button>
                        </a>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @media screen and (max-width: 992px) {
                        div[style*="display: grid"] {
                            grid-template-columns: repeat(2, 1fr) !important;
                            gap: 30px !important;
                            padding: 30px !important;
                        }
                        .p-5.d-flex {
                            margin-left: 0 !important;
                            padding: 20px !important;
                        }
                        h1[style*="font-size: 26px"] {
                            margin-left: 5% !important;
                        }
                    }
                    @media screen and (max-width: 576px) {
                        div[style*="display: grid"] {
                            grid-template-columns: 1fr !important;
                            gap: 20px !important;
                            padding: 20px !important;
                        }
                        .p-5.d-flex {
                            margin-left: 0 !important;
                            padding: 15px !important;
                        }
                        h1[style*="font-size: 26px"] {
                            margin-left: 5% !important;
                            font-size: 22px !important;
                        }
                    }
                `}
            </style>
            <Footer />
        </>
    );
};

export default Utensils;
