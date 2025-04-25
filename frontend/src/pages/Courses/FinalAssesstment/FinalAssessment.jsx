import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';
import React, { useEffect, useState } from "react";

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
    // Change the document title when this page is rendered
    document.title = "CuiSining - Final Assessment";
  }, []);

  const [gameStatus, setGameStatus] = useState("in-progress");
  const [gameStarted, setGameStarted] = useState(false);

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
        setGameStatus("completed");
        alert("Congratulations! You completed the game and your progress has been saved!");
        console.log("Assessment update successful:", data);
      } catch (error) {
        console.error("Error updating assessment status:", error);
        alert(`Game completed but couldn't save progress: ${error.message}`);
      }
    };

    window.TriggerCallback1 = handleGameCompletion;

    return () => {
      delete window.TriggerCallback1;
    };
  }, []);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        @media (max-width: 1400px) {
          .game-container {
            min-width: 600px !important;
          }
        }
        
        @media (max-width: 1200px) {
          .game-container {
            min-width: 500px !important;
            height: 500px !important;
          }
          .feedback-container {
            width: 100% !important;
          }
        }
        
        @media (max-width: 992px) {
          .main-container {
            flex-direction: column !important;
          }
          .game-container {
            width: 100% !important;
            min-width: 100% !important;
            height: 500px !important;
            margin-bottom: 20px;
          }
          .instructions-container {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-top: 0 !important;
            position: relative !important;
            top: auto !important;
          }
          .feedback-container {
            margin-top: 20px !important;
            width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          .game-controls {
            flex-direction: column !important;
            align-items: center !important;
          }
          .game-controls button, .game-controls a {
            width: 100% !important;
            margin: 5px 0 !important;
          }
        }

        .play-button-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .play-button {
          width: 80px;
          height: 80px;
          background-color: #adb44e;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .play-button::after {
          content: "";
          display: block;
          width: 0;
          height: 0;
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;
          border-left: 30px solid white;
          margin-left: 5px;
        }

        .play-button:hover {
          transform: scale(1.1);
          background-color: #C1C857;
        }
        `}
      </style>

      <Navbar />
      <Breadcrumb />

      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto",
        padding: "0 40px",
        position: "relative"
      }}>
        {/* Header Section */}
        <div style={{ 
          marginBottom: "20px",
          padding: "0 0px"
        }}>
          <h1 style={{
            fontSize: "26px",
            fontWeight: "750",
            margin: "0 0 10px 0",
            fontFamily: "'Nunito', sans-serif",
            color: "#adb44e",
            textAlign: "left"
          }}>
            <span style={{ color: "#000000" }}>Final</span> Assessment
          </h1>
        </div>
        
        {/* Main Content Container */}
        <div className="main-container" style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "10px",
        }}>
          {/* Game Container */}
          <div className="game-container" style={{ 
            flex: "1 1 70%",
            position: "relative",
            minWidth: "800px",
            height: "635px",
            overflow: "hidden",
            borderRadius: "15px 15px 15px 15px",
          }}>
            {!gameStarted && (
              <div className="play-button-overlay" onClick={startGame}>
                <div className="play-button"></div>
              </div>
            )}
            <iframe
              src={gameStarted ? "/CuisineWebglBuildChopping/index.html" : "about:blank"}
              title="Cooking Assessment"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              scrolling="no"
            />
          </div>

          {/* Right Side Container */}
          <div className="instructions-container" style={{
            flex: "0 0 300px",
            backgroundColor: "#C1C857",
            borderRadius: "10px",
            padding: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            fontFamily: "'Nunito', sans-serif",
            minWidth: "300px",
            position: "sticky",
            top: "20px",
            marginLeft: "50px",
            position: "static", 
          }}>
            <h2 style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#000000",
              borderBottom: "2px solid #f0f0f0",
              paddingBottom: "10px"
            }}>
              Assessment Instructions
            </h2>
            
            <div style={{ marginBottom: "25px" }}>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#333"
              }}>
                Objective:
              </h3>
              <p style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#000000"
              }}>
                Complete the cooking challenge by following all the steps correctly to prepare the dish.
              </p>
            </div>
            
            <div style={{ marginBottom: "25px" }}>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#333"
              }}>
                Steps:
              </h3>
              <ol style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#000000",
                paddingLeft: "20px"
              }}>
                <li style={{ marginBottom: "8px" }}>Gather all required ingredients</li>
                <li style={{ marginBottom: "8px" }}>Prepare the ingredients as instructed</li>
                <li style={{ marginBottom: "8px" }}>Cook the dish following the proper sequence</li>
                <li style={{ marginBottom: "8px" }}>Plate the dish for serving</li>
              </ol>
            </div>
            
            <div style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "8px",
              borderLeft: "4px solid #000000"
            }}>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#333"
              }}>
                Tip:
              </h3>
              <p style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#555"
              }}>
                Pay attention to the instructions shown in the game. You can restart the assessment if you make a mistake.
              </p>
            </div>
          </div>
        </div>
        
        {/* New Container Below Game - With Width Adjustments */}
        <div className="feedback-container" style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          fontFamily: "'Nunito', sans-serif",
          marginTop: "30px",
          marginBottom: "40px",
          width: "calc(100% - 350px)", // Adjusted width to account for the instructions container
          maxWidth: "960px", // Match the minWidth of game container
        }}>
          <h2 style={{
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#adb44e",
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "10px"
          }}>
            Description & Game Controls 
          </h2>

          <div>
            <p style={{ marginTop: "0px", paddingLeft: "0" }}>
            In this final assessment, You'll be tasked with preparing hot meals dishes to 
            complete the challenge. Make sure everything is cooked to perfection progress only counts when the dishes 
            are successfully completed. Ready to show your skills?
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "15px", marginBottom: "10px" }}>
              How to Play:
            </h4>
            <ul style={{ marginTop: "0px", paddingLeft: "20px" }}>
              <li>Move: WASD</li>
              <li>RIGHT CLICK: Grab</li>
              <li>LEFT CLICK: Action</li>
            </ul>
          </div>
          
          <div className="game-status" style={{
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: gameStatus === "completed" ? "#f0f7e6" : "#f9f9f9",
            borderRadius: "8px",
            borderLeft: `4px solid ${gameStatus === "completed" ? "#8bc34a" : "#adb44e"}`
          }}>
            <h3 style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#333"
            }}>
              Status:
            </h3>
            <p style={{
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#555"
            }}>
              {gameStatus === "completed" 
                ? "Congratulations! You've successfully completed the assessment." 
                : gameStarted 
                  ? "Assessment in progress. Follow the instructions to complete."
                  : "Click the play button to start the assessment."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalAssessment;