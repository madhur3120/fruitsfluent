import React, { useState ,useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Notecontext from '../context/notecontext'
import './cart.css'
// import bg1 from './images/packet.jpg'

const Cart = () => {

    const [data,setdata] = useState([])
    const [subtotal,setsubtotal] = useState(0)
    const [total,settotal] = useState(0)
    let a = useContext(Notecontext)

    const navigate = useNavigate();

    const show = async (e) =>{
        // setdata(a.cart)
        console.log("final");
        console.log(a.cart);
        let arr = a.cart
        await console.log("arr" ,arr);
        await setdata(arr)
        await console.log(data);
    }

    const removeitem = async (e) =>{
        let arr = a.cart
        await console.log(arr);
        let id = e.target.value
        arr = await arr.filter(item => item._id!==id) 
        a.cart = arr
        await setdata(arr)
    }

    const calc = async (e) =>{
        let item = await JSON.parse(e.target.id)
        let code = await e.target.value
        let sum = 0
        await console.log("item" ,item,"code" , code);
        let arr = await a.cart
        // await console.log(arr);
        // arr[0].cartquantity = arr[0].cartquantity + 1
        // await console.log(arr);

        for (let index = 0; index < arr.length; index++) {
            if(arr[index]._id==item._id) {
                if(code==1) {
                    arr[index].cartquantity = arr[index].cartquantity + 1
                    arr[index].cardsum = arr[index].cartquantity* arr[index].productprice
                }
                else {
                    if(arr[index].cartquantity!=1) {
                        arr[index].cartquantity = arr[index].cartquantity - 1
                        arr[index].cardsum = arr[index].cartquantity* arr[index].productprice
                    }
                }
            }
            sum += arr[index].cardsum
        }

        setsubtotal(sum)
        settotal(sum + 40)
        a.cart = await arr 
        await setdata(arr)
        
        navigate("/cart")
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
                    <a href="/products/all" className="continue">Continue Shopping</a>
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
                                    {/* <p className="itemNumber">#QUE-007544-002</p> */}
                                    <h3>{item.productname}</h3>

                                    <p>  <button onClick={calc} id={JSON.stringify(item)} value={-1}>-</button>
                                {item.cartquantity}
                                <button onClick={calc} id={JSON.stringify(item)} value={1}>+</button> x {item.productprice}</p>

                                    <p className="stockStatus"> In Stock</p>

                                </div>

                                <div className="prodTotal cartSection">
                                    <p>{item.cardsum}</p>
                                </div>

                                <div className="cartSection removeWrap">
                                    <button onClick={removeitem} value={item._id} className="remove">remove</button>
                                    {/* <a href="/cart/" value = {item._id} onClick={removeitem} className="remove">x</a> */}
                                </div>
                            </div>
                            {/* <div className="special">
                                <div className="specialContent">Free gift with purchase!, gift wrap, etc!!</div>
                            </div> */}
                        </li>
                        )
                    })}

                        {/* <!--<li className="items even">Item 2</li>--> */}

                    </ul>
                </div>

                {/* <div className="promoCode">
                    <label htmlFor="promo">Have A Promo Code?</label>
                    <input type="text" name="promo" placholder="Enter Code" />
                    <a href="#" className="btn">Apply</a>
                </div> */}

                <div className="subtotal cf">
                    <ul className="cartWrap">
                        <li className="totalRow"><span className="label">Subtotal</span><span className="value">{subtotal}</span></li>

                        <li className="totalRow"><span className="label">Shipping</span><span className="value">40.00</span></li>

                        {/* <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li> */}
                        {/* <li className='totalRow'><span className="label">Promotion</span><span className="value">$4.00</span></li> */}
                        <li className="totalRow final"><span className="label">Total</span><span className="value">{total}</span></li>
                        <li className="totalRow"><a href="/orderplaced" className="btn continue">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart