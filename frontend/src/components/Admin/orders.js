import { useEffect } from 'react'
import "./orders.css"
import { useState, useContext } from 'react'

const Orders = () => {

  const [data, setData] = useState([])

    const show = async (e) =>{
        const res =  await fetch("/admin/orders", {
            method : "GET"  
        })
    
        const resdata = await res.json();
        setData(resdata.data)  
    }

  useEffect(() => {
    show();
  }, [])


  return (
    <>
      <h1>Orders</h1>

      <table id="customers">
        <tr>
          <th>User</th>
          <th>Email</th>
          <th>Products</th>
          <th>OrderTotal</th>
        </tr>

        {data.map((order) => {
          return (
            <tr>
              <td>{order.username}</td>
              <td>{order.email}</td>
              <td>{order.products}</td>
              <td>{order.ordertotal}</td>
            </tr>
          )
        })}

      </table>
    </>

  )
}

export default Orders


