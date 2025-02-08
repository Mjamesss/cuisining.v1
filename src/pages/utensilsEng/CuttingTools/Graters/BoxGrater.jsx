import "../../../../fw-cuisining.css";

const BoxGrater = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Grater"><img src="back.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Box Grater</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            This is the four-sided kitchen grater, each side with different size holes. It often has a side for slicing as well. It has a handle to keep the grater sturdy. Use it to grate hard cheeses like Cheddar and Mozzarella, shred potatoes for hashbrowns, grate chocolate for desserts, cut butter for biscuits, shred cucumbers and carrots, or ricing cauliflower.
             <br></br>
             <br></br>
The only downside to a box grater is that it takes up more room than other types of kitchen graters.

            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default BoxGrater;