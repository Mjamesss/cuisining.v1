import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';

const FundamentalsOfCookery = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>

      <Navbar />
      <div style={{ width: "100%", margin: "0", padding: "100px 0" }}>

        <div style={{ width: "100%", marginBottom: "100px" }}>

          {/* FIRST SECTION */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 30px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "center", color: "#000000" }}>
                FUNDAMENTALS OF <span style={{color: "#C1B857"}}>PROFESSIONAL COOKERY</span></h1>
            <p className="" 
                       style={{ marginLeft: "5%", marginBottom: "50px", marginTop:"1%", fontSize:"18px", maxWidth:"87%", lineHeight: "1.6", textAlign: "center",}}>
                       This prerequisite module will present you the knowledge and skills that you must possess 
                       inside the kitchen before performing hands-on food preparation. 
            </p>

            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 40px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left", }}>
                UNIT 1: Introduction to Professional Cookery</h1>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))",
              justifyContent: "left", fontWeight: "920"
            }}>
              <a href="KitchenDepartment" style={{ position: "relative", display: "block" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1744672740/crs1_njxvsn.png"
                  width="100%" height="auto" alt="Cutting" />
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Kitchen Department<br></br>and Kitchen Staff</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif"
                }}>LESSON 1</button>
              </a>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div style={{ maxWidth: "1200px", margin: "70px auto 0 auto", padding: "0 40px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left"
            }}>
              UNIT 2: Basics of Professional Cookery
            </h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "25px", fontWeight: "920"}}>

              <a href="CommonKitchenTools" style={{ position: "relative", display: "block" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1744672741/crs2_s3dtc4.png"
                  width="100%" height="auto" alt="Measuring" />
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "80px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Common Kitchen Tools, Utensils, and Equipment</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "59px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif"
                }}>LESSON 2</button>
              </a>

              <a href="MeasurementsAndConversion" style={{ position: "relative", display: "block" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1744672752/crs3_fiivco.png"
                  width="100%" height="auto" alt="Mixing" />
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Measurements and Conversions</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif"
                }}>LESSON 3</button>
              </a>

              <a href="" style={{ position: "relative", display: "block" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1744672742/crs4_rhuzmg.png"
                  width="100%" height="auto" alt="Grilling Tools" />
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "113px", left: "50%", fontSize: "18px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Food Safety</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "80px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif"
                }}>LESSON 4</button>
              </a>

              <a href="" style={{ position: "relative", display: "block" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1744672742/crs5_vpfewi.png"
                  width="100%" height="auto" alt="Cookware" />
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Occupational Health and Safety Procedure</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif"
                }}>LESSON 5</button>
              </a>

              <a href="" style={{ position: "relative", display: "block" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1744672741/crs6_if6gog.png"
                  width="100%" height="auto" alt="Appliances" />
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "113px", left: "50%", fontSize: "18px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Knife Skills</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "80px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif"
                }}>LESSON 6</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FundamentalsOfCookery;
