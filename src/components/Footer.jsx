import { useState, useEffect, useRef } from "react";
import {link} from 'react-router-dom';
import '../fw-cuisining.css';

const footer = () => {
 const style ={
  
 }
    return(
      <>
       <footer className="footer p3 g1 d-flex bg-black">
        <div  className="section  p1 " style={{width:"40%",}}>
           <img src="./logo.png" alt="logo"></img>
           <p className="color-white">is a web-based 3d simulation game designed to assess<br></br>
           the user cooking knowledge and experience.</p>

           <div className="socmed p1 pt1 d-flex   ">
           <a href="https://faceboook.com">
           <img src="fb.png"></img></a>
           <a href="https://instagram.com">
           <img src="instagram.png"></img>
           </a>
           <a href="https://linkedin.com">
           <img src="Vector.png"></img>
           </a>
           </div>
           <p className="color-white">©2024 cusining. All rights reserve</p>
        </div>
        <div className="pages color-white p1 " style={{width:"10%",}}>
         <h3 className="color-white">Pages</h3>
          <a href="#home" className="color-white">Hoome</a><br></br>
          <a href="#home" className="color-white mt-5">About</a><br></br>
          <a href="#home" className="color-white">Course</a><br></br>
          <a href="#home" className="color-white">Skillset</a><br></br>
        </div>
        <div className="otherinfo p1 color-white  w-20 ">
         <h3 className="color-white">Contact us</h3><br></br>
         <p className="color-white">09486096986</p>

         <h3 className="color-white">Email us</h3>
         <p className="color-white">Cusining@gmail.com</p>
        </div>
        <div className="Services p1">
         <h3 className="color-white">Services</h3>
         <p className="color-white">Terms and Services</p>
         
         <p></p>
        </div>
       </footer>
      </>
    )
}

export default footer;