import "../../fw-cuisining.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Utensils = () => {
    return (
        <>
            <Navbar />
            <div className="d-grid justify-content-center" style={{ width: "100%", margin: "0", padding: "55px 0" }}> 
                <div className="d-flex justify-content-center align-items-center p5">
                    <div style={{ width: "100%" }}>
                        <h2 className="font-weight-700 ;">Cooking Utensils Identification</h2>
                        <div className="d-grid justify-content-between g4" style={{ width: "100%", gridTemplateColumns: "repeat(3,1fr)" }}>
                            <a href="Cutting" alt=""> 
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/Group_1000005992_hxapwx.png" />
                            </a>
                            <a href="Measuring" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/Group_10_b2dfuj.png" />
                            </a>
                            <a href="Mixing" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/9_akb2gk.png" />
                            </a>
                            <a href="#Grilling" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/Group_1000005999_nqki9c.png" />
                            </a>
                            <a href="#Cookware" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844131/Group_1000006123_qqvvyi.png" />
                            </a>
                            <a href="#Appliances" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844132/Group_1000006124_mbpotq.png" />
                            </a>
                        </div>
                    </div>
                </div>
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
                <div className="p5">
                    <div style={{ width: "100%" }}>
                        <h2 className="font-weight-700">Ingredients Identification</h2>
                        <div className="d-grid g4" style={{ gridTemplateColumns: "repeat(4,1fr)", width: "90%" }}>
                            <a href="Proteins" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844574/Frame_1000006205_pyfydd.png" />
                            </a>
                            <a href="Dairies" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844571/Frame_26086231_zhyegt.png" />
                            </a>
                            <a href="GrainStarches" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844572/Frame_26086233_hgathp.png" />
                            </a>
                            <a href="Fruits" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844572/Frame_26086234_klto9r.png" />
                            </a>
                            <a href="Vegetables" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844572/Frame_26086235_zbprq3.png" />
                            </a>
                            <a href="HerbsSpices" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844572/Frame_26086236_mdgru4.png" />
                            </a>
                            <a href="OilFats" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844573/Frame_26086237_mtyafy.png" />
                            </a>
                            <a href="SeasoningCondiments" alt="">
                                <img src="https://res.cloudinary.com/dm6wodni6/image/upload/v1740844573/Frame_26086238_lx0wbl.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Utensils;