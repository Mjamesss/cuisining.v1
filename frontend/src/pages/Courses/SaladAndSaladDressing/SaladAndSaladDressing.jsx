
import "../../../fw-cuisining.css";
import CuisiningLogo from "../../../components/CuisiningLogo";

const SaladAndSaladDressing = () =>{
    return(
    <>
    <CuisiningLogo/>
    
    <div className=" p2  d-flex justify-content-center">
       <a href="Courses" className="p2 d-grid justify-content-center"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       <h1 className="p2 d-grid align-items-center justify-content-center">Salad and Salad Dressings <p className="p2">           In this course, we will present to you the knowledge and skills that you must have in order to perform the <br>
       </br>procedures procedures for preparing salads and dressings properly.</p></h1>
       </div>

       <div className=" d-grid justify-content-center algin-items-center" >
        <h1 className="font-weight-700 d-flex justify-content-center" >UNIT 1: Introduction to Salads and Salad Dressings</h1>

        <div className=" d-grid align-items-center justify-content-center p3 " style={{gridTemplateColumns:"repeat(2,1fr)", placeItems:"center"}}>
        <a href="KitchenDepartment" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741780009/Group_1000006169_2_fiawiu.png"></img></a>
        <a href="KitchenDepartment" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741780124/Group_1000006170_frfzni.png"></img></a>
        </div>

        <h1>UNIT 2:  Preparing and Plating Salads and Salad Dressings</h1>
        <div className=" d-grid justify-content-center align-items-center p3" style={{gridTemplateColumns:"repeat(2,1fr)",placeItems:"center"}}>
        <a href="" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741780348/Group_1000006171_zqkdbv.png"></img></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741780576/Group_1000006173_q3usqz.png"></img></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741780754/Group_1000006172_grrxft.png"></img></a>
        </div>
       </div>


       <div className="d-flex justify-content-end p5">
        <button className="cbtn cbtn-secondary" style={{ width: "15%", height: "50px" }}>All lessons Done</button>
      </div>

      
    </>
    )
}

export default SaladAndSaladDressing;

