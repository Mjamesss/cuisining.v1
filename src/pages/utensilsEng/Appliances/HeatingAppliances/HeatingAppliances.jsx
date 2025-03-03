import "../../../../fw-cuisining.css";

const HeatingAppliances = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Appliances"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Heating Appliances</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="MicrowaveOven">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740725534/Group_10_28_pev1ac.png"></img>
            
        </a>
        <a href="ToasterOven">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740725626/Group_1000005992_26_drc3tt.png"></img>
            
        </a>
        <a href="ElectricKettle">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740725810/Group_1000005993_17_yoq6d5.png"></img>
            
        </a>
        <a href="RiceCooker">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740725898/Group_1000005994_11_diqtmn.png"></img>
        </a>
        <a href="AirFryer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740725979/Group_1000005997_5_iwlteb.png"></img>
        </a>
       
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default HeatingAppliances;