import React, { useState } from "react";
import Footer from "./Footer";
import { Paragraph1, CodeInput, Button1 } from "../styled/Container.js";
// import { useLocation } from "react-router-dom";

const Email = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const [userCode, setUserCode] = useState('');
  //  const USER_ID = localStorage.getItem('userid');

  const handleSubmit = ({verificationCode,_id}) => {
    verificationCode = otp.join("");
    _id = localStorage.getItem('userid');
    console.log(verificationCode);
    const endpoint = `https://talents-valley.herokuapp.com/api/user/password/verify-code`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer${data['token']}`,
      },
      body: JSON.stringify({
        _id,
        verificationCode,
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // setUser(response.data)
          console.log("sucess");
        } else {
          console.log("error");
        }
        response.json().then((resp) => {
          console.log(resp);
           setUserCode(resp.data);
          // localStorage.setItem("token", JSON.stringify(resp.data.accessToken));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Paragraph1>
        We have sent you an email that contains a code to reset your password
      </Paragraph1>
      {otp.map((data, index) => {
        return (
          <CodeInput
            style={{ marginTop: "40px" }}
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

      <p>OTP Entered - {otp.join("")}</p>
      <Button1 onClick={handleSubmit}>Continue</Button1>
      <Footer
        paragraph1="Didn't get the code?"
        linkName="Resend"
        linkUrl="/Emailpage "
      ></Footer>
    </>
  );
};

export default Email;
