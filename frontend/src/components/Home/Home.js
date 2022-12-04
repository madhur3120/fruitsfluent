import React from 'react';
import Footer from '../layout/Footer/Footer';
import './Home.css'
import Product from './Product.js'

const product =

{
    name: "Nutty MixedBerries",
    imgsrc: "/images/nutty-mixedberries.jpg",
    productprice: "299",
    review: "123",
    _id: "/products/all/6368115a791e8944a1c733b6",
};
const product2 = {
    name: "Happilo  Ajwadates",
    imgsrc: "/images/happilo-ajwadates.jpg",
    price: "399",
    review: "486",
    _id: "/products/all/638af578e4874cfdafc0923a",
};
const product3 = {
    name: "Himalayan Almonds",
    imgsrc: "/images/himalayan-almonds.jpg",
    price: "499",
    review: "523",
    _id: "/products/all/638cad554138edaa52fe9c4e",
};
const product4 = {
    name: "Pistas",
    imgsrc: "/images/nutraj-walnut1.jpg",
    price: "250",
    review: "523",
    _id: "/products/all/638cac3f4138edaa52fe9c47",
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