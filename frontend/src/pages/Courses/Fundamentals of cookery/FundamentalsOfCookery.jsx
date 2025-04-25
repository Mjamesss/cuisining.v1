import { useState, useEffect } from "react";
import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';
import axios from "axios";

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
  // Define state for lesson status
  const [lessonStatus, setLessonStatus] = useState({
    lessonLockStatus: {
      KitchenDepartment: true,
      CommonKitchenTools: false,
      MeasurementsAndConversion: false,
      FoodSafety: false,
      OccupationalHealthAndSafety: false,
      KnifeSkills: false
    },
    lessonCompletionStatus: {
      KitchenDepartment: false,
      CommonKitchenTools: false,
      MeasurementsAndConversion: false,
      FoodSafety: false,
      OccupationalHealthAndSafety: false,
      KnifeSkills: false
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  // Fetch lesson status on component mountt
  useEffect(() => {
    const fetchLessonStatus = async () => {
      try {
        const token = getToken();
        if (!token) return;
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_LINK || "http://localhost:5000"}/api/course/fundamentalsofcokery/status`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );        
        setLessonStatus(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching lesson status:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLessonStatus();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading lessons...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Error loading lessons: {error}</p>
      </div>
    );
  }

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
          <div className="d-flex justify-content-center" style={{  marginTop: "70px", padding: "0 20px", marginBottom: "50px", }}>
                <div style={{ maxWidth: "1200px",width: "100%", padding: "30px", background: " #cdd378", borderRadius: "15px",
                    borderLeft: "20px solid #000000", minHeight: "190px" }}>
                    
                    <div style={{ padding: "0 15px" }}>
                        <h3 style={{ fontSize: "24px", fontWeight: "750", marginBottom: "15px", color: "#333",
                            fontFamily: "'Nunito', sans-serif", paddingTop: "5px"  }}>
                            FUNDAMENTALS OF PROFESSIONAL COOKERY
                        </h3>
                        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555", marginBottom: "5px", paddingRight: "10px" 
                        }}>
                            This prerequisite module will present you the knowledge and skills that you must possess 
                            inside the kitchen before performing hands-on food preparation. 
                        </p>
                    </div>
                </div>
                </div>

            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left", }}>
                UNIT 1: Introduction to Professional Cookery</h1>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))",
              justifyContent: "left", fontWeight: "920"
            }}>
              <a href={lessonStatus.lessonLockStatus.KitchenDepartment ? "KitchenDepartment" : "#"} style={{ position: "relative", display: "block", opacity: lessonStatus.lessonLockStatus.KitchenDepartment ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745576548/crsh1_x3vt3r.png"
                  width="100%" height="auto" alt="KitchenDepartment" />
                {lessonStatus.lessonCompletionStatus.KitchenDepartment ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonStatus.lessonLockStatus.KitchenDepartment && (
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
                  backgroundColor: lessonStatus.lessonLockStatus.KitchenDepartment ? "" : "#cccccc",
                  cursor: lessonStatus.lessonLockStatus.KitchenDepartment ? "pointer" : "not-allowed"
                }}>
                  {lessonStatus.lessonCompletionStatus.KitchenDepartment ? "COMPLETED" : lessonStatus.lessonLockStatus.KitchenDepartment ? "LESSON 1" : "LOCKED"}
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

              <a href={lessonStatus.lessonLockStatus.CommonKitchenTools ? "CommonKitchenTools" : "#"} style={{ position: "relative", display: "block", opacity: lessonStatus.lessonLockStatus.CommonKitchenTools ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745576570/crsl2_kn5wae.png"
                  width="100%" height="auto" alt="Measuring" />
                {lessonStatus.lessonCompletionStatus.CommonKitchenTools ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonStatus.lessonLockStatus.CommonKitchenTools && (
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
                  backgroundColor: lessonStatus.lessonLockStatus.CommonKitchenTools ? "" : "#cccccc",
                  cursor: lessonStatus.lessonLockStatus.CommonKitchenTools ? "pointer" : "not-allowed"
                }}>
                  {lessonStatus.lessonCompletionStatus.CommonKitchenTools ? "COMPLETED" : lessonStatus.lessonLockStatus.CommonKitchenTools ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonStatus.lessonLockStatus.MeasurementsAndConversion ? "MeasurementsAndConversion" : "#"} style={{ position: "relative", display: "block", opacity: lessonStatus.lessonLockStatus.MeasurementsAndConversion ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745576584/crsl3_dloi62.png"
                  width="100%" height="auto" alt="Mixing" />
                {lessonStatus.lessonCompletionStatus.MeasurementsAndConversion ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonStatus.lessonLockStatus.MeasurementsAndConversion && (
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
                  backgroundColor: lessonStatus.lessonLockStatus.MeasurementsAndConversion ? "" : "#cccccc",
                  cursor: lessonStatus.lessonLockStatus.MeasurementsAndConversion ? "pointer" : "not-allowed"
                }}>
                  {lessonStatus.lessonCompletionStatus.MeasurementsAndConversion ? "COMPLETED" : lessonStatus.lessonLockStatus.MeasurementsAndConversion ? "LESSON 2" : "LOCKED"}
                </button>
              </a>

              <a href={lessonStatus.lessonLockStatus.FoodSafety ? "FoodSafety" : "#"} style={{ position: "relative", display: "block", opacity: lessonStatus.lessonLockStatus.FoodSafety ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745576613/crsh4_h5p6wu.png"
                  width="100%" height="auto" alt="Grilling Tools" />
                {lessonStatus.lessonCompletionStatus.FoodSafety ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonStatus.lessonLockStatus.FoodSafety && (
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
                  backgroundColor: lessonStatus.lessonLockStatus.FoodSafety ? "" : "#cccccc",
                  cursor: lessonStatus.lessonLockStatus.FoodSafety ? "pointer" : "not-allowed"
                }}>
                  {lessonStatus.lessonCompletionStatus.FoodSafety ? "COMPLETED" : lessonStatus.lessonLockStatus.FoodSafety ? "LESSON 3" : "LOCKED"}
                </button>
              </a>
              <a href={lessonStatus.lessonLockStatus.OccupationalHealthAndSafety ? "OccupationalHealth" : "#"} style={{ position: "relative", display: "block", opacity: lessonStatus.lessonLockStatus.OccupationalHealthAndSafety ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745576629/crsh5_vvoips.png"
                  width="100%" height="auto" alt="Cookware" />
                {lessonStatus.lessonCompletionStatus.OccupationalHealthAndSafety ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonStatus.lessonLockStatus.OccupationalHealthAndSafety && (
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
                  backgroundColor: lessonStatus.lessonLockStatus.OccupationalHealthAndSafety ? "" : "#cccccc",
                  cursor: lessonStatus.lessonLockStatus.OccupationalHealthAndSafety ? "pointer" : "not-allowed"
                }}>
                  {lessonStatus.lessonCompletionStatus.OccupationalHealthAndSafety ? "COMPLETED" : lessonStatus.lessonLockStatus.OccupationalHealthAndSafety ? "LESSON 4" : "LOCKED"}
                </button>
              </a>

              <a href={lessonStatus.lessonLockStatus.KnifeSkills ? "KnifeSkills" : "#"} style={{ position: "relative", display: "block", opacity: lessonStatus.lessonLockStatus.KnifeSkills ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745576642/crsh6_nnksyg.png"
                  width="100%" height="auto" alt="Appliances" />
                {lessonStatus.lessonCompletionStatus.KnifeSkills ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonStatus.lessonLockStatus.KnifeSkills && (
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
                  backgroundColor: lessonStatus.lessonLockStatus.KnifeSkills ? "" : "#cccccc",
                  cursor: lessonStatus.lessonLockStatus.KnifeSkills ? "pointer" : "not-allowed"
                }}>
                  {lessonStatus.lessonCompletionStatus.KnifeSkills ? "COMPLETED" : lessonStatus.lessonLockStatus.KnifeSkills ? "LESSON 5" : "LOCKED"}
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