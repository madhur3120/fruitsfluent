
import './App.css';
import Header from './components/layout/Header/Header';
import Contact from './components/layout/Contact/Contact';
import About from './components/layout/About/About'
import Products from './components/Products/Products.js'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Home from '../src/components/Home/Home.js'
import Footer from './components/layout/Footer/Footer'
import { useEffect } from 'react';
import ContactDisplay from './components/layout/Contact/ContactDisplay';
import WebFont from 'webfontloader'
import Newproduct from './components/Admin/newproduct';
import Displayproductdetail from './components/Admin/displayproductdetails';
import Notestate from './components/context/notestate';
import Productdetails from './components/Products/Productdetails';
import Login from './components/layout/Login/Login';
import Admin_dashboard from './components/Admin/admin_dashboard';
import Blogs from './components/layout/Blogs/Blogs';
import Blog1 from './components/layout/Blogs/Blog1';
import Blog2 from './components/layout/Blogs/Blog2';
import Blog3 from './components/layout/Blogs/Blog3';
import Blog4 from './components/layout/Blogs/Blog4';
import Blog5 from './components/layout/Blogs/Blog5';
import Blog6 from './components/layout/Blogs/Blog6';
import Blog7 from './components/layout/Blogs/Blog7';
import Blog8 from './components/layout/Blogs/Blog8';
import Blog9 from './components/layout/Blogs/Blog9';
import Remove_product from './components/Admin/remove_product'
import Cld from './components/cloudinary/cld';
import Cart from "./components/cart/cart"


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);
  return (
    <>
      <Notestate>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/displaycontact" element={<ContactDisplay />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products/all" element={<Products />}></Route>
            <Route path="/addproduct" element={<Newproduct />}></Route>
            <Route path="/displayproductdetails" element={<Displayproductdetail />}></Route>
            <Route path="/products/all/:id" element={<Productdetails />}></Route>
            <Route path="/nutty-almonds" element={<Productdetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/admin_dashboard" element={<Admin_dashboard />}></Route>
            <Route path="/remove_product" element={<Remove_product />}></Route>
            <Route path="/cld" element={<Cld />}></Route>
            <Route path="/cart" element={<Cart />}></Route>

            //Blogs Routes
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blog1" element={<Blog1 />}></Route>
            <Route path="/blog2" element={<Blog2 />}></Route>
            <Route path="/blog3" element={<Blog3 />}></Route>
            <Route path="/blog4" element={<Blog4 />}></Route>
            <Route path="/blog5" element={<Blog5 />}></Route>
            <Route path="/blog6" element={<Blog6 />}></Route>
            <Route path="/blog7" element={<Blog7 />}></Route>
            <Route path="/blog8" element={<Blog8 />}></Route>
            <Route path="/blog9" element={<Blog9 />}></Route>
          </Routes>
        </Router>

      </Notestate>

    </>
  );
}



export default App;
