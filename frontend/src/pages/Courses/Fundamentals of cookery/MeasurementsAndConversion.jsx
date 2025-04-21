import { useState, useEffect } from "react";
import "../../../fw-cuisining.css";
import CuisiningLogo from "../../../components/CuisiningLogo";
import Footer from "../../../components/Footer";
import "./Unit2Lesson1.css";
import "./CommonKitchen.css";

const MeasurementsAndConversion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [shuffledQuizData, setShuffledQuizData] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const quizData = [
    {
      question: "How many tablespoons are equivalent to ½ cup?",
      options: ["4 tbsp", "8 tbsp", "12 tbsp", "16 tbsp"],
      answer: "8 tbsp",
    },
    {
      question: "What is the equivalent of 1 quart in liquid measurements? ",
      options: ["2 cups", "1 pint", "4 cups", "1 gallon"],
      answer: "4 cups",
    },
    {
      question: "How many teaspoons are in 1 tablespoon? ",
      options: ["2 tsp", "3 tsp", "4 tsp", "5 tsp"],
      answer: "3 tsp",
    },
    {
      question: "What is the metric equivalent of 1 pound? ",
      options: ["200 grams", "300 grams", "400 grams", "454 grams"],
      answer: "454 grams",
    },
    {
      question: "How many cups of liquid make 1 pint? ",
      options: ["1 cup", "2 cups", "3 cups", "4 cups"],
      answer: "2 cups",
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
        <div className="p5 ">
          {/*<a href="FundamentalsOfCookery">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png" alt="Back"/>
          </a> */}
        </div>
        <h1 className="p2 d-grid align-items-center justify-content-center" style={{ fontSize: "40px" }}>
         LESSON 2: MEASUREMENT AND COVERSION
        </h1>
      </div>

      <div className="p3 d-flex justify-content-center">
      <iframe width="100%" height="515" src="https://www.youtube.com/embed/UzwMn4tlCkE?si=hIp34PvLO_Gm1XAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="d-flex align-items-center justify-content-center">
      <p className="p3 d-grid justify-content-center" style={{ fontSize: "30px", maxWidth: "1000px" }}>
      Math is widely used in the kitchen. That is why culinary math requires you to be knowledgeable on the basics of addition, subtraction, multiplication, and division. You will also be using ratios and percentages from time to time.
    <br /><br />
    
    <strong>As a chef, you will be responsible for many computations done at the kitchen. 
    These may include:</strong>
  </p>
      </div>

      <div className="d-flex align-items-center justify-content-center">
  <ul style={{ fontSize: "30px", maxWidth: "1000px" }}>
    <li>Recipe yield</li>
    <li>Ratio for preparing stocks</li>
    <li>Calculating cost of a dish</li>
    <li>Budget of food and labor</li>
    <li>Counting portions</li>
  </ul>
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

export default MeasurementsAndConversion;