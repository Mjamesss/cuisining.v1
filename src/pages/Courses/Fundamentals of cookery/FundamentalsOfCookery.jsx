
import "../../../fw-cuisining.css";
import CuisiningLogo from "../../../components/CuisiningLogo";

const FundamentalsOfCookery = () =>{
    return(
    <>
    <CuisiningLogo/>
    
    <div className=" p2  d-flex justify-content-center">
       <a href="Courses" className="p2 d-grid justify-content-center"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       <h1 className="p2 d-grid align-items-center justify-content-center">FUNDAMENTALS OF PROFESSIONAL COOKERY  <p className="p2">   This prerequisite module will present you the knowledge and skills that you must possess inside the kitchen <br>
       </br>before performing hands-on food preparation. </p></h1>
       </div>

       <div className=" d-grid justify-content-center algin-items-center" >
        <h1 className="font-weight-700">UNIT 1:Introduction to Professional Cookey</h1>

        <div className=" d-grid align-items-center justify-content-center p2">
        <a href="KitchenDepartment" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741097867/Group_1000006169_kh9fl0.png"></img></a>
        </div>

        <h1>UNIT 2: Basics of Professional Cookery</h1>
        <div className=" d-grid justify-content-center align-items-center" style={{gridTemplateColumns:"repeat(2,1fr)",placeItems:"center"}}>
        <a href="CommonKitchenTools" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741100936/Group_1000006206_jojglq.png"></img></a>
        <a href="MeasurementsAndConversion" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741101562/Group_1000006205_fltuw0.png"></img></a>
        <a href=""><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741101645/Group_1000006174_umholu.png"></img></a>
        <a href=""><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741101682/Group_1000006175_i6owwd.png"></img></a>
        <a href=""><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741101721/Group_1000006176_hbc5mu.png"></img></a>
        </div>
       </div>


      
    </>
    )
}

export default FundamentalsOfCookery;

