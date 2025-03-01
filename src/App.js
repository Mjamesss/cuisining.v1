import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import L from './pages/login/L'; // Import Login Component
import S from './pages/login/S'; // Import Sign Up Component
import ForgotPass from './pages/login/ForgotPass'; // Import Forgot Password Component
import OTP from './pages/login/OTP'; // Import OTP Component
import SetNewPass from './pages/login/SetNewPass'; // Import Set New Password Component
import Done from './pages/login/Done'; // Import Done Component
import Landing from './pages/login/Landing'; // Import Home Component
import DoneRegister from './pages/login/DoneRegister'; // Import Done Register Component
import Testing from './pages/Testing';
import Footer from './components/Footer';
import Customprofile from './pages/customize-profile/customize-profile';
import Navbar from './components/Navbar';
import Homepage from './pages/Landingpage/Homepage';
import About from './components/About'; 
import Utensils from './pages/utensilsEng/Utensils';
import Cutting from './pages/utensilsEng/Cutting';
import Knife from './pages/utensilsEng/Knife';
import Chefknife from './pages/utensilsEng/CuttingTools/knives/Chefknife';
import Santoku from './pages/utensilsEng/CuttingTools/knives/Santoku';

import Boning from './pages/utensilsEng/CuttingTools/knives/Boning';
import Bread from './pages/utensilsEng/CuttingTools/knives/Bread';
import Clever from './pages/utensilsEng/CuttingTools/knives/Clever';
import Paring from './pages/utensilsEng/CuttingTools/knives/Paring';
import Steak from './pages/utensilsEng/CuttingTools/knives/Steak';
import Fillet from './pages/utensilsEng/CuttingTools/knives/Fillet';
import Scissors from './pages/utensilsEng/Scissors';
import Poultry from './pages/utensilsEng/CuttingTools/scissors/Poultry';
import Wusthof from './pages/utensilsEng/CuttingTools/scissors/Wusthof';
import Household from './pages/utensilsEng/CuttingTools/scissors/Household';
import HerbScissor from './pages/utensilsEng/CuttingTools/scissors/HerbScissor';
import SeafoodScissors from './pages/utensilsEng/CuttingTools/scissors/SeafoodScissors';
import Multipurpose from './pages/utensilsEng/CuttingTools/scissors/Multipurpose';
import Peelers from './pages/utensilsEng/Peelers';
import Swivel from './pages/utensilsEng/CuttingTools/Peelers/Swivel';
import Swis from './pages/utensilsEng/CuttingTools/Peelers/Swis';
import Serrated from './pages/utensilsEng/CuttingTools/Peelers/Serrated';
import Julienne from './pages/utensilsEng/CuttingTools/Peelers/Julienne';
import Mechanical from './pages/utensilsEng/CuttingTools/Peelers/Mechanical';
import Rotary from './pages/utensilsEng/CuttingTools/Peelers/Rotary';
import Landcashier from './pages/utensilsEng/CuttingTools/Peelers/Landcashier';
import Grater from './pages/utensilsEng/Grater';
import BoxGrater from './pages/utensilsEng/CuttingTools/Graters/BoxGrater';
import HandGrater from './pages/utensilsEng/CuttingTools/Graters/HandGrater';
import RaspGrater from './pages/utensilsEng/CuttingTools/Graters/RaspGrater';
import MandolineGrater from './pages/utensilsEng/CuttingTools/Graters/MandolineGrater';
import RotaryGrater from './pages/utensilsEng/CuttingTools/Graters/RotaryGrater';
import SpiceGrater from './pages/utensilsEng/CuttingTools/Graters/SpiceGrater';

import Measuring from './pages/utensilsEng/Measuring';
import MeasuringCup from './pages/utensilsEng/MeasuringTools/MeasurigCup';
import DryMeasuring from './pages/utensilsEng/MeasuringTools/DryMeasuring';
import LiquidMeasure from './pages/utensilsEng/MeasuringTools/LiquidMeasure';
import MeasuringSpoon from './pages/utensilsEng/MeasuringTools/MeasuringSpoon';
import Collapsemeasure from './pages/utensilsEng/MeasuringTools/Collapsemeasure';
import Digitalmeasure from './pages/utensilsEng/MeasuringTools/Digitalmeasure';
import Teaspoon from './pages/utensilsEng/MeasuringTools/Teaspoon';
import Tablespoon from './pages/utensilsEng/MeasuringTools/Tablespoon';

import Kitchenscale from './pages/utensilsEng/Kitchenscale';
import Mechanicalscale from './pages/utensilsEng/KitchenScale/Mechanicalscale';
import Digitalscale from './pages/utensilsEng/KitchenScale/Digitalscale';
import Smartnutritionscale from './pages/utensilsEng/KitchenScale/Smartnutritionscale';
import Hangingscale from './pages/utensilsEng/KitchenScale/Hangingscale';
import Largecapacityscale from './pages/utensilsEng/KitchenScale/Largecapacityscale';
import Gramscale from './pages/utensilsEng/KitchenScale/Gramscale';

import Thermometer from './pages/utensilsEng/Thermometer';
import Oventhermometer from './pages/utensilsEng/Thermometer/Oventhermometer';
import Candythermometer from './pages/utensilsEng/Thermometer/Candythermometer';
import Fridgethermometer from './pages/utensilsEng/Thermometer/Fridgethermometer';
import Meatthermometer from './pages/utensilsEng/Thermometer/Meatthermometer';

import Timer from './pages/utensilsEng/Timer';
import Mechanicaltimer from './pages/utensilsEng/Timer/Mechanicaltimer';
import Digitaltimer from './pages/utensilsEng/Timer/Digitaltimer';

import Mixing from './pages/utensilsEng/Mixing';
import Mixingbowls from './pages/utensilsEng/MixingTools/Mixingbowl/Mixingbowls';
import Stainlessbowl from './pages/utensilsEng/MixingTools/Mixingbowl/Stainlessbowl';
import Glassbowl from './pages/utensilsEng/MixingTools/Mixingbowl/Glassbowl';
import Plasticbowl from './pages/utensilsEng/MixingTools/Mixingbowl/Plasticbowl';

import Whisk from './pages/utensilsEng/Whisk';
import Whiskk from './pages/utensilsEng/MixingTools/Whisks/Whiskk';
import Kettlewhisk from './pages/utensilsEng/MixingTools/Whisks/Kettlewhisk';
import Minibarwhisk from './pages/utensilsEng/MixingTools/Whisks/Minibarwhisk';
import Flatwhisk from './pages/utensilsEng/MixingTools/Whisks/Flatwhisk';
import Spiralwhisk from './pages/utensilsEng/MixingTools/Whisks/Spiralwhisk';
import Doughwhisk from './pages/utensilsEng/MixingTools/Whisks/Doughwhisk';

import Electricmixer from './pages/utensilsEng/Electricmixer';
import Handmixer from './pages/utensilsEng/MixingTools/ElectricMixer/Handmixer';
import Standmixer from './pages/utensilsEng/MixingTools/ElectricMixer/Standmixer';

import Rubberscraper from './pages/utensilsEng/Rubberscraper';
import Flatscraper from './pages/utensilsEng/MixingTools/Rubberscrapper/Flatscraper';

import Proteins from './pages/utensilsEng/Protein'; 
import Beef from './pages/utensilsEng/Proteins/Beef';
import ChickenBreast from './pages/utensilsEng/Proteins/Chickenbreast';
import CodFillet from './pages/utensilsEng/Proteins/Codfillet'; 
import GroundBeef from './pages/utensilsEng/Proteins/Groundbeef'; 
import Shrimp from './pages/utensilsEng/Proteins/Shrimp';
import Tofu from './pages/utensilsEng/Proteins/Tofu';
import Tuna from './pages/utensilsEng/Proteins/Tuna';

import Dairies from './pages/utensilsEng/Dairies';
import Buttter from './pages/utensilsEng/Dairies/Butter';
import Cheese from './pages/utensilsEng/Dairies/Cheese';
import Milk from './pages/utensilsEng/Dairies/Milk';
import Yogurt from './pages/utensilsEng/Dairies/Yogurt';

import GrainStarches from './pages/utensilsEng/GrainStarches';
import Barley from './pages/utensilsEng/GrainStarches/Barley';
import Buckwheat from './pages/utensilsEng/GrainStarches/Buckwheat';
import Corn from './pages/utensilsEng/GrainStarches/Corn';
import Farro from './pages/utensilsEng/GrainStarches/Farro';

import Fruits from './pages/utensilsEng/Fruits';
import Apple from './pages/utensilsEng/Fruits/Apple';
import Banana from './pages/utensilsEng/Fruits/Banana'; 
import Lemon from './pages/utensilsEng/Fruits/Lemon';
import Papaya from './pages/utensilsEng/Fruits/Papaya';
import Pineapple from './pages/utensilsEng/Fruits/Pineapple';
import Strawberry from './pages/utensilsEng/Fruits/Strawberry';

import Vegetables from './pages/utensilsEng/Vegetables';
import Carrots from './pages/utensilsEng/Vegetables/Carrots';
import Lettuce from './pages/utensilsEng/Vegetables/Lettuce';
import Onion from './pages/utensilsEng/Vegetables/Onion';
import Potato from './pages/utensilsEng/Vegetables/Potato';
import Tomato from './pages/utensilsEng/Vegetables/Tomato';

import HerbsSpices from './pages/utensilsEng/HerbsSpices';
import BayLeaf from './pages/utensilsEng/HerbsSpices/BayLeaf';
import Chives from './pages/utensilsEng/HerbsSpices/Chives';
import CurryPowder from './pages/utensilsEng/HerbsSpices/CurryPowder';
import Paprika from './pages/utensilsEng/HerbsSpices/Paprika';
import Rosemary from './pages/utensilsEng/HerbsSpices/Rosemary';

import OilFats from './pages/utensilsEng/OilFats';
import CanolaOil from './pages/utensilsEng/OilFats/CanolaOil';
import CoconutOil from './pages/utensilsEng/OilFats/CoconutOil';
import Lard from './pages/utensilsEng/OilFats/Lard';
import OliveOil from './pages/utensilsEng/OilFats/OliveOil';

import SeasoningCondiments from './pages/utensilsEng/SeasoningCondiments';
import FishSauce from './pages/utensilsEng/SeasoningCondiments/FishSauce';
import HotSauce from './pages/utensilsEng/SeasoningCondiments/HotSauce';
import Pepper from './pages/utensilsEng/SeasoningCondiments/Pepper';
import Salt from './pages/utensilsEng/SeasoningCondiments/Salt';
import SoySauce from './pages/utensilsEng/SeasoningCondiments/SoySauce';

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col>
            <Routes>
              {/* Login Pages */}
              <Route path="/" element={<L />} />
              <Route path="/signup" element={<S />} />
              <Route path="/ForgotPass" element={<ForgotPass />} />
              <Route path="/OTP" element={<OTP />} />
              <Route path="/SetNewPass" element={<SetNewPass />} />
              <Route path="/Done" element={<Done />} />
              <Route path="/Landing" element={<Landing />} />       
              <Route path="/DoneRegister" element={<DoneRegister />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/navbar" element={<Navbar/>} />
              <Route path="/customize-profile" element={<Customprofile />} />
              <Route path="/Home-Page" element={<Homepage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Utensils" element={<Utensils />} />
              <Route path="/Cutting" element={<Cutting />} />
              {/* Knivess*/}
              <Route path="/Knife" element={<Knife />} />
              <Route path="/Chefknife" element={<Chefknife/>}/>
               <Route path="/Santoku" element={<Santoku/>}/>
               <Route path="/Boning" element={<Boning/>}/>
               <Route path="/Bread" element={<Bread/>}/>
               <Route path="/Clever" element={<Clever/>}/>
               <Route path="/Paring" element={<Paring/>}/>
               <Route path="/Steak" element={<Steak/>}/>
               <Route path="/Fillet" element={<Fillet/>}/>
               {/* Scissors */}
               <Route path="/Scissors" element={<Scissors/>} />
               <Route path="/Poultry" element={<Poultry/>} />
               <Route path="/Wusthof" element={<Wusthof/>} />
               <Route path="/HouseHold" element={<Household/>}/>
               <Route path="/HerbScissor" element={<HerbScissor/>}/>
               <Route path="/SeafoodScissors" element={<SeafoodScissors/>}/>
               <Route path="/Multipurpose" element={<Multipurpose/>}/>
               {/* Peelers*/}
               <Route path="/Peelers" element={<Peelers/>}/>
               <Route path="/Swivel" element={<Swivel/>}/>
               <Route path="/Swis" element={<Swis/>}/>
               <Route path="/Landcashier" element={<Landcashier/>}/>
               <Route path="/Serrated" element={<Serrated/>}/>
               <Route path="/Julienne" element={<Julienne/>}/>
               <Route path="/Mechanical" element={<Mechanical/>}/>
               <Route path="/Rotary" element={<Rotary/>}/>
               {/*Grater*/}
               <Route path="/Grater" element={<Grater/>}/>
               <Route path="BoxGrater" element={<BoxGrater/>}/>
               <Route path="/HandGrater" element={<HandGrater/>}/>
               <Route path="RaspGrater" element={<RaspGrater/>}/>
               <Route path="MandolineGrater" element={<MandolineGrater/>}/>
               <Route path="RotaryGrater" element={<RotaryGrater/>}/>
               <Route path="SpiceGrater" element={<SpiceGrater/>}/>
               {/*Measuring*/}
               <Route path="/Measuring" element={<Measuring/>}/>
               <Route path="Measuringcup" element={<MeasuringCup/>}/>
               <Route path="DryMeasuring" element={<DryMeasuring/>}/>
               <Route path="LiquidMeasure" element={<LiquidMeasure/>}/>
               <Route path="MeasuringSpoon" element={<MeasuringSpoon/>}/>
               <Route path="Collapsemeasure" element={<Collapsemeasure/>}/>
               <Route path="Digitalmeasure" element={<Digitalmeasure/>} />
               <Route path="Teaspoon" element={<Teaspoon/>}/>
               <Route path="Tablespoon" element={<Tablespoon/>}/>
               {/*Kitchen Scale */}
               <Route path="Kitchenscale" element={<Kitchenscale/>}/>
               <Route path="Mechanicalscale" element={<Mechanicalscale/>}/>
               <Route path="Digitalscale" element={<Digitalscale/>}/>
               <Route path="Smartnutritionscale" element={<Smartnutritionscale/>}/>
               <Route path="Hangingscale" element={<Hangingscale/>}/>
               <Route path="Largecapacityscale" element={<Largecapacityscale/>}/>
               <Route path="Gramscale" element={<Gramscale/>}/>
               {/*thermometer*/}
               <Route path="/Thermometer" element={<Thermometer/>}/>
               <Route path="Oventhermometer" element={<Oventhermometer/>}/>
               <Route path="Candythermometer" element={<Candythermometer/>}/>
               <Route path="Fridgethermometer" element={<Fridgethermometer/>}/>
               <Route path="Meatthermometer" element={<Meatthermometer/>}/>
               {/* Timer*/}
               <Route path="Timer" element={<Timer/>}/>
               <Route path="Mechanicaltimer" element={<Mechanicaltimer/>}/>
               <Route path="Digitaltimer" element={<Digitaltimer/>}/>
               {/*Mixing Tools */}
               <Route path="Mixing" element={<Mixing/>}/>
               <Route path="Mixingbowls" element={<Mixingbowls/>}/>
               <Route path="Stainlessbowl" element={<Stainlessbowl/>}/>
               <Route path="Glassbowl" element={<Glassbowl/>}/>
               <Route path="Plasticbowl" element={<Plasticbowl/>}/>
               {/*Whisk */}
               <Route path="Whisk" element={<Whisk/>}/>
               <Route path="Whiskk" element={<Whiskk/>}/>
               <Route path="Kettlewhisk" element={<Kettlewhisk/>}/>
               <Route path="Minibarwhisk" element={<Minibarwhisk/>}/>
               <Route path="Flatwhisk" element={<Flatwhisk/>}/>
               <Route path="Spiralwhisk" element={<Spiralwhisk/>}/>
               <Route path="Doughwhisk" element={<Doughwhisk/>}/>
               {/*Electric Mixer*/}
               <Route path="Electricmixer" element={<Electricmixer/>}/>
               <Route path="Handmixer" element={<Handmixer/>}/>
               <Route path="Standmixer" element={<Standmixer/>}/>
               {/*Rubber scraper */}
               <Route path="Rubberscraper" element={<Rubberscraper/>}/>
               <Route path="Flatscraper" element={<Flatscraper/>}/>               
               {/*Protein*/}
               <Route path="/proteins" element={<Proteins/>}/>
               <Route path="/Beef" element={<Beef/>} />
               <Route path="/ChickenBreast" element={<ChickenBreast/>}/>
               <Route path="/CodFillet" element={<CodFillet/>}/>
               <Route path="/GroundBeef" element={<GroundBeef/>}/>
               <Route path="/Shrimp" element={<Shrimp/>}/>
               <Route path="/Tofu" element={<Tofu/>}/>
               <Route path="/Tuna" element={<Tuna/>}/>
               {/*Dairies*/}
               <Route path="/Dairies" element={<Dairies/>}/>
               <Route path="/Butter" element={<Buttter/>}/>
               <Route path="/Cheese" element={<Cheese/>}/>
               <Route path="/Milk" element={<Milk/>}/>
               <Route path="/Yogurt" element={<Yogurt/>}/>
               {/*Grain&Starches*/}
               <Route path="/GrainStarches" element={<GrainStarches/>}/>
               <Route path="/Barley" element={<Barley/>}/>
               <Route path="/Buckwheat" element={<Buckwheat/>}/>
               <Route path="/Corn" element={<Corn/>}/>
               <Route path="/Farro" element={<Farro/>}/>
               {/*Fruits*/}
              <Route path="/Fruits" element={<Fruits/>}/>
              <Route path="/Apple" element={<Apple/>}/>
              <Route path="/Banana" element={<Banana/>}/>
              <Route path="/Lemon" element={<Lemon/>}/>
              <Route path="/Papaya" element={<Papaya/>}/>
              <Route path="/Pineapple" element={<Pineapple/>}/>
              <Route path="/Strawberry" element={<Strawberry/>}/>
              {/*Vegetables*/}
              <Route path="/Vegetables" element={<Vegetables/>}/>
              <Route path="/Carrots" element={<Carrots/>}/>
              <Route path="/Lettuce" element={<Lettuce/>}/>
              <Route path="/Onion" element={<Onion/>}/>
              <Route path="/Potato" element={<Potato/>}/>
              <Route path="/Tomato" element={<Tomato/>}/>
              {/*Herbs & Spices*/}
              <Route path="/HerbsSpices" element={<HerbsSpices/>}/>
              <Route path="/BayLeaf" element={<BayLeaf/>}/>
              <Route path="/Chives" element={<Chives/>}/>
              <Route path="/CurryPowder" element={<CurryPowder/>}/>
              <Route path="/Paprika" element={<Paprika/>}/>
              <Route path="/Rosemary" element={<Rosemary/>}/>
              {/*Oil & Fats*/}
              <Route path="/OilFats" element={<OilFats/>}/>
              <Route path="/CanolaOil" element={<CanolaOil/>}/>
              <Route path="/CoconutOil" element={<CoconutOil/>}/>
              <Route path="/Lard" element={<Lard/>}/>
              <Route path="/OliveOil" element={<OliveOil/>}/>
              {/*SeasoningCondiments*/}
              <Route path="/SeasoningCondiments" element={<SeasoningCondiments/>}/>
              <Route path="/FishSauce" element={<FishSauce/>}/>
              <Route path="/HotSauce" element={<HotSauce/>}/>
              <Route path="/Pepper" element={<Pepper/>}/>
              <Route path="/Salt" element={<Salt/>}/>
              <Route path="/SoySauce" element={<SoySauce/>}/>
            
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;