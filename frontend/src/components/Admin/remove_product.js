import { React, useState, useContext } from 'react'
import './newproduct.css'
import { useNavigate } from "react-router-dom"
import Notecontext from '../context/notecontext'
import Footer from '../layout/Footer/Footer'

const Removeproduct = () => {

  const [productname, setproductname] = useState('');
  const [stock, setstock] = useState('');
  const [brand, setbrand] = useState('');

  const navigate = useNavigate();
  
  const remove_product = async(e) => {
    const data = {
      'productname': productname,
      'stock': stock,
      'brand': brand,
    }
    const res = await fetch("/admin/remove_product", {
      method : "POST"  , 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify (data)
    })

    const resdata  = await res.json();
    navigate('/admin_dashboard');
  }

  return (
    <>
      <div className="npproduct-box">
        <h2 className='nph2'>REMOVE PRODUCT</h2>
        <form className='npform'>
          <div className="npproduct-detail-box">
            <input type="text" className='npinput' required="" onChange={e => setproductname(e.target.value)} />
            <label className='nplabel'>Product Name</label>
          </div>
          <div className="npproduct-detail-box">
            <input type="number" className='npinput' required="" onChange={e => setstock(e.target.value)} />
            <label className='nplabel'>Stock</label>
          </div>
          <div className="npproduct-detail-box">
            <input type="text" className='npinput' required="" onChange={e => setbrand(e.target.value)} />
            <label className='nplabel'>Brand</label>
          </div>
          <button className='npbutton' type="submit" onClick={remove_product}>REMOVE</button>

        </form>
      </div>
      {/* <Footer /> */}

    </>

  )
}

export default Removeproduct




