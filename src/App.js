import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import L from './pages/login/L'; // Import Login Component
import S from './pages/login/S'; // Import Sign Up Component
import ForgotPass from './pages/login/ForgotPass'; // Import Forgot Password Component
import OTP from './pages/login/OTP'; // Import OTP Component
import SetNewPass from './pages/login/SetNewPass'; // Import Set New Password Component
import Done from './pages/login/Done'; // Import Done Component
import Landing from './pages/login/Landing'; // Import Home Component
import DoneRegister from './pages/login/DoneRegister'; // Import Done Register Component
import Testing from './pages/Testing';
import Footer from './components/Footer';
import Customprofile from './pages/customize-profile/customize-profile';
import Navbar from './components/Navbar';
import Homepage from './pages/Landingpage/Homepage';
import About from './components/About'; 
import Utensils from './pages/utensilsEng/Utensils';
import Cutting from './pages/utensilsEng/Cutting';
import Knife from './pages/utensilsEng/Knife';
import Chefknife from './pages/utensilsEng/CuttingTools/knives/Chefknife';
import Santoku from './pages/utensilsEng/CuttingTools/knives/Santoku';
import Utility from './pages/utensilsEng/CuttingTools/knives/Utility';
import Boning from './pages/utensilsEng/CuttingTools/knives/Boning';
import Bread from './pages/utensilsEng/CuttingTools/knives/Bread';
import Clever from './pages/utensilsEng/CuttingTools/knives/Clever';
import Paring from './pages/utensilsEng/CuttingTools/knives/Paring';
import Steak from './pages/utensilsEng/CuttingTools/knives/Steak';
import Fillet from './pages/utensilsEng/CuttingTools/knives/Fillet';


const App = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col>
            <Routes>
              {/* Login Pages */}
              <Route path="/" element={<L />} />
              <Route path="/signup" element={<S />} />
              <Route path="/ForgotPass" element={<ForgotPass />} />
              <Route path="/WelcomeByGoogle" element={<OTP />} />
              <Route path="/SetNewPass" element={<SetNewPass />} />
              <Route path="/Done" element={<Done />} />
              <Route path="/Landing" element={<Landing />} />       
              <Route path="/DoneRegister" element={<DoneRegister />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/navbar" element={<Navbar/>} />
              <Route path="/customize-profile" element={<Customprofile />} />
              <Route path="/Home-Page" element={<Homepage />} />
              <Route path="/About" element={<About />} />
              {/*Utensils */}
              <Route path="/Utensils" element={<Utensils />} />
              <Route path="/Cutting" element={<Cutting />} />
              <Route path="/Knife" element={<Knife />} />
              <Route path="/Chefknife" element={<Chefknife/>}/>
               <Route path="/Santoku" element={<Santoku/>}/>
               <Route path="/Utility" element={<Utility/>}/>
               <Route path="/Boning" element={<Boning/>}/>
               <Route path="/Bread" element={<Bread/>}/>
               <Route path="/Clever" element={<Clever/>}/>
               <Route path="/Paring" element={<Paring/>}/>
               <Route path="/Steak" element={<Steak/>}/>
               <Route path="/Fillet" element={<Fillet/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
