import React from 'react';
import {link} from 'react-router-dom';
import Footer from './Footer';
import "../fw-cuisining.css";


const About = () => {

const style ={

    }

    return (
        <>

        <div>
        <a href="Home-page"> <img src="cuisining-newlogo.png" alt="offer" style={{ marginLeft: "50px", marginTop: "30px" }} /></a>
        </div>
        <div className= "p3 d-flex justify-content-center text-center">
            <h1 style= {{ fontSize: "45px", marginTop: "0",}}>About CuiSining</h1>
        </div>

        <div className= "text-align-justify "style= {{margin: "auto", textAlign: "left", width: "50%",}}>
            <p style={{ fontSize: "20px" ,}}>CuiSining is a web-based 3D simulation game designed design to assess the user's
             Through interactive training, the game provides a set of instructions to guide players, helping them better 
             understand cooking techniques and processes. Its primary goal is to evaluate the user's current skills and
             knowledge, while also offering a Simulation learning experience to enhance their culinary abilities.</p>
        </div>

        <div className= "text-align-justify "style= {{margin: "auto", textAlign: "left", width: "50%", }}>
            <p style={{ fontSize: "20px" ,}}> With this in mind, our team would like to propose CuiSining, a web-based 3D 
            animation game that offers the users to figure out the different dishes that can be made in different
            inds of ingredients and to practice cooking skills.</p>   
        </div>



        <div className= "p3 d-flex justify-content-center text-center" style= {{ paddingTop: "60px",}}>
            <h1 style= {{ fontSize: "45px",}}>Developers</h1>
        </div>
      {/*Developer png*/}
      <div className='justify-content-center d-flex flex-column'>
        <div className= "p3 d-flex justify-content-center" style={{ height: "auto",}}>
            <img src= "developers.png" alt="offer"></img>
            <img src= "developers.png" alt="offer" style={{ marginLeft: "80px",}}></img>
            <img src= "developers.png" alt="offer" style={{ marginLeft: "80px",}}></img>
        </div>

        <div className= "p3 d-flex justify-content-center" style={{ height: "400px",}}>
            <img src="developers.png" alt="offer"></img>
            <img src="developers.png" alt="offer" style={{ marginLeft: "80px",}}></img>
            <img src="developers.png" alt="offer" style={{ marginLeft: "80px",}}></img>
        </div>

        <div className= "p3 d-flex justify-content-center" style={{ height: "400px",}}>
            <img src="developers.png" alt="offer"></img>
            <img src="developers.png" alt="offer" style={{ marginLeft: "80px",}}></img>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default About;