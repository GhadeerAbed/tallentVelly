import React from 'react'
import HeaderV from './HeaderV'
import Check from '../../assest/check-mark.png'
import {Checkp} from '../../styled/Container1'
import {Button1} from '../../styled/Container'
// import { Context } from "../Verification/Context.js";
import { useNavigate } from 'react-router-dom'



const EmailCheck = () => {

  const navigate = useNavigate();
  // const {buttonText,setButtonText,setVerifyText} = useContext(Context);

  function handleClick() {
    fetch("https://talents-valley-backend.herokuapp.com/api/settings/profile",{
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }})
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data)
       localStorage.setItem("user",JSON.stringify(data.data));
      navigate('/Verfication');
    })
    
  }
 
  return (
    <div>
        <HeaderV img={Check} hedding={'Email Verification'}/>
        <Checkp>Your Email has been Verified <br/>Successfully</Checkp>
        <Button1 style={{width:'400px',margin:'90px auto'}} onClick={handleClick}>
          Continue
          </Button1>
    </div>
  )
}

export default EmailCheck