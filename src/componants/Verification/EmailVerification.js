import React,{useState} from "react";
import HeaderV from "./HeaderV";
import email from '../../assest/email.png'
import {CodeInput} from '../../styled/Container'
import { Button1} from "../../styled/Container";
import Footer from '../../componants/Login&signup/Footer'
const EmailVerification = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
  return (
    <div>
      <HeaderV img={email} hedding={'Email Verification'} pharginfo={'We have sent you a verification code to your email****78@gmail.com'}/>
      <div style={{paddingLeft: '80px'}}>
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
      <Button1 style={{width:'410px',marginLeft:'65px'}}>Continue</Button1>
      <Footer
        paragraph1="Didn't get the code?"
        linkName="Resend"
        linkUrl="/Emailpage"
      ></Footer>
    </div>
  );
};

export default EmailVerification;
