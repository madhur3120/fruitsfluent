import React, { useEffect } from 'react'
import{useSearchParams} from'react-router-dom'
import './ContactDisplay.css';

function ContactDisplay() {
    const [searchparams,setsearchparams]=useSearchParams();
    
    return (
    <>
    <div className="contdispbox">
      <div className="dispconttitle">
        YOUR MESSAGE HAS BEEN SENT
      </div>
      <div className="contdispmsg">
        <p>NAME : {searchparams.get("name")}</p>
        <p>EMAIL : {searchparams.get("email")}</p>
        <p>PHONE NO : {searchparams.get("phone_no")}</p>
        <p>MESSAGE : {searchparams.get("message")}</p>

      </div>
    </div>
    </>
  )
}

export default ContactDisplay