import "../../../../fw-cuisining.css";
import { useEffect } from "react";

const Bakeware = () =>{
    useEffect(() => {
        // Change the document title when this page is rendered
        document.title = "CuiSining - Bakeware";
      }, []);
    return (
        <>
        <div className="p5 ">
       <a href="Cookware"><img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739376994/back_pzol0l.png"></img> </a>
       </div>
       <div className=" p2 d-flex justify-content-center align-items-center">
        <div className=" d-grid justify-content-center align-items-center">
            <div className=" p2 d-grid">
        <h1>Bakeware</h1>
        <div className="d-grid g4" style={{gridTemplateColumns:"repeat(3,1fr)",}}>
        
        <a href="Castironpan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740713264/Group_10_26_nzqjwf.png"></img>
            
        </a>
        <a href="Loafpan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740713448/Group_1000005992_24_boiu1r.png"></img>
            
        </a>
        <a href="Sheetpan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740713577/Group_1000005993_15_tz4yzh.png"></img>
            
        </a>
        <a href="Cakepan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740713690/Group_1000005994_9_o1qge0.png"></img>
        </a>
        <a href="Muffinpan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740713743/Group_1000005995_11_yiobpq.png"></img>
        </a>
        <a href="Springformpan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740713828/Group_1000005996_7_s5qdlb.png"></img>
            
        </a>
        <a href="Roundcakepan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740713880/Group_1000005995_12_zypmsw.png"></img>
            
        </a>
        <a href="Squarepan">
            <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740713953/Group_1000005996_8_lim7lt.png"></img>
        </a>
       
        </div>
        </div>
      </div>

      </div>

       </>
    )
}
export default Bakeware;