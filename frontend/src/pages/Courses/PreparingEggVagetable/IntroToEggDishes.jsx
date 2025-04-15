import { useState, useEffect } from "react";
import "../../../fw-cuisining.css";
import CuisiningLogo from "../../../components/CuisiningLogo";
import Footer from "../../../components/Footer";
import "./Unit1Lesson1.css";
import "./IntroToEgg.css";

const IntroToEggDishes = () => {
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
        LESSON 1: Introduction to Egg Dishes
        </h1>
      </div>

      <div className="p3 d-flex justify-content-center">
      <iframe width="100%" height="515" src="https://www.youtube.com/embed/1HlfVQoN-yM?si=5zq-_bnEgaCKT4es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <p className="p3 d-flex justify-content-center" style={{ fontSize: "30px", maxWidth: "1000px" }}>
        Eggs are one of the most versatile ingredients in the kitchen. These can be prepared and cooked in many ways. The most commonly used eggs are chicken eggs because of its blandness, availability and variety of sizes. Additionally, eggs contain a large amount of protein which coagulates when heated. Eggs are ideally cooked slowly and with moderate heat. Eggs have multiple culinary functions:
        </p>
      </div>

      <div className="d-flex align-items-center justify-content-center">
  <ul style={{ fontSize: "30px", maxWidth: "1000px" }}>
    <li>Aerating  for sponges, cakes, meringue;</li>
    <li>Clarifying  for consommé;</li>
    <li>Emulsifying for mayonnaise, hollandaise;</li>
    <li>Thickening  for crème anglaise;</li>
    <li>Binding  for patties;</li>
    <li>Glazing – for egg wash;</li>
    <li>Enriching – as a liaison;</li>
    <li>Setting – for crème Brulee;</li>
    <li>Coating – for paner a l’anglaise ;</li>
    <li>Garnishing – for nicoise and Caesar salads;</li>
    <li>Egg dishes – such as an omelet, eggs benedict</li>
    <li>Sous vide – various </li>
    <li>Other – shakes and smoothies, eggnog, egg-milk punch</li>
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

export default IntroToEggDishes;
