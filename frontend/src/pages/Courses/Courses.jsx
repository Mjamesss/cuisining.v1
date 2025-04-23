import { useState, useEffect } from "react";
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';

const Courses = () => {
    // State for course lock status (from backend)
    const [courseLockStatus, setCourseLockStatus] = useState({
        FundamentalsOfCookery: false,
        PreparingAppetizers: false,
        PreparingEggVegetable: false,
        SaladAndSaladDressing: false,
        PreparingSandwich: false,
        FinalAssessment: false,
    });

    // State for course completion status
    const [courseCompletionStatus, setCourseCompletionStatus] = useState({
        FundamentalsOfCookery: false,
        PreparingAppetizers: false,
        PreparingEggVegetable: false,
        SaladAndSaladDressing: false,
        PreparingSandwich: false,
        FinalAssessment: false,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
        // Get token from localStorage
        const getToken = () => {
            return localStorage.getItem('authToken');
        };

    // Fetch course status from backend
    useEffect(() => {
        const fetchCourseStatus = async () => {
            try {
                const token = getToken();
                if (!token) return;
                // Fetch lock status
                const lockStatusResponse = await axios.get('http://localhost:5000/api/course-stats', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                setCourseLockStatus(lockStatusResponse.data);

                // If you have completion status endpoint, fetch it here
                // const completionResponse = await axios.get('/api/course-completion', {...});
                // setCourseCompletionStatus(completionResponse.data);

            } catch (err) {
                setError(err.response?.data?.message || err.message || 'Failed to fetch course status');
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseStatus();
    }, []);

    // Check if all courses except FinalAssessment are completed
    const allCoursesCompleted = 
        courseCompletionStatus.FundamentalsOfCookery &&
        courseCompletionStatus.PreparingAppetizers &&
        courseCompletionStatus.PreparingEggVegetable &&
        courseCompletionStatus.SaladAndSaladDressing &&
        courseCompletionStatus.PreparingSandwich;

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    if (error) return (
        <div className="alert alert-danger m-4">
            Error: {error}
        </div>
    );
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <div className="p-5 d-flex justify-content-center align-items-center flex-md-row flex-column-reverse" style={{ marginTop: "30px", marginLeft: "135px" }}>
                    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 10px" }}>
                        <h1 style={{
                            fontSize: "26px", fontWeight: "800", margin: "0 0 20px 0",
                            fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "left"
                        }}>
                            Courses
                        </h1>
                        <p className="" style={{ marginRight: "6%", marginBottom: "10px", marginTop: "1%", fontSize: "18px", maxWidth: "87%", lineHeight: "1.6", textAlign: "left" }}>
                            Our courses are designed to equip you with the essential skills and knowledge needed to excel in the kitchen. From mastering
                            basic food preparation techniques to exploring advanced cooking methods, each course provides interactive training and practical
                            insights. Whether you're a beginner or looking to enhance your culinary expertise, our programs will help you build confidence
                            and proficiency in various cooking techniques.
                        </p>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 340px)", fontWeight: "920", gap: "25px", padding: "40px", maxWidth: "1200px", margin: "0 auto", marginTop: "-50px", marginBottom: "140px" }}>
                    {/* FundamentalsOfCookery - always unlocked */}
                    <a href="FundamentalsOfCookery" style={{ position: "relative", opacity: courseLockStatus.FundamentalsOfCookery ? "1" : "0.5" }}>
                        <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046409/courses1_upv9d5.png" width="100%" height="auto" alt="FundamentalsOfCookery" />
                        {courseCompletionStatus.FundamentalsOfCookery && (
                            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="50" height="50" alt="Completed" />
                            </div>
                        )}
                        <h1 className="font-weight-800" style={{ position: "absolute", bottom: "150px", left: "30px", fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                            Fundamentals Of <span style={{ color: "#C1B857" }}><br></br>Professional Cookery</span>
                        </h1>
                        <p style={{ width: "280px", position: "absolute", bottom: "95px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                            Gain essential kitchen knowledge and skills before hands-on food preparation.
                        </p>
                        <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif", backgroundColor: courseLockStatus.FundamentalsOfCookery ? "" : "#cccccc" }}>
                            {courseCompletionStatus.FundamentalsOfCookery ? "COMPLETED" : "ENROLL NOW"}
                        </button>
                    </a>

                    {/* PreparingAppetizers */}
                    <a href={courseLockStatus.PreparingAppetizers ? "PreparingAppetizers" : "#"} style={{ position: "relative", opacity: courseLockStatus.PreparingAppetizers ? "1" : "0.5" }}>
                        <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046409/courses2_pjssfc.png" width="100%" height="auto" alt="PreparingAppetizers" />
                        {courseCompletionStatus.PreparingAppetizers ? (
                            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="50" height="50" alt="Completed" />
                            </div>
                        ) : !courseLockStatus.PreparingAppetizers && (
                            <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                        )}
                        <h1 className="font-weight-800" style={{ position: "absolute", bottom: "150px", left: "30px", fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                            Preparing Appetizers and <span style={{ color: "#C1B857" }}><br></br>Hors d'oeuvres</span>
                        </h1>
                        <p style={{ width: "280px", position: "absolute", bottom: "74px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                            Learn the skills to prepare and present appetizers and hors d'oeuvres. Preparing Cold Meals cluster.
                        </p>
                        <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif", backgroundColor: courseLockStatus.PreparingAppetizers ? "" : "#cccccc", cursor: courseLockStatus.PreparingAppetizers ? "pointer" : "not-allowed" }}>
                            {courseCompletionStatus.PreparingAppetizers ? "COMPLETED" : courseLockStatus.PreparingAppetizers ? "ENROLL NOW" : "LOCKED"}
                        </button>
                    </a>

                    {/* PreparingEggVegetable */}
                    <a href={courseLockStatus.PreparingEggVegetable ? "PreparingEggVagetable" : "#"} style={{ position: "relative", opacity: courseLockStatus.PreparingEggVegetable ? "1" : "0.5" }}>
                        <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046409/courses3_zeohhg.png" width="100%" height="auto" alt="PreparingEggVegetable" />
                        {courseCompletionStatus.PreparingEggVegetable ? (
                            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="50" height="50" alt="Completed" />
                            </div>
                        ) : !courseLockStatus.PreparingEggVegetable && (
                            <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                        )}
                        <h1 className="font-weight-800" style={{ position: "absolute", bottom: "150px", left: "30px", fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                            Preparing Egg Vegetable and <span style={{ color: "#C1B857" }}><br></br>Farinaceous Dishes</span>
                        </h1>
                        <p style={{ width: "280px", position: "absolute", bottom: "74px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                            Learn essential skills in egg cookery and basic procedures for preparing vegetables and starch dishes.
                        </p>
                        <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif", backgroundColor: courseLockStatus.PreparingEggVegetable ? "" : "#cccccc", cursor: courseLockStatus.PreparingEggVegetable ? "pointer" : "not-allowed" }}>
                            {courseCompletionStatus.PreparingEggVegetable ? "COMPLETED" : courseLockStatus.PreparingEggVegetable ? "ENROLL NOW" : "LOCKED"}
                        </button>
                    </a>

                    {/* SaladAndSaladDressing */}
                    <a href={courseLockStatus.SaladAndSaladDressing ? "SaladAndSaladDressing" : "#"} style={{ position: "relative", opacity: courseLockStatus.SaladAndSaladDressing ? "1" : "0.5" }}>
                        <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046412/courses4_vkm4ty.png" width="100%" height="auto" alt="SaladAndSaladDressing" />
                        {courseCompletionStatus.SaladAndSaladDressing ? (
                            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="50" height="50" alt="Completed" />
                            </div>
                        ) : !courseLockStatus.SaladAndSaladDressing && (
                            <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                        )}
                        <h1 className="font-weight-800" style={{ position: "absolute", bottom: "165px", left: "30px", fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                            Salad and Salad <span style={{ color: "#C1B857" }}>Dressings</span>
                        </h1>
                        <p style={{ width: "280px", position: "absolute", bottom: "85px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                            Learn to prepare and present salads and dressings with confidence. Part of Cookery NC II: Preparing Cold Meals.
                        </p>
                        <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif", backgroundColor: courseLockStatus.SaladAndSaladDressing ? "" : "#cccccc", cursor: courseLockStatus.SaladAndSaladDressing ? "pointer" : "not-allowed" }}>
                            {courseCompletionStatus.SaladAndSaladDressing ? "COMPLETED" : courseLockStatus.SaladAndSaladDressing ? "ENROLL NOW" : "LOCKED"}
                        </button>
                    </a>

                    {/* PreparingSandwich */}
                    <a href={courseLockStatus.PreparingSandwich ? "PreparingSandwich" : "#"} style={{ position: "relative", opacity: courseLockStatus.PreparingSandwich ? "1" : "0.5" }}>
                        <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046408/courses5_nebpvb.png" width="100%" height="auto" alt="PreparingSandwich" />
                        {courseCompletionStatus.PreparingSandwich ? (
                            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="50" height="50" alt="Completed" />
                            </div>
                        ) : !courseLockStatus.PreparingSandwich && (
                            <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                        )}
                        <h1 className="font-weight-800" style={{ position: "absolute", bottom: "170px", left: "30px", fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                            Preparing <span style={{ color: "#C1B857" }}>Sandwiches</span>
                        </h1>
                        <p style={{ width: "280px", position: "absolute", bottom: "90px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                            Master the skills to prepare and present salads and dressings. Part of the Cookery NC II: Preparing Cold Meals cluster.
                        </p>
                        <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ position: "absolute", bottom: "10px", left: "188px", color: "white", width: "124px", height: "40px", fontSize: "12px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Nunito', sans-serif", backgroundColor: courseLockStatus.PreparingSandwich ? "" : "#cccccc", cursor: courseLockStatus.PreparingSandwich ? "pointer" : "not-allowed" }}>
                            {courseCompletionStatus.PreparingSandwich ? "COMPLETED" : courseLockStatus.PreparingSandwich ? "ENROLL NOW" : "LOCKED"}
                        </button>
                    </a>

                    {/* FinalAssessment */}
                    <a href={allCoursesCompleted && courseLockStatus.FinalAssessment ? "FinalAssessment" : "#"} style={{ position: "relative", opacity: courseLockStatus.FinalAssessment ? "1" : "0.5" }}>
                        <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745046408/courses6_bifmxk.png" width="100%" height="auto" alt="FinalAssessment" />
                        {courseCompletionStatus.FinalAssessment ? (
                            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="50" height="50" alt="Completed" />
                            </div>
                        ) : !courseLockStatus.FinalAssessment && (
                            <div style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                        )}
                        <h1 className="font-weight-800" style={{ position: "absolute", bottom: "170px", left: "30px", fontSize: "18px", fontFamily: "'Nunito', sans-serif", color: "#000000" }}>
                            Final <span style={{ color: "#C1B857" }}> Assessment</span>
                        </h1>
                        <p style={{ width: "280px", position: "absolute", bottom: "90px", left: "30px", fontSize: "14px", color: "#000000", fontWeight: "200" }}>
                            Showcase your skills and knowledge through a complete assessment of everything you've learned.
                        </p>
                        
                        {/* Hint message only - no LOCKED button */}
                        {!allCoursesCompleted && !courseCompletionStatus.FinalAssessment && (
                            <div style={{ 
                                position: "absolute", 
                                bottom: "20px", 
                                left: "30px", 
                                right: "30px",
                                backgroundColor: "rgba(248, 249, 250, 0.95)", 
                                padding: "12px", 
                                borderRadius: "10px",
                                border: "1px solid #E9ECEF",
                                fontSize: "12px",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#C1B857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span style={{ fontFamily: "'Nunito', sans-serif", color: "#495057", fontWeight: "500" }}>Complete all courses to unlock</span>
                            </div>
                        )}
                        
                        {/* If assessment is completed or all courses are completed, show the button */}
                        {(courseCompletionStatus.FinalAssessment || allCoursesCompleted) && (
                            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ 
                                position: "absolute", 
                                bottom: "10px", 
                                left: "188px", 
                                width: "124px", 
                                height: "40px", 
                                fontSize: "12px", 
                                borderRadius: "15px", 
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                fontFamily: "'Nunito', sans-serif", 
                                backgroundColor: courseLockStatus.FinalAssessment ? "" : "#E9ECEF", 
                                cursor: courseLockStatus.FinalAssessment ? "pointer" : "not-allowed",
                                color: "white"
                            }}>
                                {courseCompletionStatus.FinalAssessment ? "COMPLETED" : "ENROLL NOW"}
                            </button>
                        )}
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
                <Footer />
            </div>
        </>
    );
};

export default Courses;