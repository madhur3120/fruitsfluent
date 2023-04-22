import { useEffect } from 'react'
import "./orders.css"
import  { useState , useContext} from 'react'

const Users = () => {

    const [data, setData] = useState([])

    const show = async (e) =>{
        const res =  await fetch("/admin/users", {
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
 <h1>Users</h1>

<table id="customers">
  <tr>
    <th>User</th>
    <th>Email</th>
    <th>Address</th>
    <th>TotalOrders</th>
  </tr>

  {data.map((user)=>{
    return(
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.totalorders}</td>
        </tr> 
    )
  })}

</table>
    </>
   
  )
}

export default Users


