import "../../fw-cuisining.css";

const Peelers = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Utensils"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Mixing Tools</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Mixingbowls">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740113635/Group_10_12_suhnf9.png"></img>
        </a>
        <a href="whisk">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740113733/Group_1000005992_10_p3kybu.png"></img>
        </a>
        <a href="Electricmixer">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740113822/Group_1000005994_4_sclnxa.png"></img>
        </a>
        <a href="Rubberscraper">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740113877/Group_1000005995_6_kobrg0.png"></img>
        </a>
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Peelers;