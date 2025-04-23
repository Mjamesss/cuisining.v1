import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';
import React, { useEffect } from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ 
      marginBottom: "40px", 
      paddingTop: "30px",
      fontSize: "15px",
      marginLeft: "45px"
    }}>
      <ol className="breadcrumb" style={{ 
        padding: 0,
        margin: 0
      }}>
        <li className="breadcrumb-item"><a href="/Courses" style={{ color: "black", textDecoration: "none" }}>Courses</a></li>
        <span style={{ margin: "0 10px" }}>&gt;</span>
        <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "750" }}>Final Assessment</li>
      </ol>
    </nav>
  );
};

const FinalAssessment = () => {
  useEffect(() => {
    const handleGameCompletion = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No authentication token found");
        
        const response = await fetch("http://localhost:5000/api/game/complete-assessment1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to update assessment status");
        }

        const data = await response.json();
        alert("Congratulations! You completed the game and your progress has been saved!");
        console.log("Assessment update successful:", data);
      } catch (error) {
        console.error("Error updating assessment status:", error);
        alert(`Game completed but couldn't save progress: ${error.message}`);
      }
    };

    // Define the callback function
    window.TriggerCallback = handleGameCompletion;

    return () => {
      delete window.TriggerCallback;
    };
  }, []);

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>

      <Navbar />
      <Breadcrumb />

      <div style={{ width: "100%", margin: "0", padding: "0px 0" }}>
        <div style={{ width: "100%", marginBottom: "0" }}>
          {/* FIRST SECTION */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 30px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "center" }}>
                FUNDAMENTALS OF <span style={{color: "#C1B857"}}>PROFESSIONAL COOKERY</span></h1>
            <p className="" 
              style={{ marginLeft: "5%", marginBottom: "50px", marginTop:"1%", fontSize:"18px", maxWidth:"87%", lineHeight: "1.6", textAlign: "center"}}>
              This prerequisite module will present you the knowledge and skills that you must possess 
              inside the kitchen before performing hands-on food preparation. 
            </p>
          </div>
        </div>
      </div>

<div style={{ width: "100%", height: "600px" }}>
      <iframe
        src="/CuisineWebglBuild/index.html"
        title="Cooking"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
    </>
  );
}

export default FinalAssessment;