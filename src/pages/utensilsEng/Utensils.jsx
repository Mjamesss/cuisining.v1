import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Utensils = () => {
    return(
        <>
        <Navbar/>  
        <div className="  d-grid justify-content-center" style={{width:"100%",margin:"0",padding:"0",}}>
        <div className="d-flex justify-content-center align-items-center p3 " style={{}}>
            <div className="" style={{width:"100%",}}>
            <h2 className="font-weight-700">Cooking Utensils Identification</h2>  
            <div className=" d-grid justify-content-between g4 " style={{width:"100%",gridTemplateColumns:"repeat(3,1fr)"}}>

            <a  className="" href="Cutting" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739381320/cutting_yq3wh7.png"></img>
            </a>
            <a href="Measuring" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739381334/measuring_dglujl.png"></img>
            </a>
            <a href="Mixing" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739381430/mixing_pxzqok.png"></img>
            </a>
            <a href="GrillingTools" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739381710/grilling_xy0zfc.png"></img>
            </a>
            <a href="Cookware" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739381843/cookware_fdxftf.png"></img>
            </a>
            <a href="Appliances" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382553/appliances_sgokxw.png"></img>
            </a>
            </div>
            </div>
        </div>
        
        <div className=" p3">
            <div className="" style={{width:"100%",}}>
            <h2 classname="font-weight-700">Ingridients Identification</h2>
            <div className="d-grid g4" style={{gridTemplateColumns:"repeat(4,1fr)",width:"90%",}}>
            <a href="" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382685/protein_jecupb.png"></img>
            </a>
            <a href="" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382708/dairies_oala88.png"></img>
            </a>
            <a href="" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382747/grain_sq8xmz.png"></img>
            </a>
            <a href="" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382754/fruit_a8xqhk.png"></img>
            </a>
            <a href="" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382766/vagetable_ro4miv.png"></img>
            </a>
            <a href="" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382775/herb_kiphd5.png"></img>
            </a>
            <a href="" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382844/oil_io4vhh.png"></img>
            </a>
            <a href="" alt="">
                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1739382876/seasoning_jaxcyd.png"></img>
            </a>
            </div>
            </div>
           </div>

           </div>
        
        <Footer/>
        </>
        
    )
}
export default Utensils;