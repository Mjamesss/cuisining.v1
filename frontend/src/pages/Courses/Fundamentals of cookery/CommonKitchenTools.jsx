import { useState, useEffect } from "react";
import "../../../fw-cuisining.css";
import CuisiningLogo from "../../../components/CuisiningLogo";
import Footer from "../../../components/Footer";
import "./Unit2Lesson1.css";
import "./CommonKitchen.css";

const CommonKitchenTools = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [shuffledQuizData, setShuffledQuizData] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const quizData = [
    {
      question: "Used for general frying. It is the easiest pan to use for flipping food without utensils?",
      options: ["Stockpot", "Frypan", "Saucepan", "Brazier"],
      answer: "Frypan",
    },
    {
      question: "Used in measuring small volumes of dry and semi-dry ingredients?",
      options: ["Measuring Cup", "Thermometer", "Scales", "Measuring Spoons"],
      answer: "Measuring Spoons",
    },
    {
      question: "A four-sided metal box with grids of varying sizes. Used for shredding and grating vegetables, cheese, citrus rinds, and other foods?",
      options: ["Offset Spatula", "Mandoline", "Grater", "Pastry Wheel"],
      answer: "Grater",
    },
    {
      question: "Most used knife in the kitchen for chopping, slicing, dicing, etc?",
      options: ["Chef's Knife", "Santoku Knife", "Paring Knife", "Boning knife"],
      answer: "Chef's Knife",
    },
    {
      question: "Used for Boning raw meat and poultry?",
      options: ["Scimitar", "Cleaver", "Oyster Knife", "Clam Knife"],
      answer: "Clam Knife",
    },
  ];

  useEffect(() => {
    setShuffledQuizData(shuffleQuestions(quizData));
  }, []);

  const shuffleQuestions = (questions) => {
    let shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleAnswer = (selectedOption) => {
    setUserAnswers([
      ...userAnswers,
      {
        question: shuffledQuizData[currentQuestion].question,
        selected: selectedOption,
        correct: shuffledQuizData[currentQuestion].answer,
      },
    ]);

    if (selectedOption === shuffledQuizData[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setShuffledQuizData(shuffleQuestions(quizData));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setShowSummary(false);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (currentSlide < userAnswers.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <CuisiningLogo />

      <div className="p2 d-flex justify-content-center">
       {/* <div className="p5 ">
          <a href="FundamentalsOfCookery">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back"/>
          </a>
        </div>*/}
        <h1 className="p2 d-grid align-items-center justify-content-center" style={{ fontSize: "40px" }}>
          UNIT 2 LESSON 1: COMMON KITCHEN TOOLS, UTENSILS AND EQUIPMENT
        </h1>
      </div>

      <div className="p3 d-flex justify-content-center">
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/wW2whLYcYLE?si=2m1okRxERSF2e664"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <p className="p3 d-flex justify-content-center" style={{ fontSize: "30px", maxWidth: "1000px" }}>
          This unit will discuss most of the basic prerequisite knowledge and skills required of any kitchen staff in the professional cookery industry.
          <br /><br />
          Familiarizing yourself in the kitchen also requires knowledge of all the equipment and tools used by the kitchen staff. It is also important to be able to read and convert basic measurements used in servings.
        </p>
      </div>

      <div className="quiz-container">
        <h1 className="quiz-title">Quizining</h1>
        <div className="quiz-card">
          {showScore ? (
            <div>
              <h2 className="quiz-score">You scored {score} out of {shuffledQuizData.length}!</h2>
              <button className="quiz-button" onClick={() => setShowSummary(true)} style={{ marginRight: "10px" }}>See More</button>
              <button className="quiz-button" onClick={resetQuiz}>Play Again</button>
            </div>
          ) : (
            <div>
              <h2 className="quiz-question">{shuffledQuizData[currentQuestion]?.question}</h2>
              <div className="quiz-options">
                {shuffledQuizData[currentQuestion]?.options.map((option, index) => (
                  <button key={index} className="quiz-button" onClick={() => handleAnswer(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {showSummary && (
        <div className="carousel-container">
          <h3>Summary of Your Answers</h3>
          <div className="carousel">
            <button onClick={prevSlide} disabled={currentSlide === 0}>&lt;</button>
            <div className="carousel-content">
              <h4>Q{currentSlide + 1}: {userAnswers[currentSlide].question}</h4>
              <p>Your Answer: <span style={{ color: userAnswers[currentSlide].selected === userAnswers[currentSlide].correct ? "green" : "red" }}>
                {userAnswers[currentSlide].selected}
              </span></p>
              <p>Correct Answer: {userAnswers[currentSlide].correct}</p>
            </div>
            <button onClick={nextSlide} disabled={currentSlide === userAnswers.length - 1}>&gt;</button>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-end p5">
        <button className="cbtn cbtn-secondary" style={{ width: "10%", height: "50px" }}>Done</button>
      </div>

      <Footer />
    </>
  );
};

export default CommonKitchenTools;
