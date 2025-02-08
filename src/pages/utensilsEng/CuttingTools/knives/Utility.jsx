import "../../../../fw-cuisining.css";

const Utility = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Knife"><img src="back.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Utility knife</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            A utility knife is a versatile kitchen tool designed for precise cutting tasks.
            It is commonly used for slicing fruits, trimming meats, cutting sandwiches,
            and chopping small vegetables. With its sharp blade and manageable size
            a utility knife provides control and accuracy, making it ideal for detailed
            cutting.
            <br></br>
            <br></br>
            This knife is easy to handle and works well for various kitchen tasks that
            require precision. Some utility knives feature a straight edge, while others
            have a serrated edge for cutting through tougher textures. Keeping th
            blade sharp ensures smooth and efficient cutting performance.
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default Utility;