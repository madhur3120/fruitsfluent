import React from 'react'
import user4 from "./images/user4.png"
import user7 from "./images/user7.png"
import logout3 from "./images/logout3.png"
import user9 from "./images/user9.png"
import stock_image from './images/stock-image.png'
import orders2 from './images/orders2.jpg'
import './admin_dashboard.css'


const Admin_dashboard = () => {
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
              <button className="adbtn1 adddbutton">welcome admin</button>
            </div>
            <div className="adddcol">
              <img src={user4} className="adimg" />

              <button className="adddbutton adbtn2">
                <a className='ada' href='/users'> USERS </a>
              </button >
            </div>
            <div className="adddcol" >
              <img src={user7} className="adimg" />

              <button className="adddbutton adbtn3" style={{ "display": "block" }}>
                <a className='ada'>
                  ADD ADMIN
                </a>
              </button>
            </div>
            <div className="adddcol">
              <img src={logout3} className="adimg" />

              <button className="adbtn4 adddbutton">
                <a className='ada' href='/'>
                  LOGOUT
                </a>
              </button>
            </div>
          </div>
          <div className="adrow">
            <div className="adddcol">
              <div className="adddcol">
                <img src={orders2} className="adimg" />

                <button className="adddbutton adbtn4">
                  <a className='ada'> ORDERS </a>
                </button>
              </div>
            </div>
            <div className="adddcol">
              <img src={user4} className="adimg" />

              <button className="adddbutton adbtn2">
                <a className='ada' href="/addproduct">
                  ADD PRODUCT
                </a>
              </button>
            </div>

            <div className="adddcol">
              <img src={orders2} className="adimg" />

              <button className="adbtn1 adddbutton">
                <a className='ada' href='/remove_product'>
                  REMOVE PRODUCT
                </a>
              </button>
            </div>
            <div className="adddcol" >
              <img src={stock_image} className="adimg" />

              <button className="adbtn5 adddbutton">
                <a className='ada' href='/current_stock'>
                  CURRENT STOCK
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Admin_dashboard
