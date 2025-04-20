import React, { useEffect } from "react";

const CookingGame = () => {
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
    <div style={{ width: "100%", height: "600px" }}>
      <iframe
        src="/CuisineWebglBuild/index.html"
        title="Cooking"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default CookingGame;