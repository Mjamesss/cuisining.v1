import { useState } from "react";
import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "6px", marginBottom: "10px", marginTop: "-35px", fontSize: "15px" }}>
      <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0 }}>
        <li className="breadcrumb-item"><a href="/Courses" style={{ color: "black", textDecoration: "none" }}>Courses</a></li>
        <span style={{ margin: "0 10px" }}>&gt;</span>
        <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold", fontWeight: "750" }}>Preparing Sandwiches</li>
      </ol>
    </nav>
  );
};

const PreparingSandwich = () => {
  // State for lesson lock status
  const [lessonLockStatus, setLessonLockStatus] = useState({
    SandwichComponents: true, // First lesson always unlocked
    SandwichTools: false,
    KitchenSafety: false,
    PreparationTechniques: false,
    PreparingSandwiches: false,
    PlatingSandwiches: false
  });

  // State for lesson completion status
  const [lessonCompletionStatus, setLessonCompletionStatus] = useState({
    SandwichComponents: true,
    SandwichTools: false,
    KitchenSafety: false,
    PreparationTechniques: false,
    PreparingSandwiches: false,
    PlatingSandwiches: false
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
      'SandwichComponents',
      'SandwichTools',
      'KitchenSafety',
      'PreparationTechniques',
      'PreparingSandwiches',
      'PlatingSandwiches'
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
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", marginTop: "-15px"}}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 30px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "center" }}>
                PREPARING <span style={{color: "#ADB44E"}}>SANDWICHES</span></h1>
            <p className="" 
              style={{ marginLeft: "5%", marginBottom: "50px", marginTop:"1%", fontSize:"18px", maxWidth:"87%", lineHeight: "1.6", textAlign: "center"}}>
              In this course, we will present to you the knowledge and skills that you must have in order to perform the 
              procedures for preparing salads and dressings properly.
            </p>

            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left" }}>
                UNIT 1: Introduction to Sandwiches</h1>
              
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.SandwichComponents ? "SandwichComponents" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.SandwichComponents ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066706/crsw1_hy3biq.png"
                  width="100%" height="auto" alt="SandwichComponents" />
                {lessonCompletionStatus.SandwichComponents ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.SandwichComponents && (
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
                }}>Identifying the Components of Sandwiches</h1>
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
                  backgroundColor: lessonLockStatus.SandwichComponents ? "" : "#cccccc",
                  cursor: lessonLockStatus.SandwichComponents ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.SandwichComponents ? "COMPLETED" : lessonLockStatus.SandwichComponents ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.SandwichTools ? "SandwichTools" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.SandwichTools ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066706/crsw2_udaetu.png"
                  width="100%" height="auto" alt="SandwichTools" />
                {lessonCompletionStatus.SandwichTools ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.SandwichTools && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "80px", left: "47%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Common Sandwich Preparation Tools and Equipment</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "60px", left: "47%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.SandwichTools ? "" : "#cccccc",
                  cursor: lessonLockStatus.SandwichTools ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.SandwichTools ? "COMPLETED" : lessonLockStatus.SandwichTools ? "LESSON 2" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.KitchenSafety ? "KitchenSafety" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.KitchenSafety ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066706/crsw3_ccrnxe.png"
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
                  position: "absolute", bottom: "80px", left: "47%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Observing Kitchen Safety and Sanitation Measures</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "60px", left: "47%",
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
                  {lessonCompletionStatus.KitchenSafety ? "COMPLETED" : lessonLockStatus.KitchenSafety ? "LESSON 3" : "LOCKED"}
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
              UNIT 2: Preparing and Plating Sandwiches</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.PreparationTechniques ? "PreparationTechniques" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PreparationTechniques ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066705/crsw4_llydj2.png"
                  width="100%" height="auto" alt="PreparationTechniques" />
                {lessonCompletionStatus.PreparationTechniques ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.PreparationTechniques && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "85px", left: "50%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Basic Sandwich Preparation Techniques</h1>
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
                  backgroundColor: lessonLockStatus.PreparationTechniques ? "" : "#cccccc",
                  cursor: lessonLockStatus.PreparationTechniques ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.PreparationTechniques ? "COMPLETED" : lessonLockStatus.PreparationTechniques ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.PreparingSandwiches ? "PreparingSandwiches" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PreparingSandwiches ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066705/crsw5_jefuf4.png"
                  width="100%" height="auto" alt="PreparingSandwiches" />
                {lessonCompletionStatus.PreparingSandwiches ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.PreparingSandwiches && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "100px", left: "48%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Preparing Sandwiches</h1>
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
                  backgroundColor: lessonLockStatus.PreparingSandwiches ? "" : "#cccccc",
                  cursor: lessonLockStatus.PreparingSandwiches ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.PreparingSandwiches ? "COMPLETED" : lessonLockStatus.PreparingSandwiches ? "LESSON 2" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.PlatingSandwiches ? "PlatingSandwiches" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PlatingSandwiches ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745066704/crsw6_wgzima.png"
                  width="100%" height="auto" alt="PlatingSandwiches" />
                {lessonCompletionStatus.PlatingSandwiches ? (
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="30" height="30" alt="Completed" />
                  </div>
                ) : !lessonLockStatus.PlatingSandwiches && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "100px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Plating and Holding Sandwiches</h1>
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
                  backgroundColor: lessonLockStatus.PlatingSandwiches ? "" : "#cccccc",
                  cursor: lessonLockStatus.PlatingSandwiches ? "pointer" : "not-allowed"
                }}>
                  {lessonCompletionStatus.PlatingSandwiches ? "COMPLETED" : lessonLockStatus.PlatingSandwiches ? "LESSON 3" : "LOCKED"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreparingSandwich;