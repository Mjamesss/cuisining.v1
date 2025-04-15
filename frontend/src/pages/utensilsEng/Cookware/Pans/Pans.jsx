import "../../../../fw-cuisining.css";

const Pans = () =>{
    return (
        <>
        <div className="p5 ">
       <a href="Cookware"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Pans</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Frypan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711003/Group_10_24_kwgzpj.png"></img>
            
        </a>
        <a href="Sautepan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711087/Group_1000005992_22_jtofab.png"></img>
            
        </a>
        <a href="Saucepan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711135/Group_1000005993_13_wr0nmg.png"></img>
            
        </a>
        <a href="CastIronSkillet">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711207/Group_1000005994_7_g4utrz.png"></img>
        </a>
        <a href="Wok">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711259/Group_1000005995_9_d1h9qt.png"></img>
        </a>
        <a href="Roastingpan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740711341/Group_1000005996_6_zzprf6.png"></img>
        </a>
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Pans;