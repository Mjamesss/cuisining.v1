import React from 'react';
import Footer from './Footer';
import "../fw-cuisining.css";
import Navbar from '../components/Navbar';

const About = () => {
    const style = {
    }

    return (
        <>
            <Navbar />

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
            
            {/* Header section */}
            <div 
                className="p-4 p-md-5 d-flex justify-content-center align-items-center" 
                style={{ 
                    minHeight: "min(100vh, 800px)", 
                    backgroundColor: "#F0F4F8", 
                    position: "relative", 
                    overflow: "hidden",
                    marginLeft: "50px"
                }}
            >
                {/* Main container with careful spacing */}
                <div 
                    className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between" 
                    style={{ 
                        maxWidth: "1400px",
                        width: "100%",
                        gap: "40px",
                        padding: "0 20px"
                    }}
                >
                    {/* Text section with fixed max-width */}
                    <div 
                        className="text-center text-md-start" 
                        style={{ 
                            maxWidth: "650px",
                            flex: "1 1 60%",  // Takes priority for space
                            zIndex: 2
                        }}
                    >
                        <h1 
                            className="font-weight-800" 
                            style={{ 
                                fontSize: "clamp(2.5rem, 6vw, 4rem)",  
                                fontFamily: "'Nunito', sans-serif", 
                                marginBottom: "1.4rem", 
                                color: "#000000", 
                                lineHeight: "1.2" 
                            }}
                        >
                            ABOUT<br />
                            <span style={{ color: "#adb44e" }}>US.</span>
                        </h1>

                        <p 
                            style={{ 
                                fontSize: "15px", 
                                lineHeight: "1.6", 
                                color: "#000000",
                                textAlign: "left",
                                marginBottom: "2rem",
                                wordBreak: "normal"  // Prevents awkward word breaks
                            }}
                        >
                            At CuiSining, we're more than just a platform we're your culinary companion. <br />
                            Our mission is to guide you on every step of your journey, helping you master essential <br />
                            cooking skills and confidently earn your NCII certification.<br />
                        </p>
                    </div>
                    
                    {/* Image section that adapts to space */}
                    <div 
                        style={{ 
                            flex: "1 1 40%",
                            maxWidth: "600px",
                            minWidth: "300px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img 
                            src="arlo5.png" 
                            alt="Chef Arlo pointing" 
                            style={{ 
                                width: "100%",
                                height: "auto",
                                maxHeight: "600px",
                                objectFit: "contain"
                            }} 
                        />
                    </div>
                </div>
            </div>

            <div className="wavy-image-container" 
                style={{ position: "relative", zIndex: 1, marginTop: "0", marginBottom: "60px", width: "100%",overflow: "hidden" }}>
                    <img src="wavy2.png" 
                        alt="Wave divider" 
                        style={{ width: "100%", height: "auto", objectFit: "contain", display: "block",  clipPath: "inset(1px 0 0 0)"  }}/>
                </div>

                <div className="p-5 d-flex justify-content-center align-items-center flex-md-row flex-column-reverse" 
                
                style={{minHeight:"520px", marginTop:"55px", marginBottom: "40px"}}>
                    <div className="px-3 me-md-5"> 
                        <h1 className="font-weight-800" style={{ fontSize:"33px", fontFamily:"'Nunito', sans-serif", marginBottom: "30px",
                            color: "#000000" }}>Project <span style={{color: "#adb44e"}}>Manager</span></h1>
                        <p className="" style={{ fontSize:"18px", maxWidth:"700px", lineHeight: "1.6",
                        }}>
                        As the leader of the CuiSining team, I work to help aspiring chefs by providing easy access to high-quality culinary 
                        education. From planning to execution, I make sure everything runs smoothly and stays on track to meet the needs of
                        our users. As a Full Stack Developer, I also handle both the front-end and back-end development, making sure everything works together perfectly for a great user experience. <br></br>
                        </p>
                    </div>

                    <img src="karl.png" alt="goo" className="m-3 img-fluid" style={{maxHeight:"370px", objectFit:"contain"}}/>
                </div>

                <div className="p-5 d-flex justify-content-center align-items-start flex-md-row flex-column" 
                style={{minHeight:"520px", marginTop:"30px"}}>
                
                <img src="raf.png" alt="present" 
                    className="m-3 img-fluid" 
                    style={{maxHeight:"370px", objectFit:"contain", }}
                />
                
                <div className="px-5 ms-md-9" > 
                    <h1 className="font-weight-800" style= {{ fontSize:"33px", fontFamily:"'Nunito', sans-serif", marginBottom: "35px", color: "#000000" 
                    }}>Assistant <span style={{color: "#adb44e"}}>Manager</span></h1>
                    <p className="" style={{ fontSize:"18px", maxWidth:"650px", lineHeight: "1.6", fontFamily:"'Public Sans', sans-serif"
                    }}>
                As an Assistant Manager at CuiSining, I help make sure the team works smoothly every day. I work closely with the project 
                manager to coordinate tasks, improve workflows, and meet deadlines. As a Full Stack Developer, I also help with both the 
                front-end and back-end development, making sure everything works together well. My focus on clear communication and efficiency 
                helps keep everything running smoothly for our users.
                <br></br>
                    </p>
                </div>
            </div>

            <div className="p-5 d-flex justify-content-center align-items-center flex-md-row flex-column-reverse" 
                
                style={{minHeight:"520px", marginTop:"-15px", marginBottom: "40px"}}>
                    <div className="px-3 me-md-5"> 
                        <h1 className="font-weight-800" style={{ fontSize:"33px", fontFamily:"'Nunito', sans-serif", marginBottom: "30px",
                            color: "#000000" }}>Front <span style={{color: "#adb44e"}}>Dev Lead</span></h1>
                        <p className="" style={{ fontSize:"18px", maxWidth:"700px", lineHeight: "1.6",
                        }}>
                        As the Frontend Developer Lead at CuiSining, I oversee the design and development of the parts of the 
                        platform that users interact with. I work closely with the design team to turn ideas into easy-to-use, 
                        visually appealing features. My goal is to make sure the platform looks great and works smoothly, creating an 
                        enjoyable experience for all users. <br></br>
                        </p>
                    </div>

                    <img src="me.png" alt="goo" className="m-3 img-fluid" style={{maxHeight:"400px", objectFit:"contain"}}/>
                </div>

                <div
                    className="d-flex align-items-center justify-content-center mb-5 w-100"
                    style={{ gap: "10px" }}
                >
                    <div style={{ width: "10px", flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
                    <h1 className="text-center m-0" style={{ fontSize:"33px", fontWeight: "800", fontFamily:"'Nunito', sans-serif", color: "#000000" }}>
                    Meet Game <span style={{color: "#adb44e"}}>Dev</span>                          
                    </h1>
                    <div style={{ width: "30%", flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
                </div>

                {/* Centered and responsive members image */}
                <div className="container d-flex justify-content-center mb-5">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img 
                                src="members.png" 
                                alt="Team members" 
                                className="img-fluid" 
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    maxHeight: "600px",
                                    objectFit: "contain",
                                    marginBottom: "120px" // Added margin bottom to the image itself
                                }}
                            />
                        </div>
                    </div>
                </div>

                <Footer />
        </>
    )
}

export default About;