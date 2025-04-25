import "../../../fw-cuisining.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Joyride from 'react-joyride';

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
        <li className="breadcrumb-item"><a href="/FundamentalsOfCookery" style={{ color: "black", textDecoration: "none" }}>Fundamentals Of Professional Cookery</a></li>
        <span style={{ margin: "0 10px" }}>&gt;</span>
        <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "750" }}>Lesson 1 & 2</li>
      </ol>
    </nav>
  );
};

const Quiz = ({ onQuizComplete }) => {
  const [quizState, setQuizState] = useState('idle');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [reviewTime, setReviewTime] = useState(3);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [passedQuiz, setPassedQuiz] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const allQuestions = [
    {
      question: "Oversees kitchen production: quality, hiring, cost, quotas, and coordination?",
      options: ["Sous Chef", "Butcher Chef", "Pastry Chef", "Executive Chef"],
      correctAnswer: "Executive Chef"
    },
    {
      question: "They are in charge of the butcher shop. They prepare meats, fish, and poultry?",
      options: ["Chef Gardmangers", "Sous Chef", "Butcher Chef", "Sauciers"],
      correctAnswer: "Butcher Chef"
    },
    {
      question: "Also Known as grill cooks, or chef grillardin. They fall under the Rottieseur?",
      options: ["Savoury Cook", "Chef De Parties", "Banquet Chef", "Chef Tournants"],
      correctAnswer: "Savoury Cook"
    },
    {
      question: "They act as trainees helping out in day-to-day operationst?",
      options: ["Apprenties", "Entremetier", "Pastry Chef", "Poissonier"],
      correctAnswer: "Apprenties"
    },
    {
      question: "They are responsible in preparing all sauces and sauces-related dishes?",
      options: ["Pastry Chef", "Sauciers", "Sous Chef", "Executive Chef"],
      correctAnswer: "Sauciers"
    },
    {
      question: "What is the recommended time to arrive at work as a kitchen staff?",
      options: ["On time", "Late", "Early", "Anytime"],
      correctAnswer: "On time"
    },
    {
      question: "What does FIFO stand for in kitchen practices?",
      options: ["First In, Fast Out", "First In, First Out", "Food In, Food Out", "Fresh Ingredients, Fresh Out"],
      correctAnswer: "First In, First Out"
    },
    {
      question: "Why is it important to taste everything in your station?",
      options: ["To satisfy curiosity","To ensure quality and consistency", "To impress co-workers", "To waste time"],
      correctAnswer: "To ensure quality and consistency"
    },
    {
      question: "What should you do if you are sick before your shift?",
      options: ["Go to work and hide it","Tell the chef beforehand", "Ignore it", "Ask a co-worker to cover for you without telling anyone"],
      correctAnswer: "Tell the chef beforehand"
    },
    {
      question: "What should you avoid when handling products in the kitchen?",
      options: ["Over-preparation leading to waste","Preparing fresh products daily", "Measuring time with ise en place", "Helping co-workers in need"],
      correctAnswer: "Over-preparation leading to waste"
    },
  ];

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const shuffleCurrentOptions = () => {
    if (shuffledQuestions.length > 0 && currentQuestion < shuffledQuestions.length) {
      setShuffledOptions(shuffleArray(shuffledQuestions[currentQuestion].options));
    }
  };

  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && timerActive) {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, timerActive]);

  useEffect(() => {
    let reviewTimer;
    if (selectedAnswer !== null && reviewTime > 0) {
      reviewTimer = setTimeout(() => setReviewTime(reviewTime - 1), 1000);
    } else if (selectedAnswer !== null && reviewTime === 0) {
      moveToNextQuestion();
    }
    return () => clearTimeout(reviewTimer);
  }, [reviewTime, selectedAnswer]);

  useEffect(() => {
    if (quizState === 'playing') {
      setTimeLeft(10);
      setReviewTime(2);
      setTimerActive(true);
      setSelectedAnswer(null);
      shuffleCurrentOptions();
    }
  }, [currentQuestion, quizState]);

  const handleTimeUp = () => {
    setSelectedAnswer('timeout');
    setTimerActive(false);
    setReviewTime(3);
  };

  const moveToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizState('finished');
      const passed = score >= 8;
      setPassedQuiz(passed);
      onQuizComplete(score);
      
      if (passed) {
        localStorage.setItem('quizPassed', 'true');
      }
    }
  };

  const handleAnswerClick = (option) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(option);
    setTimerActive(false);
    setReviewTime(3);
    
    if (option === shuffledQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const startQuiz = () => {
    setQuizState('rules');
  };

  const startPlaying = () => {
    const shuffled = shuffleArray(allQuestions);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setPassedQuiz(false);
    setQuizState('playing');
  };

  const handleCloseQuiz = () => {
    if (passedQuiz && quizState === 'finished') {
      setShowExitConfirm(true);
    } else {
      closeQuiz();
    }
  };

  const closeQuiz = () => {
    setQuizState('idle');
    setShowExitConfirm(false);
  };

  const restartQuiz = () => {
    const shuffled = shuffleArray(allQuestions);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setPassedQuiz(false);
    setQuizState('playing');
  };

  const handleNextLessonClick = async () => {
    try {
      const getToken = () => {
        return localStorage.getItem('authToken');
      };
      const token = getToken();
      if (!token) return;
      
      const response = await axios.post(
        "http://localhost:5000/api/course/fundamentalsofcokery/update",
        { lessonName: 'KitchenDepartment' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      
         
      console.log('Lesson updated:', response.data);
      window.location.href = '/CommonKitchenTools';
    } catch (error) {
      console.error('Error updating lesson status:', error.message);
    }
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '500px',
    maxWidth: '90%',
    maxHeight: '90vh',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    padding: '30px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  return (
    <>
      {quizState === 'idle' && (
        <button onClick={startQuiz} style={{ padding: '30px 30px 30px 100px', backgroundColor: '#ffffff', height: 'auto', minHeight: '150px', color: '#000000', fontWeight: "500", border: 'none', borderRadius: '15px', cursor: 'pointer', transition: 'background-color 0.3s', width: '100%', marginTop: '20px', textAlign: 'left', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)', width: '100px', height: '100px', backgroundImage: 'url(/quizicon.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '10px' }}>
            <span style={{ color: "#BCC444", fontSize: "41px", fontWeight: "750", fontFamily: "'Nunito', sans-serif", lineHeight: '1' }}>Q</span>
            <span style={{ color: "#000000", fontSize: "30px", fontWeight: "750", fontFamily: "'Nunito', sans-serif", lineHeight: '1' }}>uizining</span>
          </div>
          <div style={{ fontSize: "14px", lineHeight: "1.4", color: "#000000",marginLeft: '5px'}}>
            <p style={{ margin: '0 0 5px ' }}>Heads up! You need to finish the quiz before you can continue to the next lesson.</p>
            <p style={{ color: "#9aa045", fontStyle: "italic", fontSize: "12px", margin: 0 }}>Click me! to go to the quiz</p>
          </div>
        </button>
      )}

      {(quizState === 'rules' || quizState === 'playing' || quizState === 'finished') && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 999
        }}>
          <div style={modalStyle}>
            {showExitConfirm && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255,255,255,0.9)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1001,
                padding: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{ marginBottom: '20px' }}>You have passed the quiz!</h3>
                <p style={{ marginBottom: '30px' }}>Are you sure you want to exit without proceeding to the next lesson?</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    onClick={closeQuiz}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#da420e',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Exit Anyway
                  </button>
                  <button 
                    onClick={() => setShowExitConfirm(false)}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#adb44e',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div style={contentStyle}>
              {quizState === 'rules' && (
                <>
                  <div>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#000000', fontFamily: "'Nunito', sans-serif", fontWeight: "750", marginTop: "15px" }}>Quiz <span style={{ color: '#adb44e' }}>Rules</span></h2>
                    <ul style={{ marginBottom: '20px', paddingLeft: '0', textAlign: 'center', marginTop: '50px', listStylePosition: 'inside', listStyleType: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px', textAlign: 'left', width: 'fit-content' }}><span style={{ position: 'absolute', left: '0', color: '#adb44e' }}>•</span>You have 10 seconds to answer each question</li>
                      <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px', textAlign: 'left', width: 'fit-content' }}><span style={{ position: 'absolute', left: '0', color: '#adb44e' }}>•</span>After answering, you'll have 5 seconds to review</li>
                      <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px', textAlign: 'left', width: 'fit-content' }}><span style={{ position: 'absolute', left: '0', color: '#adb44e' }}>•</span>Correct answers will be highlighted in green</li>
                      <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px', textAlign: 'left', width: 'fit-content' }}><span style={{ position: 'absolute', left: '0', color: '#adb44e' }}>•</span>Wrong answers will be highlighted in red</li>
                      <li style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px', textAlign: 'left', width: 'fit-content' }}><span style={{ position: 'absolute', left: '0', color: '#adb44e' }}>•</span>You can't change your answer after selection</li>
                      <li style={{ position: 'relative', paddingLeft: '20px', textAlign: 'left', width: 'fit-content' }}><span style={{ position: 'absolute', left: '0', color: '#adb44e' }}>•</span>Your score will be shown at the end</li>
                    </ul>
                  </div>
                  <button 
                    onClick={startPlaying}
                    style={{
                      display: 'block',
                      margin: '20px auto 0',
                      padding: '10px 20px',
                      backgroundColor: '#adb44e',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                      cursor: 'pointer'
                    }}
                  >
                    Start Quiz
                  </button>
                </>
              )}

              {quizState === 'playing' && shuffledQuestions.length > 0 && shuffledOptions.length > 0 && (
                <>
                  <div>
                    <div style={{
                      height: '10px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '15px',
                      marginBottom: '20px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${selectedAnswer === null ? (timeLeft / 10) * 100 : (reviewTime / 3) * 100}%`,
                        backgroundColor: selectedAnswer === null 
                          ? (timeLeft > 3 ? '#c1c857' : '#da420e')
                          : '#2196f3',
                        transition: 'width 1s linear, background-color 0.3s'
                      }}></div>
                    </div>
                    
                    <h1 style={{
                      textAlign: 'center',
                      color: '#000000',
                      marginBottom: '30px',
                      fontSize: '30px',
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: "750",
                    }}>Quiz App</h1>
                    <h2 style={{
                      color: '#333',
                      marginBottom: '1px',
                      fontSize: '18px',
                      minHeight: '60px',
                    }}>{shuffledQuestions[currentQuestion].question}</h2>
                    
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      marginBottom: '20px'
                    }}>
                      {shuffledOptions.map((option, index) => {
                        let buttonStyle = {
                          padding: '12px',
                          backgroundColor: '#f0f0f0',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: selectedAnswer === null ? 'pointer' : 'not-allowed',
                          textAlign: 'left',
                          transition: 'all 0.3s'
                        };

                        if (selectedAnswer) {
                          if (option === shuffledQuestions[currentQuestion].correctAnswer) {
                            buttonStyle.backgroundColor = '#a5d6a7';
                            buttonStyle.color = '#2e7d32';
                          } else if (option === selectedAnswer && option !== shuffledQuestions[currentQuestion].correctAnswer) {
                            buttonStyle.backgroundColor = '#ffab91';
                            buttonStyle.color = '#c62828';
                          }
                        }

                        return (
                          <button
                            key={index}
                            style={buttonStyle}
                            onClick={() => handleAnswerClick(option)}
                            disabled={selectedAnswer !== null}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      color: '#666',
                      fontSize: '14px'
                    }}>
                      Question {currentQuestion + 1} of {shuffledQuestions.length}
                    </div>
                    <div style={{
                      color: selectedAnswer === null 
                        ? (timeLeft > 3 ? '#c1c857' : '#da420e')
                        : '#2196f3',
                      fontWeight: 'bold'
                    }}>
                      {selectedAnswer === null ? `${timeLeft}s` : `Review: ${reviewTime}s`}
                    </div>
                  </div>
                </>
              )}

              {quizState === 'finished' && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  textAlign: 'center'
                }}>
                  <h2 style={{
                    color: '#333',
                    marginBottom: '20px',
                    fontSize: '24px',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "700",
                  }}>Your Score: {score}/{shuffledQuestions.length}</h2>
                  <p style={{
                    fontSize: '24px',
                    color: score >= 8 ? '#4CAF50' : '#da420e',
                    marginBottom: '30px',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "750",
                  }}>
                    {score >= 8 ? 'Great Job! You passed!' : 'Try Again! You need at least 8 correct answers'}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    width: '100%',
                    flexDirection: 'column'
                  }}>
                    {passedQuiz && (
                      <button 
                        onClick={handleNextLessonClick}
                        style={{
                          padding: '10px 20px',
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '16px',
                          transition: 'background-color 0.3s',
                          width: '100%'
                        }}
                      >
                        Proceed to Next Lesson
                      </button>
                    )}
                    <button 
                      onClick={passedQuiz ? handleCloseQuiz : closeQuiz}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: passedQuiz ? '#adb44e' : '#da420e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'background-color 0.3s',
                        width: passedQuiz ? '100%' : 'auto'
                      }}
                    >
                      {passedQuiz ? 'Close Quiz' : 'Close'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const KitchenDepartment = () => {

   useEffect(() => {
                // Change the document title when this page is rendered
                document.title = "CuiSining - Fundamentals of Cookery";
              }, []);
              
  const [hasInteracted, setHasInteracted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [passedQuiz, setPassedQuiz] = useState(() => {
    return localStorage.getItem('quizPassed') === 'true';
  });
  const [runTour, setRunTour] = useState(false);
  const [tourStepIndex, setTourStepIndex] = useState(0);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedKitchenDepartment');
    if (!hasVisited) {
      setRunTour(true);
      localStorage.setItem('hasVisitedKitchenDepartment', 'true');
    }
  }, []);

  const handleQuizComplete = (score) => {
    setQuizCompleted(true);
    if (score >= 8) {
      setPassedQuiz(true);
    }
  };

  const [steps] = useState([
    {
      target: '.video-container',
      content: 'Watch this video introduction to learn about kitchen departments',
      disableBeacon: true, // This makes the tour start immediately
      placement: 'right'
    },
    {
      target: '.right-side-container',
      content: 'Here you can navigate through all lesson topics',
      placement: 'left'
    },
    {
      target: '.video-description',
      content: 'This section explains what you will learn in this lesson',
      placement: 'top'
    },
    {
      target: '.quiz-button-container',
      content: 'Complete the quiz to proceed to the next lesson',
      placement: 'top'
    }
  ]);

  const handleJoyrideCallback = (data) => {
    const { action, index, type, status } = data;
    
    // If close button clicked, end the tour
    if (action === 'close' || type === 'tour:end') {
      setRunTour(false);
      return;
    }
    
    // Continue with the tour
    if (type === 'step:after' || action === 'next') {
      // You could add additional logic here if needed
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          
          @media (max-width: 768px) {
            nav[aria-label="breadcrumb"],
            .content-container,
            .video-container {
              margin-left: 20px !important;
              padding-right: 20px !important;
            }
            .breadcrumb {
              flex-wrap: nowrap;
              overflow-x: auto;
              white-space: nowrap;
            }
            .unit-title {
              font-size: 22px !important;
            }
            .done-button {
              width: 30% !important;
              margin-right: 20px !important;
            }
            nav[aria-label="breadcrumb"] {
              padding-top: 20px !important;
            }
            .main-content-container {
              flex-direction: column !important;
            }
            .right-side-container {
              width: 100% !important;
              margin-left: 20px !important;
              margin-top: 30px !important;
              padding-right: 20px !important;
            }
            .quiz-button-container {
              margin-left: 20px !important;
              margin-top: 20px !important;
              width: calc(100% - 40px) !important;
            }
          }
        `}
      </style>

      <Navbar />
      <Breadcrumb />
      
      <Joyride
        steps={steps}
        run={runTour}
        callback={handleJoyrideCallback}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: '#c1c857',
            textColor: '#333',
            backgroundColor: '#fff',
            arrowColor: '#fff',
          },
          tooltip: {
            fontSize: 16,
            padding: 20,
          },
          buttonNext: {
            backgroundColor: '#c1c857',
            color: '#fff'
          },
          buttonBack: {
            color: '#c1c857'
          },
          buttonSkip: {
            color: '#da420e'
          }
        }}
      />
      
      <div style={{ width: "100%", margin: 0, padding: "0px 0" }}>
        <div style={{ width: "100%", marginBottom: "50px" }}>
          <div className="main-content-container" style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px"
          }}>
            <div style={{ flex: 2 }}>
              <div className="content-container" style={{ 
                margin: "0 0 0 50px",
                padding: "0 20px 0 0",
                marginTop: "10px"
              }}>
                <h1 className="unit-title" style={{
                  fontSize: "26px",
                  fontWeight: "750",
                  margin: "0 0 30px 0",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#000000",
                  textAlign: "left"
                }}>
                  <span style={{ color: "#adb44e", }}>UNIT 1:</span> Lesson 1 & 2 Kitchen Department and The Kitchen Staff
                </h1>
              </div>

              <div className="video-container" style={{ 
                maxWidth: "800px",
                margin: "0 0 30px 50px",
                padding: "0 20px 0 0"
              }}>
                <div style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  borderRadius: "15px",
                  overflow: "hidden"
                }}>
                  <iframe 
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "15px"
                    }}
                    src="https://www.youtube.com/embed/55FNElP8UYU?si=q490sA5PSSIiTR8-" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="video-description" style={{
                maxWidth: "800px",
                margin: "0 0 40px 50px",
                padding: "0",
                fontFamily: "'Poppins', sans-serif;",
                lineHeight: "1.6",
                color: "#333"
              }}>
                <h3 style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontFamily: "'Nunito', sans-serif",
                }}>
                  About This Lesson
                </h3>
                <p style={{ marginBottom: "15px", }}>  
                It is very important for any kitchen staff to first and foremost, understand the workplace. As a kitchen staff, you should be familiar with the organizational structure of the kitchen or the kitchen hierarchy so that you will know who's in charge and who to report to.
                </p>
                <p style={{ marginBottom: "15px" }}>
                As a kitchen staff, it is your responsibility to complete the task that is being assigned to you. One of your primary duties is to always keep the kitchen clean. Every kitchen maintains a hygiene and sanitation standard to ensure the health and safety of the employees and customers.
                </p>
                <h6><span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: "bold"}}>At the end of this unit, you should be able to:</span></h6>
                <ul>
                  <li>Knowledge on kitchen hygiene and sanitation</li>
                  <li>Basic kitchen equipment knowledge</li>
                  <li>Basic knife techniques</li>
                  <li>Ability to read accurate measurements</li>
                  <li>Ability to carefully follow directions</li>
                  <li>Ability to lift items on a daily basis</li>
                </ul>
              </div>
            </div>
            
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              <div className="right-side-container" style={{
                marginLeft: "1px",
                marginTop: "10px",
                padding: "20px",
                backgroundColor: "#c7cd67",
                borderRadius: "15px",
                height: "500px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                width: '100%'
              }}>
                <h3 style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "24px",
                  color: "#333",
                  marginBottom: "20px",
                  borderBottom: "1px solid #000000",
                  paddingBottom: "10px",
                  fontWeight: "750",
                }}>
                  Lesson Contents
                </h3>
                <ul style={{
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "16px",
                }}>
                  <li style={{ padding: "8px 0",  }}>
                    <a style={{ textDecoration: "none", color: "#000000" }}>Introduction</a>
                  </li>
                  <li style={{ padding: "8px 0",  }}>
                    <a style={{ textDecoration: "none", color: "#000000" }}> Topic 1: Organizational Structure in the Kitchen</a>
                  </li>
                  <li style={{ padding: "8px 0",  }}>
                    <a style={{ textDecoration: "none", color: "#000000" }}> Topic 2: Knowing your Role as a Kitchen Staff</a>
                  </li>
                  <li style={{ padding: "8px 0",  }}>
                    <a style={{ textDecoration: "none", color: "#000000" }}> Topic 3: Duties and Responsibilities of a Kitchen Staff</a>
                  </li>
                  <li style={{ padding: "8px 0" }}>
                    <a style={{ textDecoration: "none", color: "#000000" }}> Topic 4: Professional Work Habits and Skills of a Kitchen Staff</a>
                  </li>
                </ul>
              </div>
              
              <div className="quiz-button-container" style={{
                width: '100%'
              }}>
                <Quiz onQuizComplete={handleQuizComplete} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}

export default KitchenDepartment;