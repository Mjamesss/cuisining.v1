import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Ingridients = () => {
    return (
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        
            <Navbar />
            <div style={{ maxWidth: "1200px", margin: "10px auto 0 auto", padding: "100px 0" }}>
                
                <div style={{ width: "100%", marginBottom: "100px" }}>
                <h1 style={{fontSize: "26px", fontWeight: "800", margin: "0 auto 40px auto", maxWidth: "1200px", paddingLeft: "6%",
                        fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left" }}>
                    Ingredients Identification
                    </h1>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "25px", fontWeight: "920", paddingLeft: "6%"}}>
                            
                        <a href="Proteins" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742698465/ingrid2_wpshzb.png" 
                                width="100%" height="auto" alt="Proteins" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "90px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Proteins</h1>
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "90px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Dairies</h1>
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "90px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Grains & Starches</h1>
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "90px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Fruits</h1>
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "90px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Vegetables</h1>
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "90px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Herbs & Spices</h1>
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "90px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Oil & Fats</h1>
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "90px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Seasonings & Condiments</h1>
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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


            <Footer />
        </>
    );
};

export default Ingridients;