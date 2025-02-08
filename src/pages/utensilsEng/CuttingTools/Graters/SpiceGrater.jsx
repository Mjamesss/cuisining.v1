import "../../../../fw-cuisining.css";

const SpiceGrater = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Grater"><img src="back.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Spice Grater</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            You can buy a dedicated spice grater (even more narrow than a rasp grater), but you can also get away with grating spices using a rasp grater or hand grater. The extremely small width prevents the user from accidentally grating fingertips for a more precise grate.
             <br></br>
             <br></br>
Freshly grating spices like whole nutmeg, cinnamon, or star anise make a huge flavor impact in the baked good or dish.

            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default SpiceGrater;