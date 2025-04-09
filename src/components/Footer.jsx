import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import '../fw-cuisining.css';

const Footer = () => {
        
     return (
          <footer className="footer" style={{ backgroundColor: '#948f5c', padding: '40px', display: 'flex', flexDirection: 'column', 
            justifyContent: 'space-between', alignItems: 'flex-start', minHeight: '400px' }}>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
              
              <div className="logo-description-group" style={{ flex: '1 1 40%',  minWidth: '300px', textAlign: 'left', display: 'flex', 
                flexDirection: 'column', height: '100%', marginLeft: '30px', paddingBottom: '10px' }}>
                
                {/* Logo */}
                <img src="ter.png" alt="logo" style={{ width: '200px', height: 'auto', maxWidth: '100%', marginTop: '-20px', marginLeft: '-26px', }}/>
                
                <p className="color-white" style={{ marginBottom: '30px', fontSize: '15px', lineHeight: '1.5', marginTop: '-35px' }}>
                Cuisining is a web-based 3D simulation game designed to assess the user's cooking knowledge and experience. It features interactive courses, quizzes, and skill-based challenges to help users refine their techniques. Players can earn certificates, track their progress, and build their culinary skillsets while engaging in a fun and immersive learning experience.
                </p>
              </div>

              <div className="right-sections-group" style={{ flex: '1 1 50%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', 
                alignItems: 'flex-start', marginLeft: '100px',marginTop: '15px', paddingBottom: '20px', }}>
              
                <div className="pages" style={{ flex: '5', minWidth: '150px' }}>
                <h3 className="color #363100" style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '750'}}>Pages</h3>
                <Link to="/Home-page" className="color-white" style={{ display: 'block', marginBottom: '20px', fontSize: '15px', textDecoration: 'none' }}>Home</Link>
                <Link to="/about" className="color-white" style={{ display: 'block', marginBottom: '20px', fontSize: '15px', textDecoration: 'none' }}>About</Link>
                <Link to="/courses" className="color-white" style={{ display: 'block', marginBottom: '20px', fontSize: '15px', textDecoration: 'none' }}>Courses</Link>
                <Link to="/skillset" className="color-white" style={{ display: 'block', marginBottom: '20px', fontSize: '15px', textDecoration: 'none' }}>Skill Set</Link>
              </div>

                <div className="contact-us" style={{ flex: '1 1 30%', minWidth: '150px',}}>
                  <h3 className="color #363100" style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '750' }}>Contact Us</h3>
                  <p className="color-white" style={{ marginBottom: '20px', fontSize: '15px' }}>09486096986</p>
                  <p className="color-white" style={{ marginBottom: '20px', fontSize: '15px' }}>info.cuisining@gmail.com</p>
                </div>

                <div className="services" style={{ 
                  flex: '1 1 30%', 
                  minWidth: '150px' 
                }}>
                  <h3 className="color #363100" style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '750' }}>Services</h3>
                  <p className="color-white" style={{ marginBottom: '20px', fontSize: '15px' }}>Terms and Services</p>
                </div>
              </div>
            </div>

            <div className="social-media-group" style={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'flex-start', 
              alignItems: 'center', 
              marginLeft: '30px',
              marginTop: '25px', 
              width: '95%',
              borderTop: '1px solid white' 
            }}>
              <div className="socmed" style={{ 
                display: "flex", 
                gap: "12px", 
                marginTop: "5px" 
              }}>
                <a href="https://facebook.com">
                  <img src="fb.png" alt="Facebook" style={{ width: "32px", height: "32px" }} />
                </a>
                <a href="https://instagram.com">
                  <img src="insta.png" alt="Instagram" style={{ width: "32px", height: "32px" }} />
                </a>
                <a href="https://youtube.com">
                  <img src="yt.png" alt="Youtube" style={{ width: "32px", height: "32px" }} />
                </a>
              </div>

              <p className="color-white" style={{ fontSize: "12px", marginLeft: '17px', marginTop: '22px' }}>© 2024 Cuisining. All rights reserved</p>
            </div>
          </footer>
        );
      };

      export default Footer;