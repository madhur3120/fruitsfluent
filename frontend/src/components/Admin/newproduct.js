import { React, useState } from 'react'
import './newproduct.css'
import { useNavigate } from "react-router-dom"

const Newproduct = () => {

  const [productname, setproductname] = useState('');
  const [productprice, setproductprice] = useState('');
  const [stock, setstock] = useState('');
  const [brand, setbrand] = useState('');
  const [productimg,setproductimg] = useState('') ;

  const navigate = useNavigate();
  
  const postdata = async (e) =>{
    e.preventDefault() ;

    let data = new FormData() ;

    data.append("productname",productname);
    data.append("productprice",productprice) ;
    data.append("stock",stock) ;
    data.append("brand",brand) ;
    data.append("productimg",productimg)


    const res = await fetch("https://nutkart-backend.onrender.com/admin/addproductback", {
      method : "POST"  ,
      body : (data)
    })


    if(res.ok){
      alert("product successfully added")
      navigate('/admin_dashboard');
    }
    else {
      navigate('/addproduct')
    }
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
            <input type="file" name = "productimg" className='npinput' required="" onChange={e => setproductimg(e.target.files[0])}/>
            <label className='nplabel'>Image</label>
          </div>
          <button className='npbutton' type="submit" onClick={postdata}>addproduct</button>

        </form>
      </div>
      {/* <Footer /> */}

    </>

  )
}

export default Newproduct




