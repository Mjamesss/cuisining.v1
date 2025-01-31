import {useRef} from 'react';
import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Homepage = () => {
    return (
        <>
        <Navbar />
        <div className="container background-cover b-dashed " style={{height:"200px", width:"100%",backgroundSize:"cover",}}>
          <img className="background-cover" src="" alt="nigga" style={{backgroundSize:"cover",}}></img>
        </div>


        <Footer />
        </>
    )
}

export default Homepage;