import "../../../fw-cuisining.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ 
      marginBottom: "40px", 
      paddingTop: "30px",
      fontSize: "15px",
<<<<<<< HEAD
      marginLeft: "45px"
=======
      marginLeft: "45px",
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
    }}>
      <ol className="breadcrumb" style={{ 
        padding: 0,
        margin: 0
      }}>
        <li className="breadcrumb-item"><a href="/Courses" style={{ color: "black", textDecoration: "none" }}>Courses</a></li>
        <span style={{ margin: "0 10px" }}>&gt;</span>
<<<<<<< HEAD
        <li className="breadcrumb-item"><a href="/PreparingEggVagetable" style={{ color: "black", textDecoration: "none" }}>Preparing Egg Vagetable And  Farinaceous Dishes</a></li>
=======
        <li className="breadcrumb-item"><a href="/PreparingEggVegetable" style={{ color: "black", textDecoration: "none" }}>Preparing Egg, Vegetable and Farinaceous Dishes</a></li>
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
        <span style={{ margin: "0 10px" }}>&gt;</span>
        <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "750" }}>Lesson 1</li>
      </ol>
    </nav>
  );
};

const Quiz = ({ onQuizComplete }) => {
  const [quizState, setQuizState] = useState('idle'); // 'idle', 'rules', 'playing', 'finished'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [reviewTime, setReviewTime] = useState(3);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
<<<<<<< HEAD

  const allQuestions = [
    {
      question: "Most used knife in the kitchen for chopping, slicing, dicing, etc?",
      options: ["Chef's Knife", "Santoku Knife", "Pairing Knife", "Boning Knife"],
      correctAnswer: "Chef's Knife"
    },
    {
      question: "Used in measuring small volumes of dry and semi-dry ingredients?",
      options: ["Measuring Cup", "Thermometer", "Scales", "Measuring Spoons"],
      correctAnswer: "Measuring Spoons"
    },
    {
      question: "A four-sided metal box with grids of varying sizes. Used for shredding and grating vegetables, cheese, citrus rinds, and other foods?",
      options: ["Offset Spatula", "Mandoline", "Grater", "Pastry Wheel"],
      correctAnswer: "Grater"
    },
    {
      question: "Most used knife in the kitchen for chopping, slicing, dicing, etc.  ?",
      options: ["Chef's Knife", "Santoku Knife", "Paring Knife", "Boning Knife"],
      correctAnswer: "Chef's Knife"
    },
    {
      question: "Used for boning raw meat and poultry.  ?",
      options: ["Scimitar", "Cleaver", "Oyster Knife", "Clam Knife"],
      correctAnswer: "Clam Knife"
=======
  const [passedQuiz, setPassedQuiz] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const allQuestions = [
    {
      question: "What quality of egg has a firm yolk and egg white?",
      options: ["Grade A", "Grade B", "Grade AA", "Grade C"],
      correctAnswer: "Grade AA"
    },
    {
      question: "What quality of egg is this, it is best used for hard-cooked egg but needs to held in the refrigerator a few days?",
      options: ["Grade B", "Grade A", "Grade AA", "Grade C"],
      correctAnswer: "Grade A"
    },
    {
      question: "Best for fried and poached egg",
      options: ["Grade AA", "Grade A", "Grade B", "Grade C"],
      correctAnswer: "Grade AA"
    },
    {
      question: "High in both fat and protein?",
      options: ["Egg White", "Yolk", "Egg Shell", "Egg"],
      correctAnswer: "Yolk"
    },
    {
      question: "Used to foam and leaven many foods?",
      options: ["Egg Shell", "Yolk", "Egg White", "Egg"],
      correctAnswer: "Egg White"
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
    },
  
  ];

  // Function to shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle options for the current question
  const shuffleCurrentOptions = () => {
    if (shuffledQuestions.length > 0 && currentQuestion < shuffledQuestions.length) {
      setShuffledOptions(shuffleArray(shuffledQuestions[currentQuestion].options));
    }
  };

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

  // Reset timers and shuffle options when question changes
  useEffect(() => {
    if (quizState === 'playing') {
      setTimeLeft(10);
      setReviewTime(3);
      setTimerActive(true);
      setSelectedAnswer(null);
      shuffleCurrentOptions();
    }
  }, [currentQuestion, quizState]);

  const handleTimeUp = () => {
    setSelectedAnswer('timeout');
    setTimerActive(false);
    setReviewTime(3); // Start review period
  };

  const moveToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizState('finished');
<<<<<<< HEAD
      onQuizComplete(score); // Notify parent component of quiz completion with score
      
      // Save to localStorage if perfect score
      if (score === allQuestions.length) {
        localStorage.setItem('quizPerfectScore', 'true');
=======
      const passed = score === allQuestions.length; // Changed to require all correct
      setPassedQuiz(passed);
      onQuizComplete(score);
      
      if (passed) {
        localStorage.setItem('quizPassed', 'true');
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
      }
    }
  };

  const handleAnswerClick = (option) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(option);
    setTimerActive(false);
    setReviewTime(3); // Start review period
    
    if (option === shuffledQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const startQuiz = () => {
    setQuizState('rules');
  };

  const startPlaying = () => {
    // Shuffle questions when starting the quiz
    const shuffled = shuffleArray(allQuestions);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
<<<<<<< HEAD
    setQuizState('playing');
  };

  const closeQuiz = () => {
    setQuizState('idle');
  };

  const restartQuiz = () => {
    // Shuffle questions again when restarting
    const shuffled = shuffleArray(allQuestions);
    setShuffledQuestions(shuffled);
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
      {/* Quiz Button */}
      {quizState === 'idle' && (
        <button onClick={startQuiz} style={{ padding: '30px 30px 30px 100px', backgroundColor: '#ffffff', height: 'auto', minHeight: '150px', color: '#000000', fontWeight: "500", border: 'none', borderRadius: '15px', cursor: 'pointer', transition: 'background-color 0.3s', width: '100%', marginTop: '20px', textAlign: 'left', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', position: 'relative' }}>
          {/* Custom Image Icon */}
          <div style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)', width: '100px', height: '100px', backgroundImage: 'url(/quizicon.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
          
          {/* Text Content */}
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
                      marginBottom: '20px',
                      fontSize: '30px',
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: "750",
                    }}>Quiz App</h1>
                    <h2 style={{
                      color: '#333',
                      marginBottom: '20px',
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
                    color: score === shuffledQuestions.length ? '#4CAF50' : '#da420e',
                    marginBottom: '30px',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "750",
                  }}>
                    {score === shuffledQuestions.length ? 'Perfect Score!' : 'Try Again!'}
                  </p>
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
                        backgroundColor: '#adb44e',
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
                        backgroundColor: '#da420e',
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

const IntroToEggDishes = () => {
  // Track whether user has started interacting with the page
  const [hasInteracted, setHasInteracted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [perfectScore, setPerfectScore] = useState(() => {
    // Check localStorage for existing perfect score
    return localStorage.getItem('quizPerfectScore') === 'true';
  });

  // Set up interaction tracking when component mounts
  useEffect(() => {
    const markAsInteracted = () => {
      setHasInteracted(true);
    };

    // Track any user interaction with the page
    window.addEventListener('click', markAsInteracted);
    window.addEventListener('keydown', markAsInteracted);
    window.addEventListener('scroll', markAsInteracted);

    return () => {
      window.removeEventListener('click', markAsInteracted);
      window.removeEventListener('keydown', markAsInteracted);
      window.removeEventListener('scroll', markAsInteracted);
    };
  }, []);

  // Handle beforeunload to prevent accidental refresh - fixed alert logic
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Only show the alert if the user has interacted with the page
      // and hasn't completed the quiz with a perfect score
      if (hasInteracted && !perfectScore) {
        // Standard way to trigger the confirmation dialog
        e.preventDefault();
        // Message shown in most browsers (though some use their own default text)
        e.returnValue = 'Changes you made may not be saved. Are you sure you want to leave this page?';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasInteracted, quizCompleted, perfectScore]);

  // Handle quiz completion
  const handleQuizComplete = (score) => {
    setQuizCompleted(true);
    if (score === 5) {
      setPerfectScore(true);
    }
  };

  // Handle next lesson button click
  const handleNextLessonClick = (e) => {
    if (!perfectScore) {
      e.preventDefault();
      alert('You need to complete the quiz with a perfect score (5/5) to proceed to the next lesson.');
=======
    setPassedQuiz(false);
    setQuizState('playing');
  };

  // Handle modal close with confirmation
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
    // Shuffle questions again when restarting
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
      
      const response = await axios.post('http://localhost:5000/api/course/PreparingEggVegetable/update', {
        lessonName: 'IntroToEggDishes'
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Lesson updated:', response.data);
      window.location.href = '/MeasurementsAndConversion';
    } catch (error) {
      console.error('Error updating lesson status:', error.message);
    }
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
      {/* Quiz Button */}
      {quizState === 'idle' && (
        <button onClick={startQuiz} style={{ padding: '30px 30px 30px 100px', backgroundColor: '#ffffff', height: 'auto', minHeight: '150px', color: '#000000', fontWeight: "500", border: 'none', borderRadius: '15px', cursor: 'pointer', transition: 'background-color 0.3s', width: '100%', marginTop: '20px', textAlign: 'left', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', position: 'relative' }}>
          {/* Custom Image Icon */}
          <div style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)', width: '100px', height: '100px', backgroundImage: 'url(/quizicon.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
          
          {/* Text Content */}
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
            {/* Exit Confirmation Dialog */}
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
                    color: score === shuffledQuestions.length ? '#4CAF50' : '#da420e',
                    marginBottom: '30px',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "750",
                  }}>
                    {score === shuffledQuestions.length ? 'Perfect Score! You passed!' : 'Try Again! You need all 5 correct answers to pass'}
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

const IntroToEggDishes = () => {
  // Track whether user has started interacting with the page
  const [hasInteracted, setHasInteracted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [passedQuiz, setPassedQuiz] = useState(() => {
    return localStorage.getItem('quizPassed') === 'true';
  });

  // Set up interaction tracking when component mounts
  useEffect(() => {
    const markAsInteracted = () => {
      setHasInteracted(true);
    };

    window.addEventListener('click', markAsInteracted);
    window.addEventListener('keydown', markAsInteracted);
    window.addEventListener('scroll', markAsInteracted);

    return () => {
      window.removeEventListener('click', markAsInteracted);
      window.removeEventListener('keydown', markAsInteracted);
      window.removeEventListener('scroll', markAsInteracted);
    };
  }, []);

  // Handle quiz completion
  const handleQuizComplete = (score) => {
    setQuizCompleted(true);
    if (score >= 5) {
      setPassedQuiz(true);
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
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
<<<<<<< HEAD
                  <span style={{ color: "#adb44e", }}>UNIT 2:</span> Lesson 1  Common Kitchen Tools
=======
                  <span style={{ color: "#adb44e", }}>UNIT 1:</span> Lesson 1 Introduction to Egg Dishes
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
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
<<<<<<< HEAD
                <iframe 
=======
                  <iframe 
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "15px"
                    }}
<<<<<<< HEAD
                    src="https://www.youtube.com/embed/wW2whLYcYLE?si=r0R7xwkz4BI96CCQ"
=======
                    src="https://www.youtube.com/embed/1HlfVQoN-yM?si=CEnVS8OlCAEJST_j" 
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
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
<<<<<<< HEAD
                color: "#333"
=======
                color: "#333",
                marginBottom: "165px"
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
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
<<<<<<< HEAD
                This unit will discuss most of the basic prerequisite knowledge and skills that is required of any kitchen staff in the professional cookery industry
                </p>
                <p style={{ marginBottom: "15px" }}>
                Familiarizing yourself in the kitchen also requires knowledge of knowing all the names of the equipment and tools that are present and used by the kitchen staff. It is also important to be able to read and convert basic measurements used in servings.
                </p>
               
=======
                Eggs are one of the most versatile ingredients in the kitchen. These can be prepared and cooked in many ways. The most commonly used eggs are chicken eggs because of its blandness, availability and variety of sizes. Additionally, eggs contain a large amount of protein which coagulates when heated. Eggs are ideally cooked slowly and with moderate heat.
                </p>
                <h6><span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: "bold"}}>At the end of this unit, you should be able to:</span></h6>
                <ul>
                  <li>Identify the components of an egg;</li>
                  <li>Determine the desirable qualities of eggs;</li>
                  <li>Handle and store fresh eggs properly; and</li>
                  <li>Prepare eggs using various cooking methods.</li>
                </ul>
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
              </div>
            </div>
            
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              {/* Right side container */}
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
<<<<<<< HEAD
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
=======
                    <a style={{ textDecoration: "none", color: "#000000" }}> Topic 1: Composition of Eggs</a>
                  </li>
                  <li style={{ padding: "8px 0",  }}>
                    <a style={{ textDecoration: "none", color: "#000000" }}> Topic 2: Quality Grades of Eggs</a>
                  </li>
                  <li style={{ padding: "8px 0",  }}>
                    <a style={{ textDecoration: "none", color: "#000000" }}> Topic 3: Storing Fresh Eggs</a>
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
                  </li>
                </ul>
              </div>
              
              {/* Quiz Button Container - Now positioned directly below the right-side-container */}
              <div className="quiz-button-container" style={{
                width: '100%'
              }}>
                <Quiz onQuizComplete={handleQuizComplete} />
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <div className="d-flex justify-content-end p5" style={{ marginBottom: "30px" }}>
        <button 
          className="cbtn cbtn-secondary done-button" 
          style={{ 
            marginTop: "-45px", 
            width: "170px", 
            height: "60px", 
            marginRight: "35px", 
            borderRadius: "15px",
            opacity: perfectScore ? 1 : 0.6,
            cursor: perfectScore ? 'pointer' : 'not-allowed'
          }}
          onClick={handleNextLessonClick}
          disabled={!perfectScore}
        >
          Next Lesson
        </button>
      </div>
=======
>>>>>>> 748527c997260f19eec38fe30965d1a56c062a4e
      
      <Footer/>
    </>
  );
}

export default IntroToEggDishes;