import "../../../fw-cuisining.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import React, { useState, useEffect } from 'react';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ 
      marginBottom: "40px", 
      paddingTop: "30px",
      fontSize: "15px",
      marginLeft: "65px"
    }}>
      <ol className="breadcrumb" style={{ 
        backgroundColor: "transparent", 
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

const Quiz = () => {
  const [quizState, setQuizState] = useState('idle'); // 'idle', 'rules', 'playing', 'finished'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [reviewTime, setReviewTime] = useState(3); // New state for review time

  const questions = [
    {
      question: "What is the Capital of Pakistan?",
      options: ["New York", "Islamabad", "Paris", "Peshawar"],
      correctAnswer: "Islamabad"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["Java", "Python", "JavaScript", "C++"],
      correctAnswer: "JavaScript"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au"
    }
  ];

  // Timer effect for question time
  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && timerActive) {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, timerActive]);

  // Review time effect
  useEffect(() => {
    let reviewTimer;
    if (selectedAnswer !== null && reviewTime > 0) {
      reviewTimer = setTimeout(() => setReviewTime(reviewTime - 1), 1000);
    } else if (selectedAnswer !== null && reviewTime === 0) {
      moveToNextQuestion();
    }
    return () => clearTimeout(reviewTimer);
  }, [reviewTime, selectedAnswer]);

  // Reset timers when question changes
  useEffect(() => {
    if (quizState === 'playing') {
      setTimeLeft(10);
      setReviewTime(3);
      setTimerActive(true);
      setSelectedAnswer(null);
    }
  }, [currentQuestion, quizState]);

  const handleTimeUp = () => {
    setSelectedAnswer('timeout');
    setTimerActive(false);
    setReviewTime(3); // Start review period
  };

  const moveToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizState('finished');
    }
  };

  const handleAnswerClick = (option) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(option);
    setTimerActive(false);
    setReviewTime(3); // Start review period
    
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const startQuiz = () => {
    setQuizState('rules');
  };

  const startPlaying = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizState('playing');
  };

  const closeQuiz = () => {
    setQuizState('idle');
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizState('playing');
  };

  // Fixed modal dimensions
  const modalWidth = '500px';
  const modalHeight = '500px';

  const modalStyle = {
position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: modalWidth,
    height: modalHeight,
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
      {/* Quiz Button - Now in normal document flow */}
      {quizState === 'idle' && (
        <div style={{
          textAlign: 'center',
          margin: '20px 0'
        }}>
          <button 
            onClick={startQuiz}
            style={{
              padding: '12px 24px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            Qui<span style={{ fontWeight: "bold", color: "#ffffff", fontFamily: "'Nunito', sans-serif"}}>Zining</span>
          </button>
        </div>
      )}

      {/* Modal Overlay - Only shown when modal is active */}
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
            <div style={contentStyle}>
              {quizState === 'rules' && (
                <>
                  <div>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Quiz Rules</h2>
                    <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                      <li style={{ marginBottom: '10px' }}>You have 10 seconds to answer each question</li>
                      <li style={{ marginBottom: '10px' }}>After answering, you'll have 5 seconds to review</li>
                      <li style={{ marginBottom: '10px' }}>Correct answers will be highlighted in green</li>
                      <li style={{ marginBottom: '10px' }}>Wrong answers will be highlighted in red</li>
                      <li style={{ marginBottom: '10px' }}>You can't change your answer after selection</li>
                      <li>Your score will be shown at the end</li>
                    </ul>
                  </div>
                  <button 
                    onClick={startPlaying}
                    style={{
                      display: 'block',
                      margin: '20px auto 0',
                      padding: '10px 20px',
                      backgroundColor: '#4CAF50',
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

              {quizState === 'playing' && (
                <>
                  <div>
                    <div style={{
                      height: '10px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '5px',
                      marginBottom: '20px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${selectedAnswer === null ? (timeLeft / 10) * 100 : (reviewTime / 3) * 100}%`,
                        backgroundColor: selectedAnswer === null 
                          ? (timeLeft > 3 ? '#4CAF50' : '#f44336')
                          : '#2196F3',
                        transition: 'width 1s linear, background-color 0.3s'
                      }}></div>
                    </div>
                    
                    <h1 style={{
                      textAlign: 'center',
                      color: '#333',
                      marginBottom: '20px',
                      fontSize: '24px'
                    }}>Quiz App</h1>
                    <h2 style={{
                      color: '#444',
                      marginBottom: '20px',
                      fontSize: '18px',
                      minHeight: '60px'
                    }}>{questions[currentQuestion].question}</h2>
                    
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      marginBottom: '20px'
                    }}>
                      {questions[currentQuestion].options.map((option, index) => {
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
                          if (option === questions[currentQuestion].correctAnswer) {
                            buttonStyle.backgroundColor = '#a5d6a7';
                            buttonStyle.color = '#2e7d32';
                          } else if (option === selectedAnswer && option !== questions[currentQuestion].correctAnswer) {
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
                      Question {currentQuestion + 1} of {questions.length}
                    </div>
                    <div style={{
                      color: selectedAnswer === null 
                        ? (timeLeft > 3 ? '#4CAF50' : '#f44336')
                        : '#2196F3',
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
                    fontSize: '24px'
                  }}>Your Score: {score}/{questions.length}</h2>
                  <p style={{
                    fontSize: '24px',
                    color: '#4CAF50',
                    marginBottom: '30px'
                  }}>Done!</p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    width: '100%'
                  }}>
                    <button 
                      onClick={restartQuiz}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'background-color 0.3s'
                      }}
                    >
                      Try Again
                    </button>
                    <button 
                      onClick={closeQuiz}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'background-color 0.3s'
                      }}
                    >
                      Close
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
          }
        `}
      </style>

      <Navbar />
      <Breadcrumb />
      
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
                margin: "0 0 0 90px",
                padding: "0 20px 0 0",
                marginTop: "10px"
              }}>
                <h1 className="unit-title" style={{
                  fontSize: "26px",
                  fontWeight: "800",
                  margin: "0 0 30px 0",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#000000",
                  textAlign: "left"
                }}>
                  UNIT 1: Lesson 1 & 2 Kitchen Department and The Kitchen Staff
                </h1>
              </div>

              <div className="video-container" style={{ 
                maxWidth: "800px",
                margin: "0 0 30px 90px",
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
                margin: "0 0 40px 90px",
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
            
            <div className="right-side-container" style={{
              flex: 1,
              marginLeft: "40px",
              padding: "20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              height: "520px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "24px",
                color: "#333",
                marginBottom: "20px",
                borderBottom: "2px solid #ddd",
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
                <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
                  <a style={{ textDecoration: "none", color: "#000000" }}>Introduction</a>
                </li>
                <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
                  <a style={{ textDecoration: "none", color: "#000000" }}> TOPIC 1: Organizational Structure in the Kitchen</a>
                </li>
                <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
                  <a style={{ textDecoration: "none", color: "#000000" }}> TOPIC 2: Knowing your Role as a Kitchen Staff</a>
                </li>
                <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
                  <a style={{ textDecoration: "none", color: "#000000" }}> TOPIC 3: Duties and Responsibilities of a Kitchen Staff</a>
                </li>
                <li style={{ padding: "8px 0" }}>
                  <a style={{ textDecoration: "none", color: "#000000" }}> TOPIC 4: Professional Work Habits and Skills of a Kitchen Staff</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end p5" style={{ marginBottom: "100px" }}>
        <button className="cbtn cbtn-secondary done-button" style={{ width: "150px", height: "50px", marginRight: "105px" }}>
          Done
        </button>
      </div>
      
      <Quiz />
      <Footer/>
    </>
  );
}

export default KitchenDepartment;