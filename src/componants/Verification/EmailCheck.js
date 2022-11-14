import React,{useContext} from 'react'
import HeaderV from './HeaderV'
import Check from '../../assest/check-mark.png'
import {Checkp} from '../../styled/Container1'
import {Button1} from '../../styled/Container'
import { Context } from "../Verification/Context.js";
import { useNavigate } from 'react-router-dom'



const EmailCheck = () => {
  const navigate = useNavigate();
  const {buttonText,setButtonText,setVerifyText} = useContext(Context);

  function handleClick() {
    // e.preventDefault();
    navigate('/Verfication');
    setButtonText(!buttonText);
    setVerifyText("Verified");
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