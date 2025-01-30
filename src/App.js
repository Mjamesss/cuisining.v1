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
import Navbar from './components/Navbar';

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

              {/*Components */}
              <Route path= "/footer" element={<Footer/>}/>
              <Route path= "/Navbar" element={<Navbar/>}/>
                   
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
