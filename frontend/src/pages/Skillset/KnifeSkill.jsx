import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
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
        <li className="breadcrumb-item"><a href="/Home-page" style={{ color: "black", textDecoration: "none" }}>Home</a></li>
        <span style={{ margin: "0 10px" }}>&gt;</span>
        <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "750" }}>Knife Skills</li>
      </ol>
    </nav>
  );
};

const CongratsModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      fontFamily: "'Nunito', sans-serif"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "15px",
        width: "90%",
        maxWidth: "600px",
        padding: "30px",
        textAlign: "center",
        boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
        position: "relative"
      }}>
        <div style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#C1C857",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto 20px",
          boxShadow: "0 4px 15px rgba(173, 180, 78, 0.4)"
        }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="50" 
            height="50" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        
        <h2 style={{
          fontSize: "28px",
          fontWeight: "800",
          color: "#333",
          marginBottom: "15px"
        }}>
          Knife Skills Mastered!
        </h2>
        
        <p style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#555",
          marginBottom: "25px"
        }}>
          You've successfully completed the Knife Skills Challenge! Your certificate has been sent to your registered email address.
        </p>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={onClose}
            style={{
              backgroundColor: "#C1C857",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "50px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 3px 10px rgba(173, 180, 78, 0.3)"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#adb44e"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#C1C857"}
          >
            Continue Learning
          </button>
          
          <a 
            href="/home-page" 
            style={{
              backgroundColor: "white",
              color: "#C1C857",
              border: "2px solid #C1C857",
              padding: "12px 25px",
              borderRadius: "50px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#f5f7e6";
              e.target.style.color = "#adb44e";
              e.target.style.borderColor = "#adb44e";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#C1C857";
              e.target.style.borderColor = "#C1C857";
            }}
          >
            Go back home
          </a>
        </div>
        
        <div style={{
          marginTop: "30px",
          paddingTop: "20px",
          borderTop: "1px solid #eee",
          color: "#888",
          fontSize: "14px"
        }}>
          <p>Your precision and technique are impressive! Keep honing your skills with our advanced culinary challenges.</p>
        </div>
      </div>
    </div>
  );
};

const KnifeSkill = () => {
  const [gameStatus, setGameStatus] = useState("in-progress");
  const [gameStarted, setGameStarted] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

  useEffect(() => {
    const handleGameCompletion = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No authentication token found");
        
        const response = await fetch("http://localhost:5000/api/game/complete-assessment2", {
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
        setShowCongratsModal(true);
        console.log("Congratulations! You completed the game and your progress has been saved!");
        console.log("Assessment update successful:", data);
      } catch (error) {
        console.error("Error updating assessment status:", error);
        console.log(`Game completed but couldn't save progress: ${error.message}`);
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

  const closeModal = () => {
    setShowCongratsModal(false);
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
      <CongratsModal show={showCongratsModal} onClose={closeModal} />

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
            <span style={{ color: "#000000" }}>Knife</span> Skills
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
              title="Knife Skills Challenge"
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
              Instructions
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
                Showcase your knife skills by completing the cutting challenge. Perform each technique correctly to progress 
                through the task.
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
                <li style={{ marginBottom: "8px" }}>Read the instructions carefully before starting.</li>
                <li style={{ marginBottom: "8px" }}>Perform each cutting technique as prompted—slice, dice, or mince.</li>
                <li style={{ marginBottom: "8px" }}>Ensure your cuts are clean, accurate, and consistent.</li>
                <li style={{ marginBottom: "8px" }}>Complete the task to finish the task.</li>
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
                Stay focused and follow the on-screen instructions closely. You can retry the challenge if you make a mistake.
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
          width: "calc(100% - 350px)",
          maxWidth: "960px",
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
            In this knife skills challenge, you'll be tasked with slicing, dicing, and mincing with speed and precision. 
            Each cut needs to be clean, precise, and on point. Progress only counts when your technique is flawless. Ready to 
            grip the knife and prove your skills?
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
                  : "Click the play button to start the game."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnifeSkill;