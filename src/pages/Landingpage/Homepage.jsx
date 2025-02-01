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
            <div className=" background-cover   d-flex " style={{padding:"0",margin:"0",height:"500px", width:"100%",backgroundSize:"cover",objectFit: "cover",}}>
          <img className="background-cover" src="homepagebg.png" alt="BACKGROUND home" style={{backgroundSize:"cover",width:"100%",height:"100%",}}></img>
          
        </div>       
        <div className="d-flex justify-content-center  pb-5 " style={{height:"80px",}}>
            <button className="cbtn cbtn-secondary  font-weight-600 trans-y" style={{ color:"white",width:"15%",height:"70px",fontSize:"22px",}}>Enroll now</button>
         </div>

         <div className="  font-family " style={{padding:"90px"}}>
            <h1 className="font-weight-900">About Cuisining</h1>
            <p className=""style={{fontSize:"25px",}}>CuiSining is a web-based 3D game design to assess the user's cooking knowldege and expereince<br></br>
            Through interactive training, the game provide the set of instructions to guide players, helping htem better<br></br>
            Understand cooking techniques and Process.its Primary goal is to evaluate the user's current skills and <br></br>
            knowledge, while also offering a simulation learning Experience ot enhance their Culinary Abilities<br></br>
            <br></br>
            With in this mind, our team would like to propose CuiSining, A web-based 3D Animation game that offers the user's<br></br>
            to figure out the different dishes that can be made in different kinds of ingredients and to Practice cooking skills</p>
         </div>
          
          <div className=" p3 d-flex" style={{height:"520px",}}>
             <img src="offer.png" alt="offer" className=" m1"></img>
             
            <div> 
                <h1 className="font-weight-800"> What we offer</h1>
                <p className=""style={{fontSize:"25px",}}>
                    
                    Welcome to CuiSining, your trusted online platform for culinary <br></br>
                    Education and skill Development. whether you're just starting out or<br></br>
                    looking to advance your culinary carrer, we offer structured courses<br></br>
                    designed to enhance your cooking expertise<br></br>
                    <br></br>
                    pursue your dream of becoming a certified chef with our NC II cookery<br></br>
                    Program.Our courses are designed to fully prepare your for the national<br></br>
                    Certificate II in cookery assessment, ensuring you meet all industry<br></br>
                    requirements. with a focus on preactice skills, safety standard and <br></br>
                    kitchen operations, you'll be ready to take the certification exam with <br></br>
                    Confidence.</p>
                </div>
          </div>

          <div className=" p3 d-flex" style={{height:"520px"}}>
             <div>
                <h1 className="font-weight-800" style={{fontSize:"40px",}}>Want to be a Certified NC II Cookery<br></br>
                Passer</h1>
                <p className=""style={{fontSize:"25px",}}>if you dream of becoming a certified cook an advancing your culinary<br></br>
                carrer, our platform is here to help you achieve the prestigious NC II<br></br>
                (National Certificate II) in cookery. Through our Comprehensive,<br></br>
                interactive course simulations, you'll again Practical skills and<br></br>
                theoretrical knowldege required to meet indutry standard and pass<br></br>
                the NC II cookery assessment.Our System offers you s structured<br></br>
                learning path with hands-on virtual cooking practice, exprt guidance, <br></br>
                and real-time feedback, ensuring you're fully prepared for the<br></br>
                Certification Exam </p>
             </div>
             <div>
                <img src="Nc.png" className=" p2 m3" style={{height:"90%",}}></img>
             </div>
                </div>

               {/*modal section*/ }
               {isModalOpen && (
                
               <div className=" p2 modal-overlay position-fixed top-0 left-0 d-flex justify-content-center algin-item-center align-self-center" style={{width:"100%",height:"100%",zIndex:"1",background:"transparent",}}>
                    <div className="modal-content "style={{background:"transparent",borderRadius:"50px",width:"100%",textAlign:"center",position:"relative",}}>
                        <button className="close-btn font-weight-600" style={{border:"none",textAlign:"end",background:"transparent",fontSize:"20px",}}onClick={() => setIsModalOpen(false)}>✖</button>
                        <img src="modalLanding.png" alt="Modal" className="img-fluid p1" style={{boxShadow:"90px",}} />
                    </div>
                </div>
               
               )}
            <Footer />
        </>
    )
}

export default Homepage;