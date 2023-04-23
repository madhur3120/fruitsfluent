import React, { useEffect, useState } from 'react'
import Product from '../Home/Product'

const Productsub = () => {

    const [data, setData] = useState([])

    const show = async (e) =>{
        const res =  await fetch("https://nutkart-backend.onrender.com/products/all", {
            method : "GET"  
        })
    
        const resdata = await res.json();
        setData(resdata.data)  
    }

    useEffect(()=>{
        show();
    },[])


    return data.map((x)=>(
        <Product product={x} key={x._id}></Product>
    ));

}

export default Productsub
