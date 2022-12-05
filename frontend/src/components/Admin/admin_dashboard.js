import React from 'react'
import user4 from "./images/user4.png"
import user7 from "./images/user7.png"
import logout3 from "./images/logout3.png"
import user9 from "./images/user9.png"
import stock_image from './images/stock-image.png'
import orders2 from './images/orders2.jpg'
import './admin_dashboard.css'
import { Link } from 'react-router-dom'
import { useEffect ,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Notecontext from '../context/notecontext'


const Admin_dashboard = () => {

  const navigate = useNavigate()
  const a = useContext(Notecontext)

  const show = async (e) =>{

    console.log(a.name);
    if(a.name=="#") {
      navigate("/login")
    }
  }

useEffect(()=>{
    show();
},[])


  return (

    <div className="adddbody">

      <div className="adddcontainer">
        <h1 className='adh1'>
          DASHBOARD
        </h1>
        <div className="adsmall-container">
          <div className="adrow">
            <div className="adddcol">
              <img src={user9} className="adimg" />
              <button className="adbtn1 adddbutton">WELCOME ADMIN</button>
            </div>
            <div className="adddcol">
              <img src={user4} className="adimg" />

              <button className="adddbutton adbtn2">
                <Link className='ada' to='/users'> USERS </Link>
              </button >
            </div>
            <div className="adddcol" >
              <img src={user7} className="adimg" />

              <button className="adddbutton adbtn3" style={{ "display": "block" }}>
                <Link className='ada'>
                  ADD ADMIN
                </Link>
              </button>
            </div>
            <div className="adddcol">
              <img src={logout3} className="adimg" />

              <button className="adbtn4 adddbutton">
                <Link className='ada' to='/'>
                  LOGOUT
                </Link>
              </button>
            </div>
          </div>
          <div className="adrow">
            <div className="adddcol">
              <div className="adddcol">
                <img src={orders2} className="adimg" />

                <button className="adddbutton adbtn4">
                  <Link className='ada' to='/orders'> ORDERS </Link>
                </button>
              </div>
            </div>
            <div className="adddcol">
              <img src={user4} className="adimg" />

              <button className="adddbutton adbtn2">
                <Link className='ada' to="/addproduct">
                  ADD PRODUCT
                </Link>
              </button>
            </div>

            <div className="adddcol">
              <img src={orders2} className="adimg" />

              <button className="adbtn1 adddbutton">
                <Link className='ada' to='/remove_product'>
                  REMOVE PRODUCT
                </Link>
              </button>
            </div>
            <div className="adddcol" >
              <img src={stock_image} className="adimg" />

              <button className="adbtn5 adddbutton">
                <Link className='ada' to='/current_stock'>
                  CURRENT STOCK
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Admin_dashboard
