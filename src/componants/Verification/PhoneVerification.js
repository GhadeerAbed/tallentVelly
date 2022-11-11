import React,{useState} from 'react'
import HeaderV from '../../componants/Verification/HeaderV'
import smartphone from '../../assest/smartphone.png'
import {CodeInput} from '../../styled/Container'
import { Button1 } from '../../styled/Container'
import Footer from '../Login&signup/Footer'
const PhoneVerification = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
  return (
    <div>
      <HeaderV img={smartphone} hedding={'Phone Verification'} pharginfo={'We have sent you a verification code to your phone number ********789'}/>
      <div style={{paddingLeft: '87px'}}>
      {otp.map((data, index) => {
        return (
          <CodeInput
            style={{ marginTop: "50px"}}
            type="text"
            name="verificationCode"
            maxLength="1"
            key={index}
            value={data}
            // onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        );
      })}
      </div>
      <Button1 style={{width:'405px',marginLeft:'65px'}}>Continue</Button1>
      <Footer
        paragraph1="Didn't get the code?"
        linkName="Resend"
        linkUrl="/Emailpage"
      ></Footer>
    </div>
  )
}

export default PhoneVerification