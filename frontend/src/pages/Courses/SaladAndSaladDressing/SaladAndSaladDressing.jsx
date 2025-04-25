import { useState } from "react";
import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "6px", marginBottom: "10px", marginTop: "-35px", fontSize: "15px" }}>
      <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
        <li className="breadcrumb-item"><a href="/Courses" style={{ color: "black", textDecoration: "none" }}>Courses</a></li>
        <span style={{ margin: "0 10px" }}>&gt;</span>
        <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold", fontWeight: "750" }}>Preparing Salads and Salad Dressings</li>
      </ol>
    </nav>
  );
};

const SaladAndSaladDressing = () => {
  // State for lesson lock status
  const [lessonLockStatus, setLessonLockStatus] = useState({
    SaladTypes: true, // First lesson always unlocked
    KitchenSafety: false,
    SaladDressings: false,
    PreparingSalad: false,
    PlatingSalad: false
  });

  // State for lesson completion status
  const [lessonCompletionStatus, setLessonCompletionStatus] = useState({
    SaladTypes: true,
    KitchenSafety: false,
    SaladDressings: false,
    PreparingSalad: false,
    PlatingSalad: false
  });

  // Function to handle lesson completion
  const completeLesson = (lessonName) => {
    // Mark the lesson as completed
    setLessonCompletionStatus(prev => ({
      ...prev,
      [lessonName]: true
    }));

    // Unlock the next lesson if available
    const lessonsOrder = [
      'SaladTypes',
      'KitchenSafety',
      'SaladDressings',
      'PreparingSalad',
      'PlatingSalad'
    ];
    
    const currentIndex = lessonsOrder.indexOf(lessonName);
    if (currentIndex < lessonsOrder.length - 1) {
      const nextLesson = lessonsOrder[currentIndex + 1];
      setLessonLockStatus(prev => ({
        ...prev,
        [nextLesson]: true
      }));
    }
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
          <div className="d-flex justify-content-center" style={{  marginTop: "0px", padding: "0 20px", marginBottom: "50px", }}>
                <div style={{ maxWidth: "1200px",width: "100%", padding: "30px", background: " #cdd378", borderRadius: "15px",
                    borderLeft: "20px solid #000000", minHeight: "190px" }}>
                    
                    <div style={{ padding: "0 15px" }}>
                        <h3 style={{ fontSize: "24px", fontWeight: "750", marginBottom: "15px", color: "#333",
                            fontFamily: "'Nunito', sans-serif", paddingTop: "5px"  }}>
                            Preparing Salads and Salad Dressings
                        </h3>
                        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555", marginBottom: "5px", paddingRight: "10px" 
                        }}>
                          In this course, we will present to you the knowledge and skills that you must have in order to perform the 
                          procedures for preparing appetizers and hors d'oeuvres properly.
                        </p>
                    </div>
                </div>
                </div>

            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left" }}>
                UNIT 1: Introduction to Salads and Salad Dressings</h1>
              
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.SaladTypes ? "SaladTypes" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.SaladTypes ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745577929/crsd1_eduohm.png"
                  width="100%" height="auto" alt="SaladTypes" />
                {lessonCompletionStatus.SaladTypes ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.SaladTypes && (
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
                }}>Types and <br></br>Components of Salad</h1>
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
                  backgroundColor: lessonLockStatus.SaladTypes ? "" : "#cccccc",
                  cursor: lessonLockStatus.SaladTypes ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.SaladTypes ? "COMPLETED" : lessonLockStatus.SaladTypes ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.KitchenSafety ? "KitchenSafety" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.KitchenSafety ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745577948/crsd2_f9glge.png"
                  width="100%" height="auto" alt="KitchenSafety" />
                {lessonCompletionStatus.KitchenSafety ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.KitchenSafety && (
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
                  {lessonCompletionStatus.KitchenSafety ? "COMPLETED" : lessonLockStatus.KitchenSafety ? "LESSON 2" : "LOCKED"}
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
              UNIT 2: Preparing and Plating Salads and Salad Dressings</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.SaladDressings ? "SaladDressings" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.SaladDressings ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745578182/crsd3_b2yyqg.png"
                  width="100%" height="auto" alt="SaladDressings" />
                {lessonCompletionStatus.SaladDressings ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.SaladDressings && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "50%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Preparing Salad Dressings</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.SaladDressings ? "" : "#cccccc",
                  cursor: lessonLockStatus.SaladDressings ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.SaladDressings ? "COMPLETED" : lessonLockStatus.SaladDressings ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.PreparingSalad ? "PreparingSalad" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PreparingSalad ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745577986/crsd4_fjyjsq.png"
                  width="100%" height="auto" alt="PreparingSalad" />
                {lessonCompletionStatus.PreparingSalad ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.PreparingSalad && (
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
                }}>Preparing Salad</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "80px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.PreparingSalad ? "" : "#cccccc",
                  cursor: lessonLockStatus.PreparingSalad ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.PreparingSalad ? "COMPLETED" : lessonLockStatus.PreparingSalad ? "LESSON 2" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.PlatingSalad ? "PlatingSalad" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PlatingSalad ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745578038/crsd5_nygzgc.png"
                  width="100%" height="auto" alt="PlatingSalad" />
                {lessonCompletionStatus.PlatingSalad ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.PlatingSalad && (
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
                }}>Plating, Storing Salads, and Salad Dressings</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "60px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.PlatingSalad ? "" : "#cccccc",
                  cursor: lessonLockStatus.PlatingSalad ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.PlatingSalad ? "COMPLETED" : lessonLockStatus.PlatingSalad ? "LESSON 3" : "LOCKED"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaladAndSaladDressing;