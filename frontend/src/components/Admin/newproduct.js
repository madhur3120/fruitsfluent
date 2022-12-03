import { React, useState, useContext } from 'react'
import './newproduct.css'
import { useNavigate } from "react-router-dom"
import Notecontext from '../context/notecontext'
import Footer from '../layout/Footer/Footer'

const Newproduct = () => {

  const [productname, setproductname] = useState('');
  const [productprice, setproductprice] = useState('');
  const [stock, setstock] = useState('');
  const [brand, setbrand] = useState('');
  const [imgsrc, setimgsrc] = useState('');

  const navigate = useNavigate();
  
  const postdata = async (e) =>{
    e.preventDefault() ;

    console.log("here");

    const data = {
      'productname': productname,
      'productprice': productprice,
      'stock': stock,
      'brand': brand,
      'imgsrc' : imgsrc
    }

    const res = await fetch("/admin/addproductback", {
      method : "POST"  , 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify (data)
    })

    console.log(await res.json())

    if(res.ok){

      alert("product successfully added")
      navigate('/admin_dashboard');
      console.log("done")
    }

    // a.push(data)
  }

  return (
    <>
      <div className="npproduct-box">
        <h2 className='nph2'>NEW PRODUCT</h2>
        <form className='npform'>
          <div className="npproduct-detail-box">
            <input type="text" className='npinput' required="" onChange={e => setproductname(e.target.value)} />
            <label className='nplabel'>Product Name</label>
          </div>
          <div className="npproduct-detail-box">
            <input type="number" className='npinput' required="" onChange={e => setproductprice(e.target.value)} />
            <label className='nplabel'>Product Price</label>
          </div>
          <div className="npproduct-detail-box">
            <input type="number" className='npinput' required="" onChange={e => setstock(e.target.value)} />
            <label className='nplabel'>Stock</label>
          </div>
          <div className="npproduct-detail-box">
            <input type="text" className='npinput' required="" onChange={e => setbrand(e.target.value)} />
            <label className='nplabel'>Brand</label>
          </div>
          <div className="npproduct-detail-box">
            <input type="text" className='npinput' required="" onChange={e => setimgsrc(e.target.value)} />
            <label className='nplabel'>Imgsrc</label>
          </div>
          <button className='npbutton' type="submit" onClick={postdata}>addproduct</button>

        </form>
      </div>
      {/* <Footer /> */}

    </>

  )
}

export default Newproduct




