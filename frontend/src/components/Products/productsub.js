import React, { useEffect, useState } from 'react'
import Product from '../Home/Product'

const Productsub = () => {

    const [data, setData] = useState([])

    const show = async (e) =>{
        const res =  await fetch("/products/all", {
            method : "GET"  
        })
    
        const resdata = await res.json();
        console.log(resdata);
        setData(resdata.data)  
    }

    useEffect(()=>{
        show();
    },[])

    console.log(data)

    return data.map((x)=>(
        <Product product={x}></Product>
    ));

}

export default Productsub


    // return(
    //     <>
    //     <h1>khkyi</h1>
    //     {data.map((ele) => {
    //         return (<div key= {ele._id}><h1>{ele.productname}</h1></div>)
    //     })}
    //     </>
    // )