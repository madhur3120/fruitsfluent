import { useEffect } from 'react'
import "./orders.css"
import  { useState } from 'react'

const Current_stock = () => {

    const [data, setData] = useState([])

    const show = async (e) =>{
        const res =  await fetch("https://nutkart-backend.onrender.com/admin/current_stock", {
            method : "GET"  
        })
    
        const resdata = await res.json();
        setData(resdata.data)  
    }

    useEffect(()=>{
        show();
    },[])


    return (
        <>
     <h1>Stock</h1>
    
    <table id="customers">
      <tr>
        <th>productname</th>
        <th>brand</th>
        <th>Stock</th>
        <th>Price</th>
      </tr>
    
      {data.map((item)=>{
        return(
            <tr>
            <td>{item.productname}</td>
                <td>{item.brand}</td>
                <td>{item.stock}</td>
                <td>{item.productprice}</td>
            </tr> 
        )
      })}
    
    </table>
        </>
       
      )
    }

export default Current_stock
