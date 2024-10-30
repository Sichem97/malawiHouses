import Homepages from "./pages/Homepages";
import {Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog"
import BuyPages from "./pages/BuyPages"
import SellPage from "./pages/SellPage"
import RentPages from "./pages/RentPage"
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">

      <Routes>
        
        <Route path="/" element={<Homepages/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/BuyPages" element={<BuyPages/>}/>
        <Route path="/SellPage" element={<SellPage/>}/>
        <Route path="/RentPage" element={<RentPages/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
