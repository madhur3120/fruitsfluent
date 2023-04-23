import { useEffect } from 'react'
import "../Admin/orders.css"
import  { useState , useContext} from 'react'
import Notecontext from '../context/notecontext';


const User_orders = () => {

    const [data, setData] = useState([])

    let a = useContext(Notecontext);

    const send_data = {
        'email' : a.email 
    }

    const show = async (e) =>{
        const res =  await fetch("https://nutkart-backend.onrender.com/user/orders", {
            method : "POST"  ,
            headers : {
                "Content-Type" : "application/json"
              },
            body : JSON.stringify(send_data)
        })
    
        
        const resdata = await res.json();
        setData(resdata.data)  
    }

    useEffect(()=>{
        show();
    },[])


  return (
    <>
 <h1>Orders</h1>

<table id="customers">
  <tr>
    <th>Email</th>
    <th>Products</th>
    <th>OrderTotal</th>
  </tr>

  {data.map((order)=>{
    return(
        <tr>
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

export default User_orders


