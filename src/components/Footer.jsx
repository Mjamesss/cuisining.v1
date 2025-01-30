import { useState, useEffect, useRef } from "react";
import {link} from 'react-router-dom';
import './Footer.css';
import '../fw-cuisining.css';

const footer = () => {
 const style ={
  
 }

   
    return(
      <>
       <footer className="footer p3 d-flex">
        <div className="section">
           <img src="./logo.png" alt="logo"></img>
           <p>is a web-based 3d simulation game designed to assess<br></br>
           the user cooking knowledge and experience.</p>

           <div className="socmed p1 pt1 d-flex justify-content-center ">
           <a href="https://faceboook.com">
           <img src="fb.png"></img></a>
           <a href="https://instagram.com">
           <img src="instagram.png"></img>
           </a>
           <a href="https://linkedin.com">
           <img src="Vector.png"></img>
           </a>
           </div>
           <p>©2024 cusining. All rights reserve</p>
        </div>
        <div className="pages color-white p1">
         <h3>Pages</h3>
          <a href="#home">Home</a><br></br>
          <a href="#home">About</a><br></br>
          <a href="#home">Course</a><br></br>
          <a href="#home">Skillset</a><br></br>
        </div>
        <div className="otherinfo p1 ">
         <h3>Contact us</h3><br></br>
         <p>09486096986</p>

         <h3>Email us</h3>
         <p>Cusining@gmail.com</p>
        </div>
        <div className="Services p1">
         <h3>Services</h3>
         <p>Terms and Services</p>
         
         <p></p>
        </div>
       </footer>
      </>
    )
}

export default footer;