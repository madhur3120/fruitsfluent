import React, { useState } from 'react'
import user4 from "../Admin/images/user4.png"
import user7 from "../Admin/images/user7.png"
import logout3 from "../Admin/images/logout3.png"
import user9 from "../Admin/images/user9.png"
import stock_image from '../Admin/images/stock-image.png'
import orders2 from '../Admin/images/orders2.jpg'
import '../Admin/admin_dashboard.css'
import { Link } from 'react-router-dom'
import { useEffect ,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Notecontext from '../context/notecontext'


const User_dashboard = () => {

  const navigate = useNavigate()
  const a = useContext(Notecontext)

  const show = async (e) =>{

    if(a.name=="#") {
      navigate("/login")
    }
  }

  const func_logout = async(e) =>{
    a.name = "#"
    navigate('/logout')
  }

  // const func_edit_address = async(e) =>{
  //   const res = await fetch("/user/edit_address",{
  //     method : "POST" ,
  //     headers : {
  //       "Content-Type" : "application/json"
  //     }
  //      ,
  //     body : data 
  //   })
  // }

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
              <button className="adbtn1 adddbutton">WELCOME {a.name}</button>
            </div>

            <div className="adddcol">
              <img src={user4} className="adimg" />

              <button className="adddbutton adbtn2" >
                <Link className='ada' to='/edit_address'> EDIT ADDRESS </Link>
              </button >
            </div>

            <div className="adddcol">
              <div className="adddcol">
                <img src={orders2} className="adimg" />

                <button className="adddbutton adbtn4">
                  <Link className='ada' to='/User_orders'> ORDERS </Link>
                </button>
              </div>
            </div>

            <div className="adddcol">
              <img src={logout3} className="adimg" />

              <button className="adbtn4 adddbutton">
                <Link className='ada' to='/logout' onClick={func_logout}>
                  LOGOUT
                </Link>
              </button>
            </div>

          </div>
          <div className="adrow">

          </div>
        </div>
      </div>
    </div>

  )
}

export default User_dashboard
