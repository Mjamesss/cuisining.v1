
import "../../fw-cuisining.css";

const Dairies = () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Dairies</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Butter">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804679/Group_10_dacyo5.png"></img>
        </a>
        <a href="Cheese">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804679/Group_1000005992_n5cuog.png"></img>
        </a>
        <a href="Milk">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804680/Group_1000005993_npkdf4.png"></img>
        </a> 
        <a href="Yogurt">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804680/Group_1000005994_qssqz8.png"></img>
        </a>

        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Dairies;