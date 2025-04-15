
import "../../../fw-cuisining.css";
import CuisiningLogo from "../../../components/CuisiningLogo";

const PreparingSandwich = () =>{
    return(
    <>
    <CuisiningLogo/>
    
    <div className=" p2  d-flex justify-content-center">
       <a href="Courses" className="p2 d-grid justify-content-center"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       <h1 className="p2 d-grid align-items-center justify-content-center">Preparing Sandwiches <p className="p2"> In this course, we will present to you the knowledge and skills that you must have in order to perform the  <br>
       </br>procedures for preparing salads and dressings properly.
       </p></h1>
       </div>

       <div className="d-grid justify-content-center algin-items-center">
        <h1 className="font-weight-700 d-flex algin-items-center justify-content-center">UNIT 1: Introduction to Sandwiches</h1>

        <div className="d-grid align-items-center justify-content-center p5  g5" style={{gridTemplateColumns:"repeat(2,1fr)", placeItems:"center"}}>
        <a href="IntroToEggDishes" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741782621/Group_1000006213_ds1d96.png"></img></a>
        <a href="KitchenDepartment" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741782720/Group_1000006195_ypatmf.png"></img></a>
        <a href="KitchenDepartment" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741783186/Group_1000006197_vdtwrb.png"></img></a>
        </div>

        <h1>UNIT 2: Preparing and Plating Sandwiches</h1>
        <div className="d-grid justify-content-center align-items-center  " style={{gridTemplateColumns:"repeat(2,1fr)",placeItems:"center"}}>
        <a href="" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741782964/Group_1000006196_lt1gar.png"></img></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741783096/Group_1000006198_kdbv1b.png"></img></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1741623339/Group_1000006191_ard9zl.png"></img></a>
        </div>

        
       </div>


       <div className="d-flex justify-content-end p5">
        <button className="cbtn cbtn-secondary" style={{ width: "15%", height: "50px" }}>All lessons Done</button>
      </div>

    </>
    )
}

export default PreparingSandwich;

