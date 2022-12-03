import React from 'react'
import './Login.css'
import { useState ,useContext } from 'react';
import { useNavigate } from "react-router-dom"
import Notecontext from '../../context/notecontext';

const Login = () => {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate()
  let a = useContext(Notecontext);

  const register = async (e) =>{
    e.preventDefault() ;

    const data = {
      'name': name,
      'email': email,
      'password': password
    }

    const res = await fetch("/user/register", {
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
      console.log(a);
      alert("you have been successfully registered")
      navigate("/")
    }
    else {
      alert("email already registered")
      navigate("/login")
    }
  }

  const login = async (e) =>{
    e.preventDefault() ;
    const data = {
      'email': email,
      'password': password
    }

    // console.log(data);
    const res = await fetch("/user/login", {
      method : "POST" , 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify (data)
    })
    const resdata  = await res.json();

    if(resdata.msg=="0") {
      alert("email not registered")
    }
    else if(resdata.msg=="00") {
      alert("incorrect password")
    }
    else {
      // console.log(resdata.name);
      a.name = resdata.name
      console.log(a.name);
      a.email = email
      alert("click ok to continue")
      navigate("/")
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
                  <div className="forgettext"><a href="#">Forgot password?</a></div>
                  <div className="button inputbox">
                    <input onClick={login} type="submit" value="LogIn" className='loginforminput' />
                  </div>
                  <div className="logintext">Don't have an account? <label for="flip" className='loginpagelabel'>Sigup now</label></div>
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
                    <input type="password" placeholder="Enter your password" required className='loginforminput' onChange={e => setpassword(e.target.value)}/>
                  </div>
                  <div className="button inputbox">
                    <input type="submit" onClick={register} value="SignUp" className='loginforminput' />
                  </div>
                  <div className="signuptext">Already have an account? <label for="flip" className='loginpagelabel'>Login now</label></div>
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