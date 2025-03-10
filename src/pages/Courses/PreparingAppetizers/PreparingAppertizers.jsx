
import "../../../fw-cuisining.css";
import CuisiningLogo from "../../../components/CuisiningLogo";

const PreparingAppetizers = () =>{
    return(
    <>
    <CuisiningLogo/>
    
    <div className=" p2  d-flex justify-content-center">
       <a href="Courses" className="p2 d-grid justify-content-center"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       <h1 className="p2 d-grid align-items-center justify-content-center">Preparing Appetizers and Hors D'oeuvers  <p className="p2">     In this course, we will present to you the knowledge and skills that you must have in order to perform the <br>
       </br>procedures for preparing appetizers and hors d’oeuvres properly.</p></h1>
       </div>

       <div className=" d-grid justify-content-center algin-items-center" >
        <h1 className="font-weight-700">UNIT 1: Introduction to Appetizers and Hors d'oeuvers</h1>

        <div className=" d-grid align-items-center justify-content-center p3 " style={{gridTemplateColumns:"repeat(2,1fr)", placeItems:"center"}}>
        <a href="KitchenDepartment" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741615723/Group_1000006177_gdlpjq.png"></img></a>
        <a href="KitchenDepartment" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741615925/Group_1000006178_vs6edl.png"></img></a>
        </div>

        <h1>UNIT 2: Preparing and Plating Appetizers and Hors d'oeuvresy</h1>
        <div className=" d-grid justify-content-center align-items-center p3" style={{gridTemplateColumns:"repeat(2,1fr)",placeItems:"center"}}>
        <a href="" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741617608/Group_1000006179_ndruhn.png"></img></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741617860/Group_1000006180_1_dwpvi9.png"></img></a>
      
        </div>
       </div>


      
    </>
    )
}

export default PreparingAppetizers;

