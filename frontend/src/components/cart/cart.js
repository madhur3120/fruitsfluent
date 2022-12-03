import React, { useState ,useEffect, useContext} from 'react'
import Notecontext from '../context/notecontext'
import './cart.css'
// import bg1 from './images/packet.jpg'

const Cart = () => {

    const [data,setdata] = useState([])
    let a = useContext(Notecontext)

    const show = async (e) =>{
        // setdata(a.cart)
        console.log("final");
        console.log(a.cart);
        let arr = a.cart
        console.log("arr" ,arr);
        await setdata(arr)
        await console.log(data);
    }

    useEffect(()=>{
        show();
    },[])

    return (
        <div>
            <div className="wrap cf">
                <h1 className="projTitle">Your <span>NutKart</span> Shopping Cart</h1>
                <div className="heading cf">
                    <h1>In Your Basket</h1>
                    <a href="#" className="continue">Continue Shopping</a>
                </div>
                <div className="cart">
                    <ul className="cartWrap">

                    {data.map((item)=>{
                        return ( 
                            <li className="items even">
                            <div className="infoWrap" key={item._id}>
                                <div className="cartSection info">
                                    {/* <img src='./images/bg1.jpg' alt="" className="itemImg" /> */}
                                    <img src={item.imgsrc} alt="" className="itemImg" />
                                    <p className="itemNumber">#QUE-007544-002</p>
                                    <h3>{item.productname}</h3>

                                    <p> <input type="text" className="qty" placeholder="3" /> x {item.productprice}</p>

                                    <p className="stockStatus"> In Stock</p>

                                </div>

                                <div className="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>

                                <div className="cartSection removeWrap">
                                    <a href="#" className="remove">x</a>
                                </div>
                            </div>
                            <div className="special">
                                <div className="specialContent">Free gift with purchase!, gift wrap, etc!!</div>
                            </div>
                        </li>
                        )
                    })}

                        {/* <!--<li className="items even">Item 2</li>--> */}

                    </ul>
                </div>

                <div className="promoCode">
                    <label htmlFor="promo">Have A Promo Code?</label>
                    <input type="text" name="promo" placholder="Enter Code" />
                    <a href="#" className="btn">Apply</a>
                </div>

                <div className="subtotal cf">
                    <ul className="cartWrap">
                        <li className="totalRow"><span className="label">Subtotal</span><span className="value">$35.00</span></li>

                        <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>

                        <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li>
                        <li className='totalRow'><span className="label">Promotion</span><span className="value">$4.00</span></li>
                        <li className="totalRow final"><span className="label">Total</span><span className="value">$44.00</span></li>
                        <li className="totalRow"><a href="#" className="btn continue">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart