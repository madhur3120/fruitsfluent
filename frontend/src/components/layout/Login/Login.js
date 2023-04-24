import React from 'react'
import './Login.css'
import { useState ,useContext ,useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import Notecontext from '../../context/notecontext';
import validate from "validator"

const Login = () => {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [address,setaddress] = useState('')

  const navigate = useNavigate()
  let a = useContext(Notecontext);

  useEffect(()=>{
    show();
  },[])


  const show = async (e) =>{
    if(a.name!="#") {
      navigate("/")
    }
  }
  
  const register = async (e) =>{
    e.preventDefault() ;

    if(validate.isEmail(email) && (password.length>=6 && password.length<=20) ) {
      const data = {
        'name': name,
        'email': email,
        'address' : address ,
        'password': password
      }
  
      const res = await fetch("https://nutkart-backend.onrender.com/user/register", {
        method : "POST"  , 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify (data)
      })
      const resdata  = await res.json();
  
      if(resdata.msg=="1") {
        a.name = name
        a.email = email
        alert("you have been successfully registered")
        navigate("/")
      }
      else {
        alert("email already registered")
        navigate("/login")
      }
    }

    else {
      alert("incorrect entry format")
    }

  
  }

  const login = async (e) =>{
    e.preventDefault() ;

    if(validate.isEmail(email) && (password.length>=6 && password.length<=20) ) {

      const data = {
        'email': email,
        'password': password
      }
  
      const res = await fetch("https://nutkart-backend.onrender.com/user/login", {
        method : "POST" , 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify (data)
      })
      
      const resdata  = await res.json();

      if(resdata.msg=="admin") {
        a.name = resdata.name
        a.email = email
        navigate("/admin_dashboard")
      }
      else if(resdata.msg=="0") {
        alert("email not registered")
      }
      else if(resdata.msg=="00") {
        alert("incorrect password")
      }
      else {
        a.name = resdata.name
        a.email = email
        alert("click ok to continue")
        navigate("/")
      }
    } 
    else {
      alert("incorrect entry format")
    }

  }

  return (
    <div className='loginpage'>
      <div className="registration">
        <input type="checkbox" id="flip" className='loginforminput' />
        <div className="flipcover">
          <div className="frontcover">
          </div>
          <div className="backcover">
          </div>
        </div>
        <div className="registrationpageforms">
          <div className="formcontent">
            <div className="loginform">
              <div className="loginpagetitle">LogIn</div>
              <form action="#">
                <div className="registrationinputboxes">
                  <div className="inputbox">
                    <input  type="text" placeholder="Enter your email" required className='loginforminput' onChange={e => setemail(e.target.value)}/>
                  </div>
                  <div className="inputbox">
                    <input  type="password" placeholder="Enter your password" required className='loginforminput' onChange={e => setpassword(e.target.value)}/>
                  </div>
                  {/* <div className="forgettext"><a href="#">Forgot password?</a></div> */}
                  <div className="button inputbox">
                    <input onClick={login} type="submit" value="LogIn" className='loginforminput' />
                  </div>
                  <div className="logintext">Don't have an account? <label htmlFor="flip" className='loginpagelabel'>Sigup now</label></div>
                </div>
              </form>
            </div>
            <div className="signupform">
              <div className="loginpagetitle">SignUp</div>
              <form action="#">
                <div className="registrationinputboxes">
                  <div className="inputbox">
                    <input type="text" placeholder="Enter your name" required className='loginforminput' onChange={e => setname(e.target.value)}/>
                  </div>
                  <div className="inputbox">
                    <input type="text" placeholder="Enter your email" required className='loginforminput' onChange={e => setemail(e.target.value)}/>
                  </div>
                  <div className="inputbox">
                    <input type="text" placeholder="Enter your 
                    Address" required className='loginforminput' onChange={e => setaddress(e.target.value)} />
                  </div>
                  <div className="inputbox">
                    <input type="password" placeholder="Enter your password" required className='loginforminput' onChange={e => setpassword(e.target.value)}/>
                  </div>
                  <div className="button inputbox">
                    <input type="submit" onClick={register} value="SignUp" className='loginforminput' />
                  </div>
                  <div className="signuptext">Already have an account? <label htmlFor="flip" className='loginpagelabel'>Login now</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login