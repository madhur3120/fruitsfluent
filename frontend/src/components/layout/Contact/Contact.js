import React, { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import validator from 'validator'
import './Contact.css'

import { createSearchParams, useNavigate } from 'react-router-dom'

const initalState = {
  name: '',
  email: '',
  message: '',
  phone_no: '',
  vemailmsg: ''
};

function Contact() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');
  const [emessage, seteMessage] = useState("");
  const [phmessage, setphMessage] = useState("");

  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (validator.isEmail(state.email)) {
      if (validator.isMobilePhone(state.phone_no)) {
        navigate({
          pathname: "/displaycontact",
          search: createSearchParams({
            name: state.name,
            email: state.email,
            message: state.message,
            phone_no: state.phone_no
          }).toString()
        })
      }
      else {
        setphMessage("Please, enter valid phone number");
      }
    } else {
      seteMessage("Please, enter valid Email!");
    }
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <div className='contbody'>
        <div className='contstyleformwrapper'>
          <form onSubmit={handleSubmit} className='contform'>
            <center><h2>Contact Us</h2></center>
            <label for="name" className='contlabel'>Name</label>
            <input
              className='continput'
              type="text"
              name="name"
              value={state.name}
              onChange={handleInput}
              required
            />
            <label for="email" className='contlabel'>Email</label>
            <input
              className='continput'
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
              required
            />
            <span style={{ fontWeight: "bold", color: "red" }}>{emessage}</span>
            <br />
            <label for="phone_no" className='contlabel'>Phone_no</label>
            <input className='continput' type="number" name="phone_no" value={state.phone_no} onChange={handleInput} required />

            <span style={{ fontWeight: "bold", color: "red" }}>{phmessage}</span>
            <br />

            <label for="message" className='contlabel'>Message</label>
            <textArea
              className='conttextarea'
              name="message"
              value={state.message}
              onChange={handleInput}
              required
            />
            {error && (
              <div className='error'>
                <p>{error}</p>
              </div>
            )}
            <button type="submit" className='contbutton'>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;