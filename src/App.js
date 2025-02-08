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
import Scissors from './pages/utensilsEng/Scissors';
import Poultry from './pages/utensilsEng/CuttingTools/scissors/Poultry';
import Wusthof from './pages/utensilsEng/CuttingTools/scissors/Wusthof';
import KitchenShears from './pages/utensilsEng/CuttingTools/scissors/KitchenShears';
import KitchenScissor from './pages/utensilsEng/CuttingTools/scissors/KitchenScissor';
import Household from './pages/utensilsEng/CuttingTools/scissors/Household';
import HerbScissor from './pages/utensilsEng/CuttingTools/scissors/HerbScissor';
import SeafoodScissors from './pages/utensilsEng/CuttingTools/scissors/SeafoodScissors';
import Multipurpose from './pages/utensilsEng/CuttingTools/scissors/Multipurpose';
import Allpurpose from './pages/utensilsEng/CuttingTools/scissors/Allpurpose';
import Peelers from './pages/utensilsEng/Peelers';
import Swivel from './pages/utensilsEng/CuttingTools/Peelers/Swivel';
import Swis from './pages/utensilsEng/CuttingTools/Peelers/Swis';
import Serrated from './pages/utensilsEng/CuttingTools/Peelers/Serrated';
import Julienne from './pages/utensilsEng/CuttingTools/Peelers/Julienne';
import Mechanical from './pages/utensilsEng/CuttingTools/Peelers/Mechanical';
import Rotary from './pages/utensilsEng/CuttingTools/Peelers/Rotary';
import Landcashier from './pages/utensilsEng/CuttingTools/Peelers/Landcashier';
import Grater from './pages/utensilsEng/Grater';
import BoxGrater from './pages/utensilsEng/CuttingTools/Graters/BoxGrater';
import HandGrater from './pages/utensilsEng/CuttingTools/Graters/HandGrater';
import RaspGrater from './pages/utensilsEng/CuttingTools/Graters/RaspGrater';
import MandolineGrater from './pages/utensilsEng/CuttingTools/Graters/MandolineGrater';
import RotaryGrater from './pages/utensilsEng/CuttingTools/Graters/RotaryGrater';
import SpiceGrater from './pages/utensilsEng/CuttingTools/Graters/SpiceGrater';
import Measuring from './pages/utensilsEng/Measuring';


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
              <Route path="/OTP" element={<OTP />} />
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
              <Route path="/Utensils" element={<Utensils />} />
              <Route path="/Cutting" element={<Cutting />} />
              {/* Knives */}
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
               {/* Scissors */}
               <Route path="/Scissors" element={<Scissors/>} />
               <Route path="/Poultry" element={<Poultry/>} />
               <Route path="/Wusthof" element={<Wusthof/>} />
               <Route path="/KitchenShears" element ={<KitchenShears/>}/>
               <Route path="/KitchenScissor" element={<KitchenScissor/>}/>
               <Route path="/HouseHold" element={<Household/>}/>
               <Route path="/HerbScissor" element={<HerbScissor/>}/>
               <Route path="/SeafoodScissors" element={<SeafoodScissors/>}/>
               <Route path="/Multipurpose" element={<Multipurpose/>}/>
               <Route path="Allpurpose" element={<Allpurpose/>}/>
               {/* Peelers*/}
               <Route path="/Peelers" element={<Peelers/>}/>
               <Route path="/Swivel" element={<Swivel/>}/>
               <Route path="/Swis" element={<Swis/>}/>
               <Route path="/Landcashier" element={<Landcashier/>}/>
               <Route path="/Serrated" element={<Serrated/>}/>
               <Route path="/Julienne" element={<Julienne/>}/>
               <Route path="/Mechanical" element={<Mechanical/>}/>
               <Route path="/Rotary" element={<Rotary/>}/>
               {/*Grater*/}
               <Route path="/Grater" element={<Grater/>}/>
               <Route path="BoxGrater" element={<BoxGrater/>}/>
               <Route path="/HandGrater" element={<HandGrater/>}/>
               <Route path="RaspGrater" element={<RaspGrater/>}/>
               <Route path="MandolineGrater" element={<MandolineGrater/>}/>
               <Route path="RotaryGrater" element={<RotaryGrater/>}/>
               <Route path="SpiceGrater" element={<SpiceGrater/>}/>
               {/*Measuring*/}
               <Route path="/Measuring" element={<Measuring/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;