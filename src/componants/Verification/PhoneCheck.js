import React,{useContext} from 'react'
import HeaderV from './HeaderV'
import Check from '../../assest/check-mark.png'
import {Checkp} from '../../styled/Container1'
import {Button1} from '../../styled/Container'
import { useNavigate } from 'react-router-dom'
// import { Context } from "../Verification/Context.js";
const PhoneCheck = () => {
  const navigate = useNavigate();
  // const {buttonText1, setVerifyText1,setButtonText1,disabled , setDisabled} = useContext(Context);
  function handleClick1() {
    fetch("https://talents-valley.herokuapp.com/api/settings/profile",{
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }})
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data)
       localStorage.setItem("user",JSON.stringify(data.data));
      //  localStorage.setItem("emailVerify", data.data.verifiedEmail);
      //  localStorage.setItem("mobileVerify", data.data.verifiedMobile);
      //  setButtonText(!buttonText);
      //  setVerifyText("Verified");
      navigate('/Verfication');
    })
    
  }
  return (
    <div>
        <HeaderV img={Check} hedding={'Phone Verification'}/>
        <Checkp>Your Phone Number has been Verified <br/>Successfully</Checkp>
        <Button1 style={{width:'400px',margin:'90px auto'}} onClick={handleClick1}>Continue</Button1>
    </div>
  )
}

export default PhoneCheck