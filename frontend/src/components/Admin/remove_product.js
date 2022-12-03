import { React, useState, useContext } from 'react'
import './newproduct.css'
import { useNavigate } from "react-router-dom"
import Notecontext from '../context/notecontext'
import Footer from '../layout/Footer/Footer'

const Removeproduct = () => {

  const [productname, setproductname] = useState('');
  const [stock, setstock] = useState('');
  const [brand, setbrand] = useState('');

  const a = useContext(Notecontext);

  const navigate = useNavigate();
  
  const onSubmitHandler = () => {
    const data = {
      'productname': productname,
      'stock': stock,
      'brand': brand,
    }
    a.push(data)

    navigate('/displayproductdetails');
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
          <button className='npbutton' type="submit" onClick={onSubmitHandler}>REMOVE</button>

        </form>
      </div>
      {/* <Footer /> */}

    </>

  )
}

export default Removeproduct




