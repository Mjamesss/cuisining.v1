import { useState, useEffect } from "react";
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';

const Courses = () => {
    // State for course lock status (from backend)
    const [courseLockStatus, setCourseLockStatus] = useState({
        FundamentalsOfCookery: true, // Default first course is unlocked
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
        const fetchLockStatus = async () => {
            try {
                const token = getToken();
                if (!token) {
                    setLoading(false);
                    return;
                }
                
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_LINK || 'http://localhost:5000'}/api/course-stats`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('Lock status response:', response.data);
                setCourseLockStatus(response.data);
            } catch (err) {
                console.error('Lock status fetch error:', err);
                console.error('Response data:', err.response?.data);
                console.error('Status code:', err.response?.status);
                setError(err.response?.data?.error || err.message || 'Failed to fetch lock status');
            }
        };

        const fetchCompletionStatus = async () => {
            try {
                const token = getToken();
                if (!token) {
                    setLoading(false);
                    return;
                }
                
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_LINK || 'http://localhost:5000'}/api/course-completion`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('Completion status response:', response.data);
                setCourseCompletionStatus(response.data);
            } catch (err) {
                console.error('Completion status fetch error:', err);
                console.error('Response data:', err.response?.data);
                console.error('Status code:', err.response?.status);
                setError(err.response?.data?.error || err.message || 'Failed to fetch completion status');
            } finally {
                setLoading(false);
            }
        };

        fetchLockStatus();
        fetchCompletionStatus();
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

    // Course data for mapping
    const courseData = [
        {
            id: "FundamentalsOfCookery",
            title: "Fundamentals Of",
            titleHighlight: "Professional Cookery",
            description: "Gain essential kitchen knowledge and skills before hands-on food preparation.",
            image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1745046409/courses1_upv9d5.png"
        },
        {
            id: "PreparingAppetizers",
            title: "Preparing Appetizers and",
            titleHighlight: "Hors d'oeuvres",
            description: "Learn the skills to prepare and present appetizers and hors d'oeuvres. Preparing Cold Meals cluster.",
            image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1745046409/courses2_pjssfc.png"
        },
        {
            id: "PreparingEggVegetable",
            title: "Preparing Egg Vegetable and",
            titleHighlight: "Farinaceous Dishes",
            description: "Learn essential skills in egg cookery and basic procedures for preparing vegetables and starch dishes.",
            image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1745046409/courses3_zeohhg.png"
        },
        {
            id: "SaladAndSaladDressing",
            title: "Salad and Salad",
            titleHighlight: "Dressings",
            description: "Learn to prepare and present salads and dressings with confidence. Part of Cookery NC II: Preparing Cold Meals.",
            image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1745046412/courses4_vkm4ty.png"
        },
        {
            id: "PreparingSandwich",
            title: "Preparing",
            titleHighlight: "Sandwiches",
            description: "Master the skills to prepare and present salads and dressings. Part of the Cookery NC II: Preparing Cold Meals cluster.",
            image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1745046408/courses5_nebpvb.png"
        },
        {
            id: "FinalAssessment",
            title: "Final",
            titleHighlight: "Assessment",
            description: "Showcase your skills and knowledge through a complete assessment of everything you've learned.",
            image: "https://res.cloudinary.com/dm6wodni6/image/upload/v1745046408/courses6_bifmxk.png",
            requiresAllCourses: true
        }
    ];

    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                
                .course-card {
                    position: relative;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    overflow: hidden;
                    border-radius: 10px;
                }
                
                .course-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                
                .card-img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                }
                
                .card-content {
                    position: relative;
                    z-index: 2;
                }
                
                .lock-icon {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background-color: white;
                    border-radius: 50%;
                    padding: 8px;
                    z-index: 3;
                }
                
                .completed-icon {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    z-index: 3;
                }
                
                .course-title {
                    position: absolute;
                    bottom: 150px;
                    left: 30px;
                    font-size: 18px;
                    font-family: 'Nunito', sans-serif;
                    color: #000000;
                    font-weight: 800;
                }
                
                .course-description {
                    position: absolute;
                    bottom: 85px;
                    left: 30px;
                    width: 280px;
                    font-size: 14px;
                    color: #000000;
                    font-weight: 200;
                }
                
                .course-button {
                    position: absolute;
                    bottom: 10px;
                    left: 188px;
                    color: white;
                    width: 124px;
                    height: 40px;
                    font-size: 12px;
                    border-radius: 15px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    font-family: 'Nunito', sans-serif;
                }
                
                .info-banner {
                    position: absolute;
                    bottom: 20px;
                    left: 30px;
                    right: 30px;
                    background-color: rgba(248, 249, 250, 0.95);
                    padding: 12px;
                    border-radius: 10px;
                    border: 1px solid #E9ECEF;
                    font-size: 12px;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                @media screen and (max-width: 992px) {
                    .course-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 30px !important;
                        padding: 30px !important;
                    }
                    .header-container {
                        margin-left: 0 !important;
                        padding: 20px !important;
                    }
                }
                
                @media screen and (max-width: 576px) {
                    .course-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                        padding: 20px !important;
                    }
                    .header-container {
                        margin-left: 0 !important;
                        padding: 15px !important;
                    }
                }
                `}
            </style>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <div className="p-5 d-flex justify-content-center align-items-center flex-md-row flex-column-reverse header-container" style={{ marginTop: "30px", marginLeft: "135px" }}>
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
                
                <div className="course-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 340px)", gap: "25px", padding: "40px", maxWidth: "1200px", margin: "0 auto", marginTop: "-50px", marginBottom: "140px" }}>
                    {courseData.map((course) => {
                        const isLocked = !courseLockStatus[course.id];
                        const isCompleted = courseCompletionStatus[course.id];
                        const isFinalAssessment = course.id === "FinalAssessment";
                        const canAccessFinal = allCoursesCompleted && courseLockStatus.FinalAssessment;
                        const shouldShowInfoBanner = isFinalAssessment && !allCoursesCompleted && !isCompleted;
                        
                        return (
                            <a 
                                key={course.id}
                                href={(isLocked || (isFinalAssessment && !canAccessFinal)) ? "#" : course.id} 
                                style={{ position: "relative", opacity: isLocked ? "0.5" : "1" }}
                                className="course-card"
                            >
                                <img 
                                    src={course.image} 
                                    alt={course.id} 
                                    className="card-img"
                                />
                                
                                {isCompleted ? (
                                    <div className="completed-icon">
                                        <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1745369874/accept_saarly.png" width="50" height="50" alt="Completed" />
                                    </div>
                                ) : isLocked && (
                                    <div className="lock-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                    </div>
                                )}
                                
                                <div className="card-content">
                                    <h1 className="course-title">
                                        {course.title} <span style={{ color: "#C1B857" }}><br />{course.titleHighlight}</span>
                                    </h1>
                                    
                                    <p className="course-description">
                                        {course.description}
                                    </p>
                                    
                                    {shouldShowInfoBanner ? (
                                        <div className="info-banner">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                                                <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#C1B857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span style={{ fontFamily: "'Nunito', sans-serif", color: "#495057", fontWeight: "500" }}>Complete all courses to unlock</span>
                                        </div>
                                    ) : (isFinalAssessment && !isCompleted && allCoursesCompleted) || !isFinalAssessment ? (
                                        <button 
                                            className={`course-button cbtn cbtn-secondary font-weight-600 trans-y ${isLocked ? 'disabled' : ''}`}
                                            style={{
                                                backgroundColor: (!isLocked || (isFinalAssessment && canAccessFinal)) ? "" : "#cccccc",
                                                cursor: (!isLocked || (isFinalAssessment && canAccessFinal)) ? "pointer" : "not-allowed"
                                            }}
                                        >
                                            {isCompleted ? "COMPLETED" : (!isLocked || (isFinalAssessment && canAccessFinal)) ? "ENROLL NOW" : "LOCKED"}
                                        </button>
                                    ) : null}
                                </div>
                            </a>
                        );
                    })}
                </div>
                
                <Footer />
            </div>
        </>
    );
};

export default Courses;