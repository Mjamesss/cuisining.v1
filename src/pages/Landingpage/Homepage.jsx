import {useState,useEffect} from 'react';
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
        setIsModalOpen(true); // Show modal on page load
    }, []);

    return (
        <>
            <Navbar />
       {/* homepage */}
<div
  style={{
    margin: "0",
    width: "100%", // Ensure the container takes up the full width
    overflow: "hidden",
    position: "relative",
    marginTop: "8px", // Add space below the navbar
  }}
>
  <img
    src="Ldghomepge.png"
    alt="BACKGROUND home"
    style={{
      width: "100%", // Ensure the image takes up the full width of the container
      height: "auto", // Let the height adjust based on the image's aspect ratio
      display: "block", // Remove extra space below the image
    }}
  />
</div>

        <div className="d-flex justify-content-center  pb-5 " style={{height:"80px",}}>
            <button className="cbtn cbtn-secondary font-weight-600 trans-y" style={{ color:"white",width:"15%",height:"70px",fontSize:"22px", marginLeft: "20px"}}>Enroll now</button>
         </div>

         <div className="font-family d-flex justify-content-center align-items-center" style={{ padding: "85px" }}>
            {/* Combined container for both white and brown sections */}
            <div style={{ display: "grid", gridTemplateColumns: "60% 40%", borderRadius: "25px", overflow: "hidden", height: "565px", maxWidth: "1200px", 
              width: "100%", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              {/* White container for text */}
              <div style={{ backgroundColor: "white", padding: "50px",}}>
                <h1 className="font-weight-900" style={{ fontSize: "35px", marginTop: "30px", color: "#363100" }}>About Cuisining</h1>
                <p style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6" }}>
                  Cuisining is a web-based 3D game designed to assess the user's cooking knowledge and experience. Through interactive training, the game provides a set of instructions to guide players, helping them better understand cooking techniques and processes. Its primary goal is to evaluate the user's current skills and knowledge, while also offering a simulation learning experience to enhance their culinary abilities.
                </p>
                <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                  With this in mind, our team would like to propose Cuisining, a web-based 3D animation game that offers users the opportunity to figure out the different dishes that can be made with various kinds of ingredients and to practice cooking skills.
                </p>
              </div>

              <div style={{ position: "relative", backgroundColor: "#C1B857", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden" }}>
                <img src="chefpointing.png" alt="Chef character"
                  style={{ position: "absolute", bottom: "auto", leftt: "40%", width: "580px", height: "580px", maxWidth: "110%", maxHeight: "110%", 
                    objectFit: "contain", zIndex: 1 }}
                />
              </div>
            </div>
          </div>
                  
          <div className=" p3 d-flex justify-content-center align-items-center " style={{height:"520px",}}>
             <img src="offer.png" alt="offer" className=" m1"></img>
             
            <div> 
           
                <p className=""style={{fontSize:"16px",maxWidth:"900px",}}>
                <h1 className="font-weight-800"> What we offer</h1>
                    Welcome to CuiSining, your trusted online platform for culinary 
                    Education and skill Development. whether you're just starting out or
                    looking to advance your culinary carrer, we offer structured courses
                    designed to enhance your cooking expertisepursue your dream of becoming 
                    a certified chef with our NC II cookery
                    Program.Our courses are designed to fully prepare your for the national
                    Certificate II in cookery assessment, ensuring you meet all industry
                    requirements. with a focus on preactice skills, safety standard and 
                    kitchen operations, you'll be ready to take the certification exam with 
                    Confidence.</p>
                </div>
          </div>

          

          <div className=" p3 d-flex justify-content-center align-items-center" style={{height:"520px",}}>
             <div>
                
                <p className=""style={{fontSize:"25px",maxWidth:"900px",}}>
                <h1 className="font-weight-800" style={{fontSize:"40px",}}>
                    Want to be a Certified NC II Cookery Passer</h1>
                if you dream of becoming a certified cook an advancing your culinary
                carrer, our platform is here to help you achieve the prestigious NC II
                (National Certificate II) in cookery. Through our Comprehensive
                interactive course simulations, you'll again Practical skills and
                theoretrical knowldege required to meet indutry standard and pass
                the NC II cookery assessment.Our System offers you s structured
                learning path with hands-on virtual cooking practice, exprt guidance, 
                and real-time feedback, ensuring you're fully prepared for the
                Certification Exam </p>
             </div>
             <div>
                <img src="Nc.png" className=" p2 m3" style={{height:"90%",}}></img>
             </div>
                </div>

               {/*modal section*/ }
               {isModalOpen && (
                
               <div className=" p2 modal-overlay position-fixed top-0 left-0 d-flex justify-content-center algin-item-center align-self-center" style={{width:"100%",height:"100%",zIndex:"1",background:"transparent",}}>
                    <div className="modal-content "style={{background:"transparent",borderRadius:"50px",width:"70%",textAlign:"center",position:"relative",}}>
                        <button className="close-btn font-weight-600" style={{border:"none",textAlign:"end",background:"transparent",fontSize:"20px",}}onClick={() => setIsModalOpen(false)}>✖</button>
                        <img src="modalLdng.png" alt="Modal" className="img-fluid p1" style={{boxShadow:"90px",}} />
                    </div>
                </div>
               
               )}
            <Footer />
        </>
    )
}

export default Homepage;