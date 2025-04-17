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
            
            <div style={{ maxWidth: "1200px", margin: "10px auto 0 auto", padding: "100px 0" }}>
                
                <div style={{ width: "100%", marginBottom: "100px" }}>
                <h1 style={{fontSize: "26px", fontWeight: "800", margin: "0 auto 40px auto", maxWidth: "1200px", paddingLeft: "6%",
                        fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left" }}>
                    Cooking Utensils Identification
                    </h1>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "25px", fontWeight: "920", paddingLeft: "6%"}}>

                        <a href="Cutting" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742524580/utensils1_dmakse.png" 
                                width="100%" height="auto" alt="Cutting" />
                            <h1 className="font-weight-800" style={{ position: "absolute", bottom: "95px", left: "30px", fontSize: "18px", 
                                fontFamily:"'Nunito', sans-serif", color: "#000000" }}>Cutting Tools</h1>
                            <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <p style={{ width: "290px", position: "absolute", bottom: "45px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <p style={{ width: "280px", position: "absolute", bottom: "45px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
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
                            <p style={{ width: "290px", position: "absolute", bottom: "63px", left: "30px", fontSize: "13px", color: "#fff", fontWeight: "50" }}>
                                Modern electrical kitchen equipment and tools.
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

export default Utensils;
