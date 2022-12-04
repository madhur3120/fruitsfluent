import React from 'react'
import './orderplaced.css'
import img from './delivery.jpg'
const Orderplaced = () => {
    return (
        <>
            <div className='opbody'>
                <img src={img} className='opcenter' />
                <br />
                <br />
                <div className='optext'>Your Order Has Been Placed</div>
                <div className='opwrapper'>
                    <svg
                        className='opcheckmark'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >
                        <circle className='checkmark__circle' cx="26" cy="26" r="25" fill="none" />
                        <path
                            className="opcheckmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                    </svg>
                </div>
                <a href="home.html">
                    <button className='opbutton1' type="button" href="home.html">
                        Continue Shopping
                    </button>
                </a>
            </div>
        </>
    )
}

export default Orderplaced
