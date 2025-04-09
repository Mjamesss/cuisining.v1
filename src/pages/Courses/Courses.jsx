import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Courses = () => {
    return(
       <>
    
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
     
            <Navbar/>
            
            <div className="p-5 d-flex justify-content-center align-items-center flex-md-row flex-column-reverse" 
                 style={{ marginTop:"30px", marginLeft:"135px"}}>
                <div className="px-4"> 
                    <h1 className="font-weight-800" 
                        style={{ fontSize:"28px", fontFamily:"'Nunito', sans-serif", 
                        marginBottom: "30px", color: "#000000" }}>
                        Courses
                    </h1>
                    
                    <p className="" 
                       style={{ marginTop:"-15px", fontSize:"18px", maxWidth:"87%", lineHeight: "1.6"}}>
                       Our courses are designed to equip you with the essential skills and knowledge needed to excel in the kitchen. From mastering 
                       basic food preparation techniques to exploring advanced cooking methods, each course provides interactive training and practical 
                       insights. Whether you're a beginner or looking to enhance your culinary expertise, our programs will help you build confidence 
                       and proficiency <br></br>in various cooking techniques.
                    </p>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 350px)", fontWeight: "920", gap: "25px", padding: "40px",
                maxWidth: "1200px", margin: "0 auto", marginTop: "-50px", marginBottom: "120px"}}>

                <a href="FundamentalsOfCookery" style={{ position: "relative", display: "block" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742371467/courses1_htahkv.png" 
                        width="100%" height="auto" />
                    <h1 className="font-weight-800" 
                        style={{ position: "absolute", bottom: "150px", left: "30px", fontSize: "18px", 
                        fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                        Fundamentals Of <span style={{color: "#C1B857"}}><br></br>Professional Cookery</span>
                    </h1>
                    <p style={{ width: "280px", position: "absolute", bottom: "95px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                        Gain essential kitchen knowledge and skills before hands on food preparation.
                    </p>
                     
                    <button className="cbtn cbtn-secondary font-weight-600 trans-y" 
                        style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", 
                        fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", }}>
                        ENROLL NOW
                    </button>
                </a>

                <a href="PreparingAppetizers" style={{ position: "relative", display: "block" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742372221/courses2_fvmhzu.png" 
                        width="100%" height="auto" />
                    <h1 className="font-weight-800" 
                        style={{ position: "absolute", bottom: "150px", left: "30px", fontSize: "18px", 
                        fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                        Preparing Appetizers and <span style={{color: "#C1B857"}}><br></br>Hors d'oeuvers</span>
                    </h1>
                    <p style={{ width: "280px", position: "absolute", bottom: "74px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                        Learn the skills to prepare and present appetizers and hors d'oeuvres. Preparing Cold Meals cluster.
                    </p>
                     
                    <button className="cbtn cbtn-secondary font-weight-600 trans-y" 
                        style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", 
                        fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", }}>
                        ENROLL NOW
                    </button>
                </a>

                <a href="PreparingEggVagetable" style={{ position: "relative", display: "block" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742372222/courses3_gml5ff.png" 
                        width="100%" height="auto" />
                    <h1 className="font-weight-800" 
                        style={{ position: "absolute", bottom: "150px", left: "30px", fontSize: "18px", 
                        fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                        Preparing Egg Vegetable and <span style={{color: "#C1B857"}}><br></br>Farinaceous Dishes</span>
                    </h1>
                    <p style={{ width: "280px", position: "absolute", bottom: "74px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                        Learn essential skills in egg cookery and basic procedures for preparing vegetables and starch dishes.
                    </p>
                     
                    <button className="cbtn cbtn-secondary font-weight-600 trans-y" 
                        style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", 
                        fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", }}>
                        ENROLL NOW
                    </button>
                </a>

                <a href="SaladAndSaladDressing" style={{ position: "relative", display: "block" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742373582/courses4_ym6jsf.png" 
                        width="100%" height="auto" />
                    <h1 className="font-weight-800" 
                        style={{ position: "absolute", bottom: "150px", left: "30px", fontSize: "18px", 
                        fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                        Salad and Salad <span style={{color: "#C1B857"}}><br></br> Dressings</span>
                    </h1>
                    <p style={{ width: "280px", position: "absolute", bottom: "74px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                        Learn to prepare and present salads and dressings with confidence. Part of Cookery NC II: Preparing Cold Meals.
                    </p>
                     
                    <button className="cbtn cbtn-secondary font-weight-600 trans-y" 
                        style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", 
                        fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", }}>
                        ENROLL NOW
                    </button>
                </a>

                <a href="PreparingSandwich" style={{ position: "relative", display: "block" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742372213/courses5_khbcnd.png" 
                        width="100%" height="auto" />
                    <h1 className="font-weight-800" 
                        style={{ position: "absolute", bottom: "170px", left: "30px", fontSize: "18px", 
                        fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                        Preparing <span style={{color: "#C1B857"}}>Sandwiches</span>
                    </h1>
                    <p style={{ width: "280px", position: "absolute", bottom: "90px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                        Master the skills to prepare and present salads and dressings. Part of the Cookery NC II: Preparing Cold Meals cluster.
                    </p>
                     
                    <button className="cbtn cbtn-secondary font-weight-600 trans-y" 
                        style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", 
                        fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", }}>
                        ENROLL NOW
                    </button>
                </a>

                <a href="FinalAssessment" style={{ position: "relative", display: "block" }}>
                    <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1742372213/courses6_vi2q83.png" 
                        width="100%" height="auto" />
                    <h1 className="font-weight-800" 
                        style={{ position: "absolute", bottom: "170px", left: "30px", fontSize: "18px", 
                        fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                        Final <span style={{color: "#C1B857"}}> Assessment</span>
                    </h1>
                    <p style={{ width: "280px", position: "absolute", bottom: "90px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                        Showcase your skills and knowledge through a complete assessment of everything you've learned.
                    </p>
                     
                    <button className="cbtn cbtn-secondary font-weight-600 trans-y" 
                        style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", 
                        fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily:"'Nunito', sans-serif", }}>
                        ENROLL NOW
                    </button>
                </a>
            </div>

            {/* Responsive Styles */}
<style>
                {`
                    @media screen and (max-width: 992px) {
                        div[style*="display: grid"] {
                            grid-template-columns: repeat(2, 1fr) !important;
                            gap: 30px !important;
                            padding: 30px !important;
                        }
                        .p-5.d-flex {
                            margin-left: 0 !important;
                            padding: 20px !important;
                        }
                    }
                    @media screen and (max-width: 576px) {
                        div[style*="display: grid"] {
                            grid-template-columns: 1fr !important;
                            gap: 20px !important;
                            padding: 20px !important;
                        }
                        .p-5.d-flex {
                            margin-left: 0 !important;
                            padding: 15px !important;
                        }
                    }
                `}
            </style>

            <Footer/>
       </>
    )
}

export default Courses;