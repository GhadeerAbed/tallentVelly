import React,{useContext} from 'react'
import HeaderV from './HeaderV'
import Check from '../../assest/check-mark.png'
import {Checkp} from '../../styled/Container1'
import {Button1} from '../../styled/Container'
import { useNavigate } from 'react-router-dom'
import { Context } from "../Verification/Context.js";
const PhoneCheck = () => {
  const navigate = useNavigate();
  const {buttonText1, setVerifyText1,setButtonText1,disabled , setDisabled} = useContext(Context);
  function handleClick1() {
    // e.preventDefault();
    navigate('/Verfication');
    setButtonText1(!buttonText1);
    setVerifyText1("Verified");
    setDisabled(!disabled)
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