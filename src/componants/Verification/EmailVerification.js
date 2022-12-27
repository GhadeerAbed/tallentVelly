import React,{ useState} from "react";
import HeaderV from "./HeaderV";
import email from '../../assest/email.png'
import {CodeInput} from '../../styled/Container'
import { Button1} from "../../styled/Container";
import Footer from '../../componants/Login&signup/Footer'
import { useNavigate } from "react-router-dom";


const EmailVerification = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const handleChange = (element, index) => {
      if (isNaN(element.value)) return false;
  
      setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    };
    const handleSubmit = (verificationCode) => {
      verificationCode = otp.join("");
     console.log(verificationCode);
      const endpoint = `https://talents-valley-backend.herokuapp.com/api/user/verify/email`;
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          verificationCode,
        }),
      })
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
        if(resp.statusCode === 200){
        navigate('/EmailCheckpage')
        }
      })
      .catch((error) => console.log(error));
  };

  
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
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        );
      })}
      </div>
      <Button1 style={{width:'410px',marginLeft:'65px'}} onClick={handleSubmit}>Continue</Button1>
      <Footer
        paragraph1="Didn't get the code?"
        linkName="Resend"
        linkUrl="/Emailpage"
      ></Footer>
    </div>
  );
};

export default EmailVerification;
