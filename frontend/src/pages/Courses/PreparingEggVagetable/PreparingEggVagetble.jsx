import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';

const Breadcrumb = () => {
  return (
      <nav aria-label="breadcrumb" className="px-3 px-md-5" style={{ marginLeft: "6px", marginBottom: "10px", marginTop: "-35px", fontSize: "15px",     }}>
          <ol className="breadcrumb" style={{ backgroundColor: "transparent", margin: 65, padding: 0,  }}>
              <li className="breadcrumb-item"><a href="/Courses" style={{ color: "black", textDecoration: "none",  }}>Courses</a></li>
              <span style={{ margin: "0 10px" }}>&gt;</span>
              <li className="breadcrumb-item active" aria-current="page" style={{ color: "black", fontWeight: "bold", fontWeight: "750"  }}>Preparing Egg Vegetable and Farinaceous Dishes</li>
          </ol>
      </nav>
  );
};

const PreparingEggVegetable = () => {
  // Define the JSON object for lesson lock status
  // true means unlocked, false means locked
  const lessonLockStatus = {
    EggDishesIntro: true, // First lesson always unlocked
    CookingEggDishes: false,
    VegetablesIntro: false,
    PreparingVegetables: false,
    CookingVegetables: false,
    FarinaceousIntro: false,
    PotatoDishes: false,
    RiceDishes: false,
    PastaDishes: false
  };

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>

      <Navbar />
      <Breadcrumb />
      <div style={{ width: "100%", margin: "0", padding: "0px 0" }}>
        <div style={{ width: "100%", marginBottom: "200px" }}>

          {/* FIRST SECTION */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", marginTop: "-15px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 30px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "center", color: "#000000" }}>
                PREPARING EGG, VEGETABLE, AND <span style={{color: "#C1B857"}}>FARINACEOUS DISHES</span></h1>
            <p className="" 
                       style={{ marginLeft: "5%", marginBottom: "50px", marginTop:"1%", fontSize:"18px", maxWidth:"87%", lineHeight: "1.6", textAlign: "center",}}>
                             In this course, we will present to you the knowledge and skills that you must have in order to perform the 
                             basic techniques of egg cookery. This courses will also present to you the basic procedures for preparing vegetables and starch dishes.
            </p>

            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left", }}>
                UNIT 1: Preparing Egg Dishes</h1>
              
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.EggDishesIntro ? "IntroToEggDishes" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.EggDishesIntro ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032482/crse1_wfrift.png"
                  width="100%" height="auto" alt="EggDishesIntro" />
                {!lessonLockStatus.EggDishesIntro && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Introduction to <br></br>Egg Dishes</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.EggDishesIntro ? "" : "#cccccc",
                  cursor: lessonLockStatus.EggDishesIntro ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.EggDishesIntro ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.CookingEggDishes ? "CookingEggDishes" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.CookingEggDishes ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032482/crse2_atc3t9.png"
                  width="100%" height="auto" alt="CookingEggDishes" />
                {!lessonLockStatus.CookingEggDishes && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "90px", left: "50%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Cooking <br></br>Egg Dishes</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "68px", left: "50%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.CookingEggDishes ? "" : "#cccccc",
                  cursor: lessonLockStatus.CookingEggDishes ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.CookingEggDishes ? "LESSON 2" : "LOCKED"}
                </button>
              </a>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div style={{ maxWidth: "1200px", margin: "70px auto 0 auto", padding: "0 40px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left"
            }}>
              UNIT 2: Preparing Vegetable Dishes</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.VegetablesIntro ? "VegetablesIntro" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.VegetablesIntro ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032481/crse3_fpgmga.png"
                  width="100%" height="auto" alt="VegetablesIntro" />
                {!lessonLockStatus.VegetablesIntro && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Introduction to <br></br>Vegetables</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.VegetablesIntro ? "" : "#cccccc",
                  cursor: lessonLockStatus.VegetablesIntro ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.VegetablesIntro ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.PreparingVegetables ? "PreparingVegetables" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PreparingVegetables ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032483/crse4_qkyqji.png"
                  width="100%" height="auto" alt="PreparingVegetables" />
                {!lessonLockStatus.PreparingVegetables && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Preparing Vegetables for Cooking</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.PreparingVegetables ? "" : "#cccccc",
                  cursor: lessonLockStatus.PreparingVegetables ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.PreparingVegetables ? "LESSON 2" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.CookingVegetables ? "CookingVegetables" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.CookingVegetables ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032482/crse5_baifi1.png"
                  width="100%" height="auto" alt="CookingVegetables" />
                {!lessonLockStatus.CookingVegetables && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Cooking and Plating Vegetables</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.CookingVegetables ? "" : "#cccccc",
                  cursor: lessonLockStatus.CookingVegetables ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.CookingVegetables ? "LESSON 3" : "LOCKED"}
                </button>
              </a>
            </div>
          </div>

          {/* THIRD SECTION */}
          <div style={{ maxWidth: "1200px", margin: "70px auto 0 auto", padding: "0 40px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 50px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left"
            }}>
              UNIT 3: Preparing Farinaceous Dishes</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 340px))", justifyContent: "left",
                       gap: "30px", fontWeight: "920"}}>

              <a href={lessonLockStatus.FarinaceousIntro ? "FarinaceousIntro" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.FarinaceousIntro ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032482/crse6_i5vxe3.png"
                  width="100%" height="auto" alt="FarinaceousIntro" />
                {!lessonLockStatus.FarinaceousIntro && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Introduction to Farinaceous Products </h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.FarinaceousIntro ? "" : "#cccccc",
                  cursor: lessonLockStatus.FarinaceousIntro ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.FarinaceousIntro ? "LESSON 1" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.PotatoDishes ? "PotatoDishes" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PotatoDishes ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032486/crse7_tfsatz.png"
                  width="100%" height="auto" alt="PotatoDishes" />
                {!lessonLockStatus.PotatoDishes && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Preparing <br></br>Potato Dishes</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.PotatoDishes ? "" : "#cccccc",
                  cursor: lessonLockStatus.PotatoDishes ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.PotatoDishes ? "LESSON 2" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.RiceDishes ? "RiceDishes" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.RiceDishes ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032480/crse8_gqhqry.png"
                  width="100%" height="auto" alt="RiceDishes" />
                {!lessonLockStatus.RiceDishes && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Preparing <br></br>Rice Dishes</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.RiceDishes ? "" : "#cccccc",
                  cursor: lessonLockStatus.RiceDishes ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.RiceDishes ? "LESSON 3" : "LOCKED"}
                </button>
              </a>

              <a href={lessonLockStatus.PastaDishes ? "PastaDishes" : "#"} style={{ position: "relative", display: "block", opacity: lessonLockStatus.PastaDishes ? "1" : "0.5" }}>
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745032479/crse9_q431fj.png"
                  width="100%" height="auto" alt="PastaDishes" />
                {!lessonLockStatus.PastaDishes && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <h1 className="font-weight-800" style={{
                  position: "absolute", bottom: "95px", left: "48%", fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif", color: "#000000"
                }}>Preparing <br></br>Pasta Dishes</h1>
                <p style={{
                  width: "280px", position: "absolute", bottom: "70px", left: "48%",
                  fontSize: "11px", color: "#fff", fontWeight: "50"
                }}>
                  "Master Your Culinary Skills!
                </p>
                <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{
                  position: "absolute", bottom: "5px", left: "188px", color: "white",
                  width: "120px", height: "39px", fontSize: "12px", borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif",
                  backgroundColor: lessonLockStatus.PastaDishes ? "" : "#cccccc",
                  cursor: lessonLockStatus.PastaDishes ? "pointer" : "not-allowed"
                }}>
                  {lessonLockStatus.PastaDishes ? "LESSON 4" : "LOCKED"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreparingEggVegetable;