import React from 'react';
import Footer from '../layout/Footer/Footer';
import './Home.css'
import Product from './Product.js'

const product =

{
    name: "happilo-pista",
    imgsrc2: "http://res.cloudinary.com/dylanvdcg/image/upload/v1682190734/NutKart/l7wfq7wbxfshogpysjl6.jpg",
    productprice: "400",
    review: "123",
    _id: "/products/all/6444318d5b850fc1b0c37993",
};
const product2 = {
    name: "rostaa-hazelnut",
    imgsrc2: "http://res.cloudinary.com/dylanvdcg/image/upload/v1682191502/NutKart/klqru6zdedmmwf4ptmte.jpg",
    productprice: "340",
    review: "486",
    _id: "/products/all/6444348edea0bf49eb32b717",
};
const product3 = {
    name: "himalayan-almonds",
    imgsrc2: "http://res.cloudinary.com/dylanvdcg/image/upload/v1682192182/NutKart/htdooehnbkepftxwoghb.jpg",
    productprice: "349",
    review: "523",
    _id: "/products/all/64443735ded0a73a7e43620e",
};
const product4 = {
    name: "Walnut-Kernel",
    imgsrc2: "http://res.cloudinary.com/dylanvdcg/image/upload/v1682193539/NutKart/jmzusrhmosyoe4yn3bil.webp",
    productprice: "599",
    review: "523",
    _id: "/products/all/64443c831949f88d8dfdb9d4",
};

const Home = () => {
    return (
        <>
            <div className='banner'>
                <h1>Welcome to Nutkart</h1>
                <h2>One Stop for all your Dry Fruits Needs</h2>
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