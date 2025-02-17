import "../../../../fw-cuisining.css";

const KitchenShears = () => {
    return(
        <>
         <div className="p5 ">
       <a href="Scissors"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
        <div className="p2 d-grid justify-content-center align-items-center">
        <h1 className="font-weight-900">Kitchen Shears</h1>
            <p className=" p3 d-flex justify-content-center" style={{fontSize:"30px",maxWidth:"1000px",}}>  
            Kitchen shears are versatile cutting tools designed for various food preparation tasks. They have strong, stainless steel blades that can cut through meats, herbs, vegetables, and even bones. Unlike regular scissors, kitchen shears often include additional features like a built-in nutcracker, bottle opener, or fish scaler.
            <br></br>
            <br></br>
These shears provide more control and precision than knives for certain tasks, making them an essential kitchen accessory. Their sturdy construction ensures longevity, while their ergonomic design offers comfort during use.
            </p>

            <img src="chefknifepic.png"></img>
         
        </div>
        </>
    )
}

export default KitchenShears;