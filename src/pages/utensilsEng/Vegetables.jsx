
import "../../fw-cuisining.css";

const Vegetables= () => {
    return (
       <>
      <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
      <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Vegetables</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Carrots">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806273/Group_21_xwv0nc.png"></img>
        </a>
        <a href="Lettuce">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806273/Group_22_fb5jwu.png"></img>
        </a>
        <a href="Onion">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806270/Group_23_vpv6zs.png"></img>
        </a> 
        <a href="Potato">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806270/Group_24_dujbde.png"></img>
        </a>
        <a href="Tomato">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740806270/Group_25_lcbavj.png"></img>
        </a>
        
        </div>
        </div>
      </div>

      </div>
       </>
    )
}

export default Vegetables;