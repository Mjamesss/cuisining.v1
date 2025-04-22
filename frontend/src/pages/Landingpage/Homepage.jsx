import {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';



const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    
    const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isPayPalModalOpen, setIsPayPalModalOpen] = useState(false);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setIsInitialModalOpen(true);
            sessionStorage.setItem('hasVisited', 'true');
        }
    }, []);

    const handleCloseInitialModal = () => {
        setIsInitialModalOpen(false);
    };

    const handleOpenEnrollModal = () => {
        setIsEnrollModalOpen(true);
    };

    const handleCloseEnrollModal = () => {
        setIsEnrollModalOpen(false);
    };



    useEffect(() => {
        // Only run this effect once when component mounts
        const hasVisited = sessionStorage.getItem('hasVisited');
        
        if (!hasVisited) {
            setIsModalOpen(true);
            sessionStorage.setItem('hasVisited', 'true');
        }

        // No cleanup function needed
    }, []); // Empty dependency array means it only runs 

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const videoRef = useRef(null);

    const handleVideoClick = () => {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };

    const handleOpenPayPalModal = () => setIsPayPalModalOpen(true);
    const handleClosePayPalModal = () => setIsPayPalModalOpen(false);
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const handlePaymentSuccess = async (details) => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("Authentication required");
    
        const paymentData = {
          amount: details.purchase_units[0].amount.value,
          modeOfPayment: "paypal",
          paymentDate: new Date().toISOString(),
          paypalTransactionId: details.id
        };
    
        const response = await fetch("http://localhost:5000/api/paypal/update-pro-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(paymentData)
        });
    
        if (!response.ok) throw new Error((await response.json()).message);
    
        const { profile } = await response.json();
        const formattedDate = new Date(profile.paymentDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
    
        // Format as Philippine Peso
        const pesoAmount = new Intl.NumberFormat('en-PH', {
          style: 'currency',
          currency: 'PHP'
        }).format(profile.amount);
    
        alert(`Payment Successful!\n
               Amount: ${pesoAmount}\n
               Transaction ID: ${profile.transacId}\n
               Date: ${formattedDate}`);
    
        window.location.reload();
      } catch (error) {
        console.error("Payment processing failed:", error);
        alert(`Payment verification failed: ${error.message}`);
      }
    };
    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            currency_code: "PHP",  // Set currency to PHP
            value: "500.00",       // Amount in PHP
            breakdown: {
              item_total: {
                currency_code: "PHP",
                value: "500.00"
              }
            }
          },
          items: [{
            name: "Pro Account Subscription",
            description: "1 Month Pro Account Access",
            unit_amount: {
              currency_code: "PHP",
              value: "500.00"
            },
            quantity: "1",
            category: "DIGITAL_GOODS"
          }]
        }],
        application_context: {
          shipping_preference: "NO_SHIPPING"
        }
      });
    };
    const onApprove = async (data, actions) => {
      return actions.order.capture().then(async (details) => {
        try {
          const token = localStorage.getItem("authToken");
          if (!token) throw new Error("Authentication required");
  
          const paymentData = {
            amount: details.purchase_units[0].amount.value,
            currency: details.purchase_units[0].amount.currency_code, // Should be PHP
            modeOfPayment: "paypal",
            paymentDate: new Date().toISOString(),
            paypalTransactionId: details.id
          };
  
          const response = await fetch("http://localhost:5000/api/paypal/update-pro-account", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(paymentData)
          });
  
          if (!response.ok) throw new Error((await response.json()).message);
  
          const { profile } = await response.json();
          const formattedDate = new Date(profile.paymentDate).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
  
          alert(`Payment Successful!\n
                 Amount: ₱${parseFloat(profile.amount).toLocaleString('en-PH', {
                   minimumFractionDigits: 2,
                   maximumFractionDigits: 2
                 })}\n
                 Transaction ID: ${profile.transacId}\n
                 Date: ${formattedDate}`);
  
          window.location.reload();
        } catch (error) {
          console.error("Payment processing failed:", error);
          alert(`Payment verification failed: ${error.message}`);
        }
      });
    };

    const [proAccountStatus, setProAccountStatus] = useState(null);
    const [isCheckingProStatus, setIsCheckingProStatus] = useState(true);
    useEffect(() => {
      const checkProStatus = async () => {
          setIsCheckingProStatus(true);
          try {
              const status = await fetchProAccountStatus();
              setProAccountStatus(status);
          } catch (error) {
              console.error("Error checking pro status:", error);
              setProAccountStatus(false);
          } finally {
              setIsCheckingProStatus(false);
          }
      };
      
      checkProStatus();
  }, []);

  // Add this function (as you requested)
  const fetchProAccountStatus = async () => {
      try {
          const token = localStorage.getItem("authToken");
          if (!token) {
              throw new Error("No token found in localStorage");
          }

          const response = await fetch("http://localhost:5000/api/settings/subscription", {
              method: "GET",
              headers: {
                  "Authorization": `Bearer ${token}`,
              },
          });

          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || "Failed to fetch proAccount status");
          }

          const data = await response.json();
          return data.proAccount; // Return the real proAccount status
      } catch (err) {
          console.error("Error fetching proAccount status:", err.message);
          alert(`⚠️ Failed to fetch proAccount status: ${err.message}`);
          return null;
      }
  };

    return (
        <>
          <Navbar />
                        
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
               </style>

              {/* Responsive styles */}
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
                              /* Fix for wavy image */
                              .wavy-image-container {
                                margin-top: 0 !important;
                                bottom: 50px !important;
                              }
                            }
                            
                            /* Small screens */
                            @media (max-width: 576px) {
                              .header-image img {
                                width: 100% !important;
                              }
                              .header-text-content {
                                bottom: 20px !important;
                                padding: 0 15px !important;
                              }
                              /* Additional fixes for mobile */
                              .wavy-image-container {
                                bottom: 30px !important;
                                margin-top: 20px !important;
                              }
                              /* Ensure enrollment button isn't overlapped */
                              .enroll-button-container {
                                margin-bottom: 20px !important;
                                position: relative !important;
                                z-index: 5 !important;
                              }
                            }
                        `}
                        </style>

            {/* Header section*/}
            <div 
                className="p-3 p-md-5 d-flex justify-content-center align-items-center flex-column-reverse flex-md-row" 
                style={{ minHeight: "min(100vh, 800px)", backgroundColor: "#F0F4F8", position: "relative", overflow: "hidden",
                     display: "flex", justifyContent: "center", alignItems: "center",  }}
            >
                {/* Text section */}
                <div 
                    className="px-2 px-md-5 py-4 py-md-0 text-center text-md-start header-text-content" 
                    style={{ maxWidth: "1200px", position: "relative",  bottom: "55px",  zIndex: 2 }}
                >
                    <h1 
                        className="font-weight-800" 
                        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)",  fontFamily: "'Nunito', sans-serif", marginBottom: "1.4rem", 
                            color: "#000000", lineHeight: "1.2" }}
                    >
                        Learn,<br />
                        Play, and Master <br />
                        the Art of Culinary <br />
                        <span style={{ color: "#adb44e" }}>Excellence.</span>
                    </h1>

                    <p 
                        className="mb-3 mb-md-4"
                        style={{ fontSize: "15px", maxWidth: "100%", lineHeight: "1.6", color: "#000000", textAlign: "inherit"
                        }}
                    >
                        Welcome to CuiSining. Take the next step in your culinary journey, master essential <br className="d-none d-md-block"/> cooking skills, and earn your NCII certification with confidence.
                    </p>
                    <div className="enroll-button-container">
                    {isCheckingProStatus ? (
                      <button 
                        className="cbtn cbtn-secondary fw-semibold mt-3 mt-md-4 mx-auto mx-md-0" 
                        style={{ 
                          color: "white",  
                          minWidth: "180px", // Set minimum width
                          height: "auto", 
                          fontSize: "clamp(1rem, 1.5vw, 1.2rem)", 
                          padding: "14px 20px", 
                          borderRadius: "25px",
                          opacity: 0.7,
                          whiteSpace: "nowrap" // Prevent text wrapping
                        }} 
                        disabled
                      >
                        Loading...
                      </button>
                    ) : proAccountStatus ? (
                      <button 
                        className="cbtn cbtn-success fw-semibold mt-3 mt-md-4 mx-auto mx-md-0" 
                        style={{ 
                          color: "white",  
                          minWidth: "180px", // Set minimum width
                          height: "auto", 
                          fontSize: "clamp(1rem, 1.5vw, 1.2rem)", 
                          padding: "14px 20px", 
                          borderRadius: "25px",
                          cursor: "default",
                          whiteSpace: "nowrap" // Prevent text wrapping
                        }} 
                        disabled
                      >
                        You are enrolled!
                      </button>
                    ) : (
                      <button 
                        className="cbtn cbtn-secondary fw-semibold mt-3 mt-md-4 mx-auto mx-md-0" 
                        style={{ 
                          color: "white",  
                          minWidth: "180px", // Set minimum width
                          height: "auto", 
                          fontSize: "clamp(1rem, 1.5vw, 1.2rem)", 
                          padding: "14px 20px", 
                          borderRadius: "25px",
                          transition: "transform 0.3s ease",
                          whiteSpace: "nowrap" // Prevent text wrapping
                        }} 
                        onClick={handleOpenEnrollModal}
                      >
                        Enroll now
                          </button>
                      )}
                  </div>
                </div>

                <div 
                    className="d-flex justify-content-center align-items-center header-image" 
                    style={{ position: "relative", maxWidth: "700px",  height: "auto",  zIndex: 1, left: "4%", bottom: "85px",  }}
                >
                    <img 
                        src="arlopointing.png" 
                        alt="Chef Arlo pointing" 
                        className="m-2 img-fluid" 
                        style={{  maxHeight: "auto",  objectFit: "contain",    width: "auto",  }} 
                    />
                </div>
            </div>





            {isInitialModalOpen && (
                <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" 
                    style={{ zIndex: 1000, backgroundColor: "rgba(120, 122, 124, 0.5)" }}>
                    <div className="modal-content" style={{ background: "transparent", borderRadius: "50px", width: "70%", textAlign: "center", position: "relative" }}>
                        <span
                            className="close-btn"
                            style={{ position: "absolute", right: "40px", top: "20px", fontSize: "20px", cursor: "pointer", color: "black", zIndex: 1001 }}
                            onClick={handleCloseInitialModal}
                        >
                            ✖
                        </span>
                        <img src="arlomodal.png" alt="Modal" style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto", backgroundColor: "transparent" }} />
                    </div>
                </div>
            )}

            
           {/* Enrollment modal */}
            {isEnrollModalOpen && (
                    <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ zIndex: '1000', backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)' }} onClick={handleCloseEnrollModal}>
                      <div className="modal-content p-5 position-relative" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)',backgroundImage: "url(https://res.cloudinary.com/dm6wodni6/image/upload/v1744181859/kitchenbg_pwqfxq.jpg)",backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: "center", backdropFilter: 'blur(10px)', borderRadius: '20px', width: '80%', maxWidth: '800px', color: 'white', border: '2px solid #363100' }}
                      onClick={(e) => e.stopPropagation()}>
                        <button className="position-absolute" onClick={handleCloseEnrollModal} aria-label="Close" style={{ top: '20px', right: '25px', fontSize: '24px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 1 }}>
                          ✖
                        </button>

                        <h2 className="text-center mb-4" style={{ color: 'white' }}>Premium Benefits</h2>
                        <div className="d-flex justify-content-around">
                          <div className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', width: '45%', border: '2px solid #363100' }}>
                            <h3 className="text-center text-white">FREE USE</h3>
                            <ul>
                              <li>Access to limited courses</li>
                              <li>No certification upon completion</li>
                              <li>Restricted access to certain skill sets</li>
                            </ul>
                          </div>
                          <div className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', width: '45%', border: '2px solid #363100' }}>
                            <h3 className="text-center text-white">PREMIUM</h3>
                            <ul>
                              <li>Unlock access to all core competencies for NCII Cookery</li>
                              <li>Receive a certificate upon completion</li>
                              <li>Unlock all skill sets for a comprehensive learning experience</li>
                            </ul>

                            {/* PayPal button for premium */}
                            <PayPalScriptProvider 
                              options={{ 
                                'client-id': 'AU75Cssfi8wU8N9Rxg44W431RY68PjTo1LmE54mAiEqGLPjrTASfzeRedoiYFPexw_5VkLHh4v3Spc-t',
                                currency: 'PHP', // Set default currency to PHP
                                intent: 'capture'
                              }}
                            >
                              <PayPalButtons
                                style={{
                                  layout: 'vertical',
                                  color: 'gold',
                                  shape: 'rect',
                                  label: 'paypal'
                                }}
                                createOrder={(data, actions) => {
                                  return actions.order.create({
                                    purchase_units: [{
                                      amount: {
                                        currency_code: 'PHP', // Explicitly set currency
                                        value: '199.00', // Amount in PHP
                                        breakdown: {
                                          item_total: {
                                            currency_code: 'PHP',
                                            value: '199.00'
                                          }
                                        }
                                      },
                                      items: [{
                                        name: 'Pro Account Subscription',
                                        description: '1 Month Pro Account Access',
                                        unit_amount: {
                                          currency_code: 'PHP',
                                          value: '199.00'
                                        },
                                        quantity: '1',
                                        category: 'DIGITAL_GOODS'
                                      }]
                                    }],
                                    application_context: {
                                      shipping_preference: 'NO_SHIPPING',
                                      user_action: 'PAY_NOW'
                                    }
                                  });
                                }}
                                onApprove={(data, actions) => {
                                  return actions.order.capture().then((details) => {
                                    handlePaymentSuccess(details);
                                  });
                                }}
                                onError={(err) => {
                                  console.error('PayPal error:', err);
                                  alert('There was an error processing your payment. Please try again.');
                                }}
                                onCancel={(data) => {
                                  console.log('Payment cancelled:', data);
                                  alert('Payment was cancelled. You can try again anytime.');
                                }}
                              />
                            </PayPalScriptProvider>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
            <div className="wavy-image-container" 
            style={{ position: "relative", zIndex: 1, marginTop: "-180px", marginBottom: "0", width: "100%",overflow: "hidden" }}>
                <img src="wavy2.png" 
                     alt="Wave divider" 
                    style={{ width: "100%", height: "auto", objectFit: "contain", display: "block",  clipPath: "inset(1px 0 0 0)"  }}/>
                        </div>



                <div className="p-5 d-flex justify-content-center align-items-center flex-md-row flex-column-reverse" 
                
                style={{minHeight:"520px", marginTop:"25px"}}>
                    <div className="px-4 me-md-5"> 
                        <h1 className="font-weight-800" style={{ fontSize:"33px", fontFamily:"'Nunito', sans-serif", marginBottom: "30px",
                            color: "#000000" }}>About <span style={{color: "#adb44e"}}>CuiSining</span></h1>
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
    
                    <img src="arlo5.png" alt="goo" className="m-3 img-fluid" style={{maxHeight:"450px", objectFit:"contain"}}/>
                </div>

                <div
                className="p-5 d-flex justify-content-center align-items-center flex-column"
                style={{ minHeight: "520px", marginTop: "5px" }}
                >

                <div
                    className="d-flex align-items-center justify-content-center mb-5 w-100"
                    style={{ gap: "10px" }}
                >
                    <div style={{ width: "10px", flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
                    <h1 className="text-center m-0" style={{ fontSize:"33px", fontWeight: "800", fontFamily:"'Nunito', sans-serif", color: "#000000" }}>
                    Meet Arlo, <span style={{color: "#adb44e"}}>Your Kitchen Buddy!</span>                          
                    </h1>
                    <div style={{ width: "30%", flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
                </div>

                <video
                  ref={videoRef}
                  onClick={handleVideoClick}
                  className="m-3 img-fluid"
                  style={{ maxHeight: "450px", objectFit: "contain", cursor: "pointer", borderRadius: "25px" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="arlocook.png"
                >
                  <source src="arloocook.mp4" type="video/mp4" />
                </video>
                </div>                
                <div className="p-5 d-flex justify-content-center align-items-start flex-md-row flex-column" 
                style={{minHeight:"520px", marginTop:"30px"}}>
                
                <img src="arlo4.png" alt="present" 
                    className="m-3 img-fluid" 
                    style={{maxHeight:"430px", objectFit:"contain",}}
                />
                
                <div className="px-2 ms-md-9" > 
                    <h1 className="font-weight-800" style= {{ fontSize:"33px", fontFamily:"'Nunito', sans-serif", marginBottom: "35px", color: "#000000" 
                    }}>What we <span style={{color: "#adb44e"}}>Offer</span></h1>
                    <p className="" style={{ fontSize:"18px", maxWidth:"700px", lineHeight: "1.6", fontFamily:"'Public Sans', sans-serif"
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

                 <div className="p-5 d-flex justify-content-center align-items-start flex-md-row flex-column-reverse" 
                 style={{minHeight:"520px", marginTop:"50px", marginBottom: "160px"  }}>

                <div className="px-5 me-md-1"> 
                    
                    <h1 className="font-weight-800" 
                    style={{ fontSize:"33px", fontFamily:"'Nunito', sans-serif", marginBottom: "35px", color: "#000000" 
                    }}>Want to be a certified <span style={{color: "#adb44e"}}>
                        NCII<br></br>Cookery Passer?</span></h1>
                    <p className="" style={{ fontSize:"18px", maxWidth:"700px", lineHeight: "1.6", fontFamily:"'Public Sans', sans-serif"
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
                
                <img src="arlo3.png" 
                    alt="look" 
                    className="m-1 img-fluid" 
                    style={{maxHeight:"430px", objectFit:"contain", }}
                />
            </div>

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