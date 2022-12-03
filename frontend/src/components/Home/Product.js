import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#ffd700",
    value: 3,
    isHalf: true,
}

const Product = ({ product }) => {
    return (
        <Link className='productCard' to={product._id}>
            <img src={product.imgsrc} alt={product.productname} />
            {/* <p>{product.imgsrc}</p> */}
            <p>{product.productname}</p>
            <div>
                <ReactStars {...options} /> <span>{product.review} reviews   </span>
            </div>
            <span>{product.productprice}</span>
        </Link>
    )
}

export default Product