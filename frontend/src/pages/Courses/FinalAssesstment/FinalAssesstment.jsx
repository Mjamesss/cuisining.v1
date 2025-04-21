import "../../../fw-cuisining.css";
import Navbar from '../../../components/Navbar';

const FinalAssesstment = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>

      <Navbar />
      <div style={{ width: "100%", margin: "0", padding: "100px 0" }}>

        <div style={{ width: "100%", marginBottom: "100px" }}>

          {/* FIRST SECTION */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
            <h1 style={{
              fontSize: "26px", fontWeight: "800", margin: "0 0 30px 0",
              fontFamily: "'Nunito', sans-serif", color: "#000000", textAlign: "center", color: "#000000" }}>
                FUNDAMENTALS OF <span style={{color: "#C1B857"}}>PROFESSIONAL COOKERY</span></h1>
            <p className="" 
                       style={{ marginLeft: "5%", marginBottom: "50px", marginTop:"1%", fontSize:"18px", maxWidth:"87%", lineHeight: "1.6", textAlign: "center",}}>
                       This prerequisite module will present you the knowledge and skills that you must possess 
                       inside the kitchen before performing hands-on food preparation. 
            </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default FinalAssesstment;