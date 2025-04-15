import { useState, useEffect } from "react";
import "../../../fw-cuisining.css";
import CuisiningLogo from "../../../components/CuisiningLogo";
import Footer from "../../../components/Footer";

const KitchenDepartment = () =>{
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [shuffledQuizData, setShuffledQuizData] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
    const quizData = [
      {
        question: "A Person Oversees all the production in the Kitchen including quality,hiring,managing, controlling cost, meeting quotas, and coordinating departments.?",
        options: ["Sous Chef", "Butcher Chef", "Pastry Chef", "Executive Chef"],
        answer: "Execution Chef",
      },
      {
        question: "They are in charge of the butcher shop. They Preapre meats, fish and poultry?",
        options: ["Chef Gardmanagers", "Sous Chef", "Butcher Chef", "Sauciers"],
        answer: "Butcher Chef",
      },
      {
        question: "Also known as Grill cooks or Chef Grillardin. They fall under the Routtieseur?",
        options: ["Savory Cook", "Chef De Parties", "Banquet Chefs", "Chef Tournants"],
        answer: "Savory Cook",
      },
      {
        question:"They act as trainees helping out in day-to-day operations?",
        options: ["Apprentices", "Entremetier", "Pastry Chef", "Poissonier"],
        answer: "Apprentices",
      },
      {
        question: "They are responsible in preparing all sauces-related dishes?",
        options: ["Pastry Chef", "Sauciers", "Sous Chef", "Executive Chef"],
        answer: "Sauciers",
      },
      {
        question: "What is recommended time to arrive at work as a Kitchen Staff?",
        options: ["On time", "Late", "Early", "Anytime"],
        answer: "Early",
      },
      {
        question: "What does FIFO stand for Kitchen Practices?",
        options: ["First In, Fast Out", "First In, First Out", "Food In, Food Out", "Fresh Ingredients, Fresh Out"],
        answer: "First In, First Out",
      },
      {
        question: "Why is it Important to taste everything in your station?",
        options: ["To Satisfy Curosity", "To ensure quality and consistency", "To impress co-workers", "To waste Time"],
        answer: "To ensure quality and consistency",
      },
      {
        question: "What should you do if you are sick before your shift?",
        options: ["Go to work and hide it", "Tell the chef beforehand", "Ignore it", "Ask a co-worker to cover for you without telling anyone"],
        answer: "Tell the chef beforehand",
      },
      {
        question: "What should you avoid when handling products in the Kitchen?",
        options: ["Over-preparation leading to waste", "Preapring fresh products daily", "Measuring time with mise en place", "Helping co-workers in need"],
        answer: "Over-preparation leading to waste",
      },
    ];
  
    // Function to shuffle questions using Fisher-Yates algorithm
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
  
    return(
     <>
      <CuisiningLogo />
      <div className="p2 d-flex justify-content-center">
     {/* <div className="p5 ">
       <a href="FundamentalsOfCookery"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div> */}
        <h1 className="p2 d-grid align-items-center justify-content-center" style={{ fontSize: "40px" }}>
          UNIT 1 LESSON 1 AND 2: KITCHEN DEPARTMENT AND KITCHEN STAFF
        </h1>
      </div>

      <div className="p3 d-flex justify-content-center">
      <iframe width="100%" height="515" src="https://www.youtube.com/embed/55FNElP8UYU?si=q490sA5PSSIiTR8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="d-flex align-items-center justify-content-center">
  <p className="p3 d-grid justify-content-center" style={{ fontSize: "30px", maxWidth: "1000px" }}>
    It is very important for any kitchen staff to first and foremost, understand the workplace. As a kitchen staff, you should be familiar with the organizational structure of the kitchen or the kitchen hierarchy so that you will know who’s in charge and who to report to.
    <br /><br />
    As a kitchen staff, it is your responsibility to complete the task that is being assigned to you. One of your primary duties is to always keep the kitchen clean. Every kitchen maintains a hygiene and sanitation standard to ensure the health and safety of the employees and customers.
    <br /><br />
    <strong>Required knowledge and skills of a kitchen staff:</strong>
  </p>
</div>

<div className="d-flex align-items-center justify-content-center">
  <ul style={{ fontSize: "30px", maxWidth: "1000px" }}>
    <li>Knowledge on kitchen hygiene and sanitation</li>
    <li>Basic kitchen equipment knowledge</li>
    <li>Basic knife techniques</li>
    <li>Ability to read accurate measurements</li>
    <li>Ability to carefully follow directions</li>
    <li>Ability to lift items on a daily basis</li>
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


      <Footer/>
     </>
    )
}

export default KitchenDepartment;