import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';

const Breadcrumb = () => {
  return (
      <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "6px", marginBottom: "10px", marginTop: "-35px", fontSize: "15px",     }}>
          <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0,  }}>
              <li className="breadcrumb-item"><a href="/Courses" style={{ color: "black", textDecoration: "none",  }}>Courses</a></li>
              <span style={{ margin: "0 10px" }}>&gt;</span>
              <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold", fontWeight: "750"  }}>Preparing Appetizers and Hors D'oeuvres</li>
          </ol>
      </nav>
  );
};

const PreparingAppetizers = () => {
  // Define the JSON object for lesson lock status
  // true means unlocked, false means locked
  const lessonLockStatus = {
    TypesOfAppetizers: true, // First lesson always unlocked
    KitchenSafety: false,
    PreparingAppetizers: false,
    PlatingAppetizers: false
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
                PREPARING APPETIZERS AND <span style={{color: "#ADB44E"}}>HORS D'OEUVRES</span></h1>
            <p className="" 
                       style={{ marginLeft: "5%", marginBottom: "50px", marginTop:"1%", fontSize:"18px", maxWidth:"87%", lineHeight: "1.6", textAlign: "center",}}>
                              In this course, we will present to you the knowledge and skills that you must have in order to perform the 
                              procedures for preparing appetizers and hors d'oeuvres properly.
            </p>

            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left", }}>
                UNIT 1: Introduction to Appetizers and Hors d'oeuvres</h1>
              
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.TypesOfAppetizers ? "TypeOfAppetisers" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.TypesOfAppetizers ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046055/crsh2_hiipsb.png"
                  width="100%" height="auto" alt="TypesOfAppetizers" />
                {!lessonLockStatus.TypesOfAppetizers && (
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
                }}>Types of Appetizers and Hors d'oeuvres</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.TypesOfAppetizers ? "" : "#cccccc",
                  cursor: lessonLockStatus.TypesOfAppetizers ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.TypesOfAppetizers ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.KitchenSafety ? "ObervingKitchen" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.KitchenSafety ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046055/crsh1_w1gvoc.png"
                  width="100%" height="auto" alt="KitchenSafety" />
                {!lessonLockStatus.KitchenSafety && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "80px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Observing Kitchen Safety and Sanitation Measures</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "60px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.KitchenSafety ? "" : "#cccccc",
                  cursor: lessonLockStatus.KitchenSafety ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.KitchenSafety ? "LESSON 2" : "LOCKED"}
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
              UNIT 2: Preparing and Plating Appetizers and Hors d'oeuvres</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.PreparingAppetizers ? "PreparingCommonTypesAppetizers" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PreparingAppetizers ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046061/crsh4_a1jlql.png"
                  width="100%" height="auto" alt="PreparingAppetizers" />
                {!lessonLockStatus.PreparingAppetizers && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "80px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Preparing Common Types of Appetizers and Hors d'oeuvres</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "59px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.PreparingAppetizers ? "" : "#cccccc",
                  cursor: lessonLockStatus.PreparingAppetizers ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.PreparingAppetizers ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.PlatingAppetizers ? "PlatingAppetizers" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PlatingAppetizers ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046055/crsh3_memjkn.png"
                  width="100%" height="auto" alt="PlatingAppetizers" />
                {!lessonLockStatus.PlatingAppetizers && (
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
                }}>Plating Appetizers<br></br> and Hors d'oeuvres</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.PlatingAppetizers ? "" : "#cccccc",
                  cursor: lessonLockStatus.PlatingAppetizers ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.PlatingAppetizers ? "LESSON 2" : "LOCKED"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreparingAppetizers;