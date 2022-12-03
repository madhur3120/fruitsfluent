import React from 'react';
import Footer from '../layout/Footer/Footer';
import './Home.css'
import Product from './Product.js'

const product =

{
    name: "Nutty Almonds",
    images: [{ url: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }],
    price: "Rs. 299",
    review: "123",
    _id: "nutty-almonds",
};
const product2 = {
    name: "Happilo Cashews",
    images: [{ url: "https://images.unsplash.com/photo-1627820752174-acae1b399128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }],
    price: "Rs. 399",
    review: "486",
    _id: "nutty-almonds",
};
const product3 = {
    name: "Himalayan Walnuts",
    images: [{ url: "https://images.unsplash.com/photo-1617471217326-011df77101be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }],
    price: "Rs. 499",
    review: "523",
    _id: "nutty-almonds",
};
const product4 = {
    name: "Pistas",
    images: [{ url: "https://i.ndtvimg.com/i/2015-11/pistachio_625x350_71448653285.jpg" }],
    price: "Rs. 250",
    review: "523",
    _id: "nutty-almonds",
};

const Home = () => {
    return (
        <>
            <div className='banner'>
                <p>Welcome to Nutkart</p>
                <h1>One Stop for all your Dry Fruits Needs</h1>
                <a href='/about'>
                    <button>
                        About Us
                    </button>
                </a>
            </div>
            <h2 className='homeHeading'>Featured Products</h2>
            <div className='container' id='container'>
                <Product product={product} />
                <Product product={product2} />
                <Product product={product3} />
                <Product product={product4} />
            </div>
            <Footer />
        </>
    )
}

export default Home