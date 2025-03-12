import {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
//import "./Homepage.css"

const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Only run this effect once when component mounts
        const hasVisited = sessionStorage.getItem('hasVisited');
        
        if (!hasVisited) {
            setIsModalOpen(true);
            sessionStorage.setItem('hasVisited', 'true');
        }

        // No cleanup function needed
    }, []); // Empty dependency array means it only runs once on mount

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
          <Navbar />
                        
            {/* Import font styles */}
             <style>
              @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
               </style>

              {/* Responsive styles - completely separated */}
               <style>
                        {`
                            /* Large screens */
                            @media (max-width: 1200px) {
                            .header-image {
                                width: 450px !important;
                            }
                            }
                            
                            /* Medium screens */
                            @media (max-width: 992px) {
                            .header-content {
                                max-width: 100% !important;
                            }
                            .header-image {
                                position: static !important;
                                transform: none !important;
                                margin-top: 30px !important;
                                width: 100% !important;
                                text-align: center !important;
                            }
                            .header-image img {
                                width: 400px !important;
                            }
                            }
                            
                            /* Small screens */
                            @media (max-width: 576px) {
                            .header-image img {
                                width: 100% !important;
                            }
                            }
                        `}
                        </style>

            {/* Header section - with position relative to contain the absolute image */}
            <div 
            className="header-section position-relative" 
            style={{ 
                padding: "20px", 
                backgroundColor: "#F0F4F8",
                maxWidth: "1200px", 
                margin: "80px auto 0 70px",
                minHeight: "400px" // Added to ensure space for the text even with absolute image
            }}
            >
            {/* Text content */}
            <div className="header-content" style={{ maxWidth: "65%", marginTop: "10px" }}>
                <h1 
                className="font-weight-bold" 
                style={{ 
                    fontSize: "72px", 
                    fontFamily: "'Nunito', sans-serif", 
                    fontWeight: "800",
                    marginBottom: "15px",
                    lineHeight: "1.1",
                    position: "relative",
                    zIndex: "3" // Higher than both images to ensure text stays on top
                }}
                >
                <span style={{ color: "#000000" }}>
                    Learn, <br/>
                    Play, and Master the <br/>
                    Art of Culinary <br/>
                </span>
                <span style={{ color: "#C1B857" }}>Excellence.</span>
                </h1>
                <p 
                style={{ 
                    fontSize: "14px", 
                    color: "#000000", 
                    lineHeight: "1.6",
                    position: "relative",
                    zIndex: "3" // Higher than both images
                }}
                >
                Welcome to CuiSining. Take the next step in your culinary journey! Master essential <br/>
                cooking skills and earn your NCII certification with confidence.
                </p>
            </div>
            
            {/* Second image - positioned underneath */}
                {/* Second image - positioned underneath */}
                <div 
                    className="overlay-image" 
                    style={{ 
                    position: "absolute",
                    right: "-370px",
                    top: "17px",
                    overflow: "hidden",
                    zIndex: "1",
                    pointerEvents: "none"  // Add this line
                    }}
                >
                    <img 
                    src="3dpans.png"
                    alt="Overlay Image" 
                    style={{ 
                        width: "1150px",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px"
                    }} 
                    />
                </div>

                {/* First image - positioned on top */}
                <div 
                    className="header-image" 
                    style={{ 
                    position: "absolute",
                    right: "-190px",
                    top: "220px",
                    transform: "translateY(-50%)",
                    overflow: "hidden",
                    zIndex: "2",
                    pointerEvents: "none"  // Add this line
                    }}
                >
                    <img 
                    src="pointingchef.png" 
                    alt="Culinary Excellence" 
                    style={{ 
                        width: "600px", 
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px"
                    }} 
                    />
                </div>
                </div>

                <div className="d-flex justify-content-center pb-5" style={{height:"80px"}}>
                    <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ marginRight: "76%", color:"white", width:"12%", height:"70px", fontSize:"18px", marginTop: "40px", borderRadius: "30px"}}>Enroll now</button>
                </div>

                <div className="p-5 d-flex justify-content-center align-items-center flex-md-row flex-column-reverse" style={{minHeight:"520px", marginTop:"90px"}}>
                    <div className="px-4 me-md-5"> 
                        <h1 className="font-weight-800" style={{ fontSize:"38px", fontFamily:"'Nunito', sans-serif", marginBottom: "30px",
                            color: "#000000" }}>About <span style={{color: "#C1B857"}}>CuiSining</span></h1>
                        <p className="" style={{ fontSize:"18px", maxWidth:"700px", lineHeight: "1.6",
                        }}>
                        CuiSining is a web-based 3D simulation game designed to assess the 
                        user's cooking knowledge and experience. Through interactive 
                        training, the game provides a set of instructions to guide 
                        players, helping them better understand cooking techniques and processes. 
                        Its primary goal is to evaluate the user's current skills and knowledge, 
                        while also offering a Simulation learning experience to enhance their 
                        culinary abilities. <br></br><br></br>
                        With this in mind, our team would like to propose 
                        CuiSining, a web-based 3D animation game that offers the users to figure 
                        out the different dishes that can be made in different kinds of ingredients 
                        and to practice cooking skills.
                        </p>
                    </div>
    
                    <img src="good.png" alt="goo" className="m-3 img-fluid" style={{maxHeight:"500px", objectFit:"contain"}}/>
                </div>
                
                <div className="p-5 d-flex justify-content-center align-items-start flex-md-row flex-column" style={{minHeight:"520px", marginTop:"10px"}}>
                <img 
                    src="present.png" 
                    alt="present" 
                    className="m-3 img-fluid" 
                    style={{maxHeight:"500px", objectFit:"contain",}}
                />
                
                <div className="px-2 ms-md-9" > 
                    <h1 className="font-weight-800" style={{ 
                        fontSize:"38px", 
                        fontFamily:"'Nunito', sans-serif", 
                        marginBottom: "35px",
                        color: "#000000" 
                    }}>What we <span style={{color: "#C1B857"}}>Offer</span></h1>
                    <p className="" style={{ 
                        fontSize:"18px", 
                        maxWidth:"700px", 
                        lineHeight: "1.6",
                        fontFamily:"'Public Sans', sans-serif"
                    }}>
                    CuiSining is a web-based 3D simulation game designed to assess the 
                    user's cooking knowledge and experience. Through interactive 
                    training, the game provides a set of instructions to guide 
                    players, helping them better understand cooking techniques and processes. 
                    Its primary goal is to evaluate the user's current skills and knowledge, 
                    while also offering a Simulation learning experience to enhance their 
                    culinary abilities. <br></br><br></br>
                    With this in mind, our team would like to propose 
                    CuiSining, a web-based 3D animation game that offers the users to figure 
                    out the different dishes that can be made in different kinds of ingredients 
                    and to practice cooking skills.
                    </p>
                </div>
            </div>

                 <div className="p-5 d-flex justify-content-center align-items-start flex-md-row flex-column-reverse" style={{minHeight:"520px", marginTop:"10px", }}>
                <div className="px-5 me-md-1"> 
                    <h1 className="font-weight-800" style={{ 
                        fontSize:"38px", 
                        fontFamily:"'Nunito', sans-serif", 
                        marginBottom: "35px",
                        color: "#000000" 
                    }}>Want to be a certified <span style={{color: "#C1B857"}}>
                        NCII<br></br>Cookery Passer?</span></h1>
                    <p className="" style={{ 
                        fontSize:"18px", 
                        maxWidth:"700px", 
                        lineHeight: "1.6",
                        fontFamily:"'Public Sans', sans-serif"
                    }}>
                    CuiSining is a web-based 3D simulation game designed to assess the 
                    user's cooking knowledge and experience. Through interactive 
                    training, the game provides a set of instructions to guide 
                    players, helping them better understand cooking techniques and processes. 
                    Its primary goal is to evaluate the user's current skills and knowledge, 
                    while also offering a Simulation learning experience to enhance their 
                    culinary abilities. <br></br><br></br>
                    With this in mind, our team would like to propose 
                    CuiSining, a web-based 3D animation game that offers the users to figure 
                    out the different dishes that can be made in different kinds of ingredients 
                    and to practice cooking skills.
                    </p>
                </div>
                
                <img 
                    src="look.png" 
                    alt="look" 
                    className="m-1 img-fluid" 
                    style={{maxHeight:"500px", objectFit:"contain", }}
                />
            </div>

            {/*modal section*/ }
            {isModalOpen && (
                <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" 
                    style={{ zIndex: "1000", backgroundColor: "rgba(120, 122, 124, 0.5)" }}>
                    <div className="modal-content" style={{ background: "transparent", borderRadius: "50px", width: "70%", textAlign: "center", 
                        position: "relative", }}>
                        <button className="close-btn font-weight-600" 
                            style={{ border: "none", position: "absolute", right: "40px", top: "20px", background: "transparent", fontSize: "20px",
                                zIndex: "1001", color: "black" }}
                            onClick={handleCloseModal}>✖</button>
                        <img src="modalLdng.png" alt="Modal" style={{ maxWidth: "100%", height: "auto", display: "block",
                                margin: "0 auto", backgroundColor: "transparent" }} 
                                />
                            </div>
                        </div>
                    )}
                    <Footer />
                 </>
    )
}

export default Homepage;