import "../../fw-cuisining.css";

const Appliances = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Appliances</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="BlendingAppliances">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710565/Group_10_23_safwdo.png"></img>
        </a>
        <a href="HeatingAppliances">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710638/Group_1000005992_21_xyij7j.png"></img>
        </a>
        <a href="FoodStorageAppliances">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740710702/Group_1000005993_11_bupwm5.png"></img>
        </a>
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Appliances;