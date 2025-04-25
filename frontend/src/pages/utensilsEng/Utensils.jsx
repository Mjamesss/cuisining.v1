import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Utensils = () => {
    return (
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
            
        <div style={{ backgroundColor: '#F0F4F8', minHeight: '100vh' }}>
            <Navbar />
            
            <div style={{ maxWidth: "1200px", margin: "0px auto 0 auto", padding: "100px 0" }}>
                
                <div style={{ width: "100%", marginBottom: "100px" }}>
                <div style={{ marginTop: "-30px", padding: "0 clamp(20px, 6%, 75px)", marginBottom: "30px"}}>
                    <div style={{ display: "flex", alignItems: "center", width: "fit-content", padding: "18px clamp(15px, 5vw, 30px)", 
                        background: "#cdd378", borderRadius: "15px", borderLeft: "clamp(15px, 3vw, 20px) solid #000000", gap: "15px" }}>
                   <div style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                            <img  src="arlologo.png" alt="Utensils Icon"
                                style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) saturate(100%)"  }} />
                        </div>
                        
                        <h3 style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: "750", margin: "0", color: "#333", fontFamily: "'Nunito', sans-serif", whiteSpace: "nowrap"
                        }}> 
                            Cooking Utensils Identification
                        </h3>
                    </div>
                </div>
                
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "25px", fontWeight: "920", paddingLeft: "6%"}}>

                        <a href="Cutting" style={{ position: "relative", display: "block" }}>
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745503212/utensils1_f4miqw.png" 
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
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745575191/utensils2_ifjqzy.png" 
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
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745575222/utensils3_oapdpf.png" 
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
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745575257/utensils4_dtz7w2.png" 
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
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745575292/utensils5_uyutio.png" 
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
                            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745575339/utensils6_xedwg2.png" 
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
            </div>
        </>
    );
};

export default Utensils;
