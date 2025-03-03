import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const Courses = () => {
    return(
       <>
       <Navbar/>
       <div className=" p5 d-grid algin-items-center justify-content-center">
       <h1 className="font-weight-900">Courses</h1>
       <div className=" " style={{height:"200px",width:"100%",}}>
       <p className="" style={{fontSize:"30px",maxWidth:"1400px",}}>Cooking, also known as cookery or professionally as the culinary, is the art, science and craft of using heart to
        make food more palatable, digestible, nutritious, or safe. Cooking techniques and Ingridients very widely, from
        grilling food over an open fire, to using Electric stoves, to baking in various types of ovens, reflecting local conditions.
        cooking is an aspect of all human society and a cultural universal.

        
       </p>
       </div>

       <div className=" d-grid  p2" style={{gridTemplateColumns:"repeat(3,1fr)",placeItems:"center"}}>
            <a href="FundamentalsOfCookery">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740999153/Group_1000006134_ddrfyc.png"></img>
            </a>
            <a href="PreparingAppetizers">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741000718/Group_1000006135_zii5oc.png"></img>
            </a>
            <a href="PreparingEggVagetable">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741017302/Group_1000006136_pic3gs.png"></img>
            </a>
            <a href="SaladAndSaladDressing">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741017528/Group_1000006137_vvljwc.png"></img>
            </a>
            <a href="PreparingSandwich">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741017859/Group_1000006138_dkc8nc.png"></img>
            </a>
            <a href="FinalAssessment">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741017912/Group_1000006207_t0gacn.png"></img>
            </a>
        </div>
       </div>


       <Footer/>
       </>
    )
}

export default Courses;