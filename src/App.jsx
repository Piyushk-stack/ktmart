import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Grocery from "./pages/Grocery";
import PackagedFood from "./pages/PackagedFoods/PackagedFood";
import BreakFastt from "./pages/PackagedFoods/BreakFastt";
import Chocolatess from "./pages/PackagedFoods/Chocolatess";
import Pasta from "./pages/Pasta";
import Jamss from "./pages/PackagedFoods/Jamss";
import Sweet from "./pages/PackagedFoods/Sweet";
import Snackss from "./pages/PackagedFoods/Snackss";
import Cookingoil1 from "./pages/Grocery/kcookingoil/Cookingoil1";
import Ghee from "./pages/Grocery/gheeandvanaspati/Ghee";
import Masala1 from "./pages/Grocery/masala/Masala1";
import Dairy1 from "./pages/Grocery/DairyandBread/Dairy1";
import Dry1 from "./pages/Grocery/dryfruits/Dry1";
import Rice from "./pages/Grocery/riceandrice/Rice";
import Tea from "./pages/Grocery/TeaandCofee/Tea";
import Orall from "./pages/Beauty&PersonalCare/Orall";
import  Baby  from "./pages/Beauty&PersonalCare/Baby";
import Bathandbody from "./pages/Beauty&PersonalCare/Bathandbody";
import Beautyy from "./pages/Beauty&PersonalCare/Beautyy";
import HairCare from "./pages/Beauty&PersonalCare/HairCare";
import HealthP from "./pages/Beauty&PersonalCare/HealthP"
import Drinkss from "./pages/PackagedFoods/Drinkss";

// import Snackss from "./pages/PackagedFoods/Snackss";

// Temporary Login Page (you can style later)
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Login Page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        {/* Future pages */}
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/biscuits" element={<PackagedFood />} />
        <Route path="/breakfast" element={<BreakFastt />} />
        <Route path="/chocolates" element={<Chocolatess/>} />
        <Route path="/pastaa" element={<Pasta/>} />
        <Route path="/jamss" element={<Jamss/>} />
        <Route path="/sweets" element={<Sweet/>} />
        <Route path="/cookingoil" element={<Cookingoil1/>} />
        <Route path="/ghee" element={<Ghee/>} />
        <Route path="/masala1" element={<Masala1/>} />
        <Route path="/dairy" element={<Dairy1/>} />
        <Route path="/dryfruits" element={<Dry1/>} />
        <Route path="/rice" element={<Rice/>} />
        <Route path="/tea" element={<Tea/>} />
        <Route path="/oral" element={<Orall/>} />
        <Route path="/baby" element={<Baby/>} />
        <Route path="/bath" element={<Bathandbody/>} />
        <Route path="/beauty" element={<Beautyy/>} />
        <Route path="/haircare" element={<HairCare/>} />
        <Route path="/health" element={<HealthP/>} />
        <Route path="/drinks" element={<Drinkss/>} />
         <Route path="/snacksdrinks" element={<Snackss/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
