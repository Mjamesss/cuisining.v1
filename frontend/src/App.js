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
import DoneRegister from './pages/login/DoneRegister';
import Testing from './pages/Testing';
import Footer from './components/Footer';
import Customprofile from './pages/customize-profile/customize-profile';
import Navbar from './components/Navbar';
import Homepage from './pages/Landingpage/Homepage';
import About from './components/About'; 
import Utensils from './pages/utensilsEng/Utensils';
import Ingredients from './pages/utensilsEng/Ingredients';
import Cutting from './pages/utensilsEng/Cutting';
import Knife from './pages/utensilsEng/Knife';
import Chefknife from './pages/utensilsEng/CuttingTools/knives/Chefknife';
import Santoku from './pages/utensilsEng/CuttingTools/knives/Santoku';
import CuisiningLogo from './components/CuisiningLogo';


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
import ElectricMixerr from './pages/utensilsEng/MixingTools/ElectricMixer/ElectricMixerr';

import Rubberscraper from './pages/utensilsEng/Rubberscraper';
import Flatscraper from './pages/utensilsEng/MixingTools/Rubberscrapper/Flatscraper';
import Curvescraper from './pages/utensilsEng/MixingTools/Rubberscrapper/Curvescraper';

import GrillingTools from './pages/utensilsEng/GrillingTools/GrilingTools';
import Grills from './pages/utensilsEng/GrillingTools/Grill/Grills';
import Opengrill from './pages/utensilsEng/GrillingTools/Grill/Opengrill';
import Covergrill from './pages/utensilsEng/GrillingTools/Grill/Covergrill';
import Smokergrill from './pages/utensilsEng/GrillingTools/Grill/Smokergrill';
import Grillss from './pages/utensilsEng/GrillingTools/Grill/Grillss';


import Spatula from './pages/utensilsEng/GrillingTools/Spatula/Spatula';
import Turnerspatula from './pages/utensilsEng/GrillingTools/Spatula/Turnerspatula';
import Offsetspatula from './pages/utensilsEng/GrillingTools/Spatula/Offsetspatula';
import Fishspatula from './pages/utensilsEng/GrillingTools/Spatula/Fishspatula';
import Grillspatula from './pages/utensilsEng/GrillingTools/Spatula/Grillspatula';
import Spoonspatula from './pages/utensilsEng/GrillingTools/Spatula/Spoonspatula';
import Slottedspatula from './pages/utensilsEng/GrillingTools/Spatula/Slottedspatula';

import Tongs from './pages/utensilsEng/GrillingTools/Tongs/Tongs';
import Saladtongs from './pages/utensilsEng/GrillingTools/Tongs/Saladtongs';
import Servingtongs from './pages/utensilsEng/GrillingTools/Tongs/Servingtongs';
import Scissortongs from  './pages/utensilsEng/GrillingTools/Tongs/Scissortongs';
import Pastatongs from './pages/utensilsEng/GrillingTools/Tongs/Pastatongs';
import Lockingtongs from './pages/utensilsEng/GrillingTools/Tongs/Lockingtongs';
import Flattongs from './pages/utensilsEng/GrillingTools/Tongs/Flattongs';
import Utilitytongs from './pages/utensilsEng/GrillingTools/Tongs/Utilitytongs';
import Bbqtongs from './pages/utensilsEng/GrillingTools/Tongs/Bbqtongs';

import Bastingbrushes from './pages/utensilsEng/GrillingTools/BastingBrash/Bastingbrushes';
import Naturalbrush from './pages/utensilsEng/GrillingTools/BastingBrash/Naturalbrushes';
import Siliconbrushes from './pages/utensilsEng/GrillingTools/BastingBrash/Siliconbrushes';
import Nylonbrushes from './pages/utensilsEng/GrillingTools/BastingBrash/Nylonbrushes';
import Mopbrushes from './pages/utensilsEng/GrillingTools/BastingBrash/Mopbrushes';

import Cookware from './pages/utensilsEng/Cookware';
import Pans from './pages/utensilsEng/Cookware/Pans/Pans';
import Frypan from './pages/utensilsEng/Cookware/Pans/Frypan';
import Sautepan from './pages/utensilsEng/Cookware/Pans/Sautepan';
import Saucepan from './pages/utensilsEng/Cookware/Pans/Saucepan';
import CastIronSkillet from './pages/utensilsEng/Cookware/Pans/CastIronSkillset';
import Wok from './pages/utensilsEng/Cookware/Pans/Wok';
import Roastingpan from './pages/utensilsEng/Cookware/Pans/RoastingPan';


import Pots from './pages/utensilsEng/Cookware/Pots/pots';
import Brazier from './pages/utensilsEng/Cookware/Pots/Brazier';
import Dutchoven from './pages/utensilsEng/Cookware/Pots/Dutchoven';
import Stockpot from './pages/utensilsEng/Cookware/Pots/Stockpot';
import Fryerpot from './pages/utensilsEng/Cookware/Pots/Fryerpot';
import Pastapot from './pages/utensilsEng/Cookware/Pots/Pastapot';


import Bakeware from './pages/utensilsEng/Cookware/Bakeware/Bakeware';
import CastIronPan from './pages/utensilsEng/Cookware/Bakeware/CastIronPan';
import Loafpan from './pages/utensilsEng/Cookware/Bakeware/Loafpan';
import Sheetpan from './pages/utensilsEng/Cookware/Bakeware/Sheetpan';
import Cakepan from './pages/utensilsEng/Cookware/Bakeware/Cakepan';
import Muffinpan from './pages/utensilsEng/Cookware/Bakeware/Muffinpan';
import Springformpan from './pages/utensilsEng/Cookware/Bakeware/Springformpan';
import Roundcakepan from './pages/utensilsEng/Cookware/Bakeware/Rouncakepan';
import Squarepan from './pages/utensilsEng/Cookware/Bakeware/Squarepan';

import Appliances from './pages/utensilsEng/Appliances';
import BlendingAppliances from './pages/utensilsEng/Appliances/BlendingAppliances/BlendingAppliances';
import CounterTopBlender from './pages/utensilsEng/Appliances/BlendingAppliances/CounterTopBlender';
import ImmersionBlender from './pages/utensilsEng/Appliances/BlendingAppliances/ImmersionBlender';
import PortableBlender from './pages/utensilsEng/Appliances/BlendingAppliances/PortableBlender';
import HighSpeedBlender from './pages/utensilsEng/Appliances/BlendingAppliances/HighSpeedBlender';
import StandMixer from './pages/utensilsEng/Appliances/BlendingAppliances/StandMixer';

import HeatingAppliances from './pages/utensilsEng/Appliances/HeatingAppliances/HeatingAppliances';
import MicrowaveOven from './pages/utensilsEng/Appliances/HeatingAppliances/MicrowaveOven';
import ToasterOven from './pages/utensilsEng/Appliances/HeatingAppliances/ToasterOven';
import ElectricKettle from './pages/utensilsEng/Appliances/HeatingAppliances/ElectricKettle';
import RiceCooker from './pages/utensilsEng/Appliances/HeatingAppliances/RiceCooker';
import AirFryer from './pages/utensilsEng/Appliances/HeatingAppliances/AirFryer';

import FoodStorageAppliances from './pages/utensilsEng/Appliances/FoodStorageAppliances/FoodStorageAppliances';
import Refrigirator from './pages/utensilsEng/Appliances/FoodStorageAppliances/Refrigirator';
import Freezer from './pages/utensilsEng/Appliances/FoodStorageAppliances/Freezer';
import BreadBox from './pages/utensilsEng/Appliances/FoodStorageAppliances/BreadBox';
import Cooler from './pages/utensilsEng/Appliances/FoodStorageAppliances/Cooler';


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

import Courses from './pages/Courses/Courses';
import FundamentalsOfCookery from './pages/Courses/Fundamentals of cookery/FundamentalsOfCookery';
import CommonKitchenTools from './pages/Courses/Fundamentals of cookery/CommonKitchenTools';
import KitchenDepartment from './pages/Courses/Fundamentals of cookery/KitchenDepartment';
import MeasurementsAndConversion from './pages/Courses/Fundamentals of cookery/MeasurementsAndConversion';
import PreparingAppetizers from './pages/Courses/PreparingAppetizers/PreparingAppertizers';
import PreparingEggVagetable from './pages/Courses/PreparingEggVagetable/PreparingEggVagetble';
import IntroToEggDishes from './pages/Courses/PreparingEggVagetable/IntroToEggDishes';
import SaladAndSaladDressing from './pages/Courses/SaladAndSaladDressing/SaladAndSaladDressing';
import PreparingSandwich from './pages/Courses/PreparingSandwiches/PreparingSandwich';

import SandwichTools from './pages/Courses/PreparingSandwiches/SandwichTools';

import AdminLogin from './pages/admin/adminLogin';
import Dashboard from './pages/admin/dashboard';
import Transaction from './pages/admin/transactions';
import Announcement from './pages/admin/reminderNotif';
import UserAdmin from './pages/admin/usersAdmin';
import Feedback from './pages/admin/report-and-feedback.jsx';

import Profile from './pages/Settings/profile';
import PersonalDetails from './pages/Settings/personal-details';
import PasswordSecurity from './pages/Settings/password-security';
import HelpAndSupport from './pages/Settings/help-and-support.jsx';
import Subscriptions from './pages/Settings/subscription.jsx';

import FinalAssessment from './pages/Courses/FinalAssesstment/FinalAssessment.jsx';
import CookingGame from './CookingGame.jsx';
import Certtesting from './certtesting.jsx';

import FoodSafety from './pages/Courses/Fundamentals of cookery/FoodSafety.jsx';
import OccupationalHealth from './pages/Courses/Fundamentals of cookery/OccupationalHealth.jsx'
import KnifeSkills from './pages/Courses/Fundamentals of cookery/KnifeSkills.jsx';
import TypesOfAppetizers from './pages/Courses/PreparingAppetizers/TypesOfAppetisers.jsx';
import ObservingKitchen from './pages/Courses/PreparingAppetizers/ObservingKitchen.jsx';
import PreparingCommonTypesAppetizers from './pages/Courses/PreparingAppetizers/PreparingCommonTypesAppetizers.jsx';
import PlatingAppetizers from './pages/Courses/PreparingAppetizers/PlatingAppetizers.jsx';

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col>
            <Routes>
              {/* Admin */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/userAdmin" element={<UserAdmin />} />
              <Route path="/report&feedback" element={<Feedback />} />
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
              <Route path="/Ingredients" element={<Ingredients />} />
              <Route path="/Cutting" element={<Cutting />} />
              <Route path="/CuisiningLogo" element={<CuisiningLogo />} />
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
               <Route path="ElectricMixerr" element={<ElectricMixerr/>}/>
               {/*Rubber scraper */}
               <Route path="Rubberscraper" element={<Rubberscraper/>}/>

               <Route path="Flatscraper" element={<Flatscraper/>}/>
               <Route path="Curvescraper" element={<Curvescraper/>}/>
               {/*Grilling Tools */}
               <Route path="GrillingTools" element={<GrillingTools/>}/>
               <Route path="Grills" element={<Grills/>}/>
               <Route path="Opengrill" element={<Opengrill/>}/>
               <Route path="Covergrill" element={<Covergrill/>}/>
               <Route path="Smokergrill" element={<Smokergrill/>}/>
               <Route path="Grillss" element={<Grillss/>}/>
        
               {/*Spatula */}
               <Route path="Spatula" element={<Spatula/>}/>
               <Route path="Turnerspatula" element={<Turnerspatula/>}/>
               <Route path="Offsetspatula" element={<Offsetspatula/>}/>
               <Route path="Fishspatula" element={<Fishspatula/>}/>
               <Route path="Grillspatula" element={<Grillspatula/>}/>
               <Route path="Spoonspatula" element={<Spoonspatula/>}/>
               <Route path="Slottedspatula" element={<Slottedspatula/>}/>
               {/*Tongs */}
               <Route path="Tongs" element={<Tongs/>}/>
               <Route path="Saladtongs" element={<Saladtongs/>}/>
               <Route path="Servingtongs" element={<Servingtongs/>}/>
               <Route path="Scissortongs" element={<Scissortongs/>}/>
               <Route path="Pastatongs" element={<Pastatongs/>}/>
               <Route path="Lockingtongs" element={<Lockingtongs/>}/>
               <Route path="Flattongs" element={<Flattongs/>}/>
               <Route path="Utilitytongs" element={<Utilitytongs/>}/>
               <Route path="Bbqtongs" element={<Bbqtongs/>}/>

               {/*Brushes */}
               <Route path="Bastingbrushes" element={<Bastingbrushes/>}/>
               <Route path="Naturalbrush" element={<Naturalbrush/>}/>
               <Route path="Siliconbrushes" element={<Siliconbrushes/>}/>
               <Route path="Nylonbrushes" element={<Nylonbrushes/>}/>
               <Route path="Mopbrushes" element={<Mopbrushes/>}/>

               {/*Cookware */}
               <Route path="Cookware" element={<Cookware/>}/>
               {/*Pans */}
               <Route path="Pans" element={<Pans/>}/>
               <Route path="Frypan" element={<Frypan/>}/>
               <Route path="Sautepan" element={<Sautepan/>}/>
               <Route path="Saucepan" element={<Saucepan/>}/>
               <Route path="CastIronSkillet" element={<CastIronSkillet/>}/>
               <Route path="Wok" element={<Wok/>}/>
               <Route path="Roastingpan" element={<Roastingpan/>}/>

              {/*Pots */}
               <Route path="Pots" element={<Pots/>}/>
               <Route path="Brazier" element={<Brazier/>}/>
               <Route path="Dutchoven" element={<Dutchoven/>}/>
               <Route path="Stockpot" element={<Stockpot/>}/>
               <Route path="Fryerpot" element={<Fryerpot/>}/>
               <Route path="Pastapot" elemenet={<Pastapot/>}/>

               {/*Bakeware */}
               <Route path="Bakeware" element={<Bakeware/>}/>
               <Route path="CastIronPan" element={<CastIronPan/>}/>
               <Route path="Loafpan" element={<Loafpan/>}/>
               <Route path="Sheetpan" element={<Sheetpan/>}/>
                <Route path="Cakepan" element={<Cakepan/>}/>
                <Route path="Muffinpan" element={<Muffinpan/>}/>
                <Route path="Springformpan" element={<Springformpan/>}/>
                <Route path="Roundcakepan" element={<Roundcakepan/>}/>
                <Route path="Squarepan" element={<Squarepan/>}/>
               
               
               {/*Appliances */}
               <Route path="Appliances" element={<Appliances/>}/>
               {/*Blending Appliances */}
               <Route path="BlendingAppliances" element={<BlendingAppliances/>}/>
               <Route path="CounterTopBlender" element={<CounterTopBlender/>}/>
               <Route path="ImmersionBlender" element={<ImmersionBlender/>}/>
               <Route path="PortableBlender" element={<PortableBlender/>}/>
               <Route path="HighSpeedBlender" element={<HighSpeedBlender/>}/>
               <Route path="StandMixer" element={<StandMixer/>}/>

               {/*Heating Appliances */}
               <Route path="HeatingAppliances" element={<HeatingAppliances/>}/>
               <Route path="MicrowaveOven" element={<MicrowaveOven/>}/>
               <Route path="ToasterOven" element={<ToasterOven/>}/>
               <Route path="ElectricKettle" element={<ElectricKettle/>}/>
               <Route path="RiceCooker" element={<RiceCooker/>}/>
               <Route path="AirFryer" element={<AirFryer/>}/>

               {/*Food Storage */}
               <Route path="FoodStorageAppliances" element={<FoodStorageAppliances/>}/>
               <Route path="Refrigirator" element={<Refrigirator/>}/>
               <Route path="Freezer" element={<Freezer/>}/>
               <Route path="BreadBox" element={<BreadBox/>}/>
               <Route path="Cooler" element={<Cooler/>}/>

               {/*Settings */}
               <Route path="/profile" element={<Profile/>}/>
               <Route path="/settings/personal-details" element={<PersonalDetails/>}/>
               <Route path="/settings/PasswordSecurity" element={<PasswordSecurity/>}/>
               <Route path="/settings/help-support" element={<HelpAndSupport/>}/>
               <Route path="/settings/subscription" element={<Subscriptions/>}/>
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

              {/*Courses */}
              <Route path="/Courses" element={<Courses/>}/>
              <Route path="CuisiningLogo" element={<CuisiningLogo/>}/>
              <Route path="FundamentalsOfCookery" element={<FundamentalsOfCookery/>}/>
              <Route path="CommonKitchenTools" element={<CommonKitchenTools/>}/>
              <Route path="KitchenDepartment" element={<KitchenDepartment/>}/>
              <Route path="MeasurementsAndConversion" element={<MeasurementsAndConversion/>}/>
              <Route path="PreparingAppetizers" element={<PreparingAppetizers/>}/>
              <Route path="PreparingEggVagetable" element={<PreparingEggVagetable/>}/>
              <Route path="IntroToEggDishes" element={<IntroToEggDishes/>}/>
              <Route path="SaladAndSaladDressing" element={<SaladAndSaladDressing/>}/>
              <Route path="PreparingSandwich" element={<PreparingSandwich/>}/>


              <Route path="FinalAssessment" element={<FinalAssessment/>}/>
              <Route path="CookingGame" element={<CookingGame/>}/>
              <Route path="/certtesting" element={<Certtesting/>}/>

              <Route path="FoodSafety" element={<FoodSafety/>}/>
              <Route path="OccupationalHealth" element={<OccupationalHealth/>}/>
              <Route path="KnifeSkills" element={<KnifeSkills/>}/>
              <Route path="TypeOfAppetizers" element={<TypesOfAppetizers/>}/>
              <Route path="ObservingKitchen" element={<ObservingKitchen/>}/>
              <Route path="PreparingCommonTypeAppetizers" element={<PreparingCommonTypesAppetizers/>}/>
              <Route path="PlatingAppetizers" element={<PlatingAppetizers/>}/>

              {/*Preparing Sandwiches */}
              <Route path="SandwichTools" element={<SandwichTools/>}/>




            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;