
import "../../fw-cuisining.css";

const Fruits= () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Fruits</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Apple">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804859/Group_11_wybhg6.png"></img>
        </a>
        <a href="Banana">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_12_zrwdet.png"></img>
        </a>
        <a href="Lemon">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_13_ofawna.png"></img>
        </a> 
        <a href="Papaya">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804860/Group_14_tkjcs9.png"></img>
        </a>
        <a href="Pineapple">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804862/Group_15_pfqvhd.png"></img>
        </a>
        <a href="Strawberry">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740804866/Group_1000005996_zwcssh.png"></img>
        </a>
        
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Fruits;