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
            <h2 className="font-weight-900">Cooking Utensils Identification</h2>  
            <div className=" d-grid justify-content-between g4" style={{width:"100%",gridTemplateColumns:"repeat(3,1fr)"}}>

            <a  className="" href="Cutting" alt="">
                <img src="cutting.png"></img>
            </a>
            <a href="#scissors" alt="">
                <img src="measuring.png"></img>
            </a>
            <a href="#scissors" alt="">
                <img src="mixing.png"></img>
            </a>
            <a href="#scissors" alt="">
                <img src="grilling.png"></img>
            </a>
            <a href="#scissors" alt="">
                <img src="cookware.png"></img>
            </a>
            <a href="#scissors" alt="">
                <img src="appliances.png"></img>
            </a>
            </div>
            </div>
        </div>
        
        <div className=" p3">
            <div className="" style={{width:"100%",}}>
            <h2>Ingridients Identification</h2>
            <div className="d-grid g4" style={{gridTemplateColumns:"repeat(4,1fr)",width:"90%",}}>
            <a href="" alt="">
                <img src="protein.png"></img>
            </a>
            <a href="" alt="">
                <img src="dairies.png"></img>
            </a>
            <a href="" alt="">
                <img src="grain.png"></img>
            </a>
            <a href="" alt="">
                <img src="fruit.png"></img>
            </a>
            <a href="" alt="">
                <img src="vagetable.png"></img>
            </a>
            <a href="" alt="">
                <img src="herb.png"></img>
            </a>
            <a href="" alt="">
                <img src="oil.png"></img>
            </a>
            <a href="" alt="">
                <img src="seasoning.png"></img>
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