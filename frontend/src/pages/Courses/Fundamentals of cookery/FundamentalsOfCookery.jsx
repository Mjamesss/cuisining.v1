import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';

const Breadcrumb = () => {
  return (
      <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "6px", marginBottom: "10px", marginTop: "-35px", fontSize: "15px",     }}>
          <ol className="breadcrumb" style={{ margin: 65, padding: 0,  }}>
              <li className="breadcrumb-item"><a href="/Courses" style={{ color: "black", textDecoration: "none",  }}>Courses</a></li>
              <span style={{ margin: "0 10px" }}>&gt;</span>
              <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold", fontWeight: "750"  }}>Fundamentals Of Professional Cookery</li>
          </ol>
      </nav>
  );
};

const FundamentalsOfCookery = () => {
  // Define the JSON object for lesson lock status
  // true means unlocked, false means locked
  const lessonLockStatus = {
    KitchenDepartment: true, // First lesson always unlocked
    CommonKitchenTools: false,
    MeasurementsAndConversion: false,
    FoodSafety: false,
    OccupationalHealthAndSafety: false,
    KnifeSkills: false
  };

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>

      <Navbar />
      <Breadcrumb />
      <div style={{ width: "100%", margin: "0", padding: "0px 0" }}>

        <div style={{ width: "100%", marginBottom: "200px" }}>

          {/* FIRST SECTION */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", marginTop: "-15px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 30px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "center", color: "#000000" }}>
                FUNDAMENTALS OF <span style={{color: "#adb44e"}}>PROFESSIONAL COOKERY</span></h1>
            <p className="" 
                       style={{ marginLeft: "5%", marginBottom: "50px", marginTop:"1%", fontSize:"18px", maxWidth:"87%", lineHeight: "1.6", textAlign: "center",}}>
                       This prerequisite module will present you the knowledge and skills that you must possess 
                       inside the kitchen before performing hands-on food preparation. 
            </p>

            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left", }}>
                UNIT 1: Introduction to Professional Cookery</h1>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))",
              justifyContent: "left", fontWeight: "920"
            }}>
              <a href={lessonLockStatus.KitchenDepartment ? "KitchenDepartment" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.KitchenDepartment ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066397/crsh1_x3vt3r.png"
                  width="100%" height="auto" alt="KitchenDepartment" />
                {!lessonLockStatus.KitchenDepartment && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Kitchen Department<br></br>and Kitchen Staff</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "65px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.KitchenDepartment ? "" : "#cccccc",
                  cursor: lessonLockStatus.KitchenDepartment ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.KitchenDepartment ? "LESSON 1" : "LOCKED"}
                </button>
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
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.CommonKitchenTools ? "CommonKitchenTools" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.CommonKitchenTools ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046797/crsl2_kn5wae.png"
                  width="100%" height="auto" alt="Measuring" />
                {!lessonLockStatus.CommonKitchenTools && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "80px", left: "50%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Common Kitchen Tools, Utensils, and Equipment</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "59px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.CommonKitchenTools ? "" : "#cccccc",
                  cursor: lessonLockStatus.CommonKitchenTools ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.CommonKitchenTools ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.MeasurementsAndConversion ? "MeasurementsAndConversion" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.MeasurementsAndConversion ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046796/crsl3_dloi62.png"
                  width="100%" height="auto" alt="Mixing" />
                {!lessonLockStatus.MeasurementsAndConversion && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "50%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Measurements and Conversions</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "65px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.MeasurementsAndConversion ? "" : "#cccccc",
                  cursor: lessonLockStatus.MeasurementsAndConversion ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.MeasurementsAndConversion ? "LESSON 2" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.FoodSafety ? "FoodSafety" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.FoodSafety ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066397/crsh4_h5p6wu.png"
                  width="100%" height="auto" alt="Grilling Tools" />
                {!lessonLockStatus.FoodSafety && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "113px", left: "50%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Food Safety</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "75px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.FoodSafety ? "" : "#cccccc",
                  cursor: lessonLockStatus.FoodSafety ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.FoodSafety ? "LESSON 3" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.OccupationalHealthAndSafety ? "OccupationalHealthAndSafety" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.OccupationalHealthAndSafety ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066397/crsh5_vvoips.png"
                  width="100%" height="auto" alt="Cookware" />
                {!lessonLockStatus.OccupationalHealthAndSafety && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Occupational Health and Safety Procedure</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "65px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.OccupationalHealthAndSafety ? "" : "#cccccc",
                  cursor: lessonLockStatus.OccupationalHealthAndSafety ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.OccupationalHealthAndSafety ? "LESSON 4" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.KnifeSkills ? "KnifeSkills" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.KnifeSkills ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066397/crsh6_nnksyg.png"
                  width="100%" height="auto" alt="Appliances" />
                {!lessonLockStatus.KnifeSkills && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "113px", left: "50%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Knife Skills</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "75px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.KnifeSkills ? "" : "#cccccc",
                  cursor: lessonLockStatus.KnifeSkills ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.KnifeSkills ? "LESSON 5" : "LOCKED"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FundamentalsOfCookery;