import Homepages from "./pages/Homepages";
import {Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog"
import BuyPages from "./pages/BuyPages"
import CustomerCare from "./pages/Component/CustomerCare";
import ContactUs from "./pages/ContactUs";
import DashAuthentification from "./pages/Component/DashAuthentification";
import DashBord from "./pages/Component/DashBord";
import DashHeader from "./pages/Component/DashHeader";
import DashHome from "./pages/Component/DashHome";
import Employee from "./pages/Component/Employee";
import LogIn from "./pages/LogIn";
import ProductDetail from "./pages/Component/ProductDetail";
import ProductDetailRent from "./pages/Component/ProductDetailRent";
import ProdManagement from "./pages/Component/ProdManagement";
import PostProduct from "./pages/Component/PostProduct";
import Register from "./pages/Component/Register";
import RentPages from "./pages/RentPage"
import SellPage from "./pages/SellPage"
// import DashBord from "./DashBord/Dashboard"

function App() {
  return (
    <div className="App">

      <Routes>
        
        <Route path="/" element={<Homepages/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/BuyPages" element={<BuyPages/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/CustomerCare" element={<CustomerCare/>}/>
        <Route path="/DashAuthentification" element={<DashAuthentification/>}/>
        <Route path="/DashBord" element={<DashBord/>}/>
        <Route path="/DashHeader" element={<DashHeader/>}/>
        <Route path="/DashHome" element={<DashHome/>}/>
        <Route path="/Employee" element={<Employee/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/rental/:id" element={<ProductDetailRent />} />
        <Route path="/ProdManagement" element={<ProdManagement/>}/>
        <Route path="/PostProduct" element={<PostProduct/>}/>
        <Route path="/SellPage" element={<SellPage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/RentPage" element={<RentPages/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
