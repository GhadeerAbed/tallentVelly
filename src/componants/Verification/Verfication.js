// import React, { useContext } from "react";
// import { Context } from "../Verification/Context";
import {
  Titleh1,
  Paragraphp,
  VerfiyContain,
  VerifyButt,
  VerifyName,
  Verifyp,
  Pharg1,
  VerifyButt1
} from "../../styled/Container1";
import { Button1 } from "../../styled/Container";
import { Link } from "react-router-dom";
import checkL from "../../assest/check-mark.png";
const Verfication = () => {
  // const { buttonText, buttonText1, verify1, verify, disabled } =
  //   useContext(Context);
  let user = JSON.parse(localStorage.getItem("user"));
  let emailV = user.email;
  let localPart = emailV.slice(emailV.indexOf("@") - 3, emailV.indexOf("@"));
  let phone = user.mobile;
  let localPart1 = phone.slice(0, 4);
  let localPart2 = phone.slice(-3);
  const emailVerify = user.verifiedEmail;
  const mobileVerify = user.verifiedMobile;
  const idVerify = user.verifiedId.status;
  const addressVerify = user.verifiedAddress.status;
  const handleSubmit = () => {
    const endpoint = `https://talents-valley-backend.herokuapp.com/api/user/send-code-email`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit1 = () => {
    const endpoint = `https://talents-valley-backend.herokuapp.com/api/user/send-code-mobile`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Titleh1>Verfication</Titleh1>
      <Paragraphp>
        To use our services, We need to verify your account
      </Paragraphp>
      <VerfiyContain>
        <div>
          <VerifyName>Email Address</VerifyName>
          <Verifyp>
            {localPart}@email.com{" "}
            <span style={{ color: emailVerify === true ? "green" : "red" }}>
              ({emailVerify === true ? "verified" : "not verified"})
            </span>
          </Verifyp>
        </div>
        <div onClick={handleSubmit}>
          {emailVerify === false ? (
            <VerifyButt>
              <Link to="/EmailVerifypage">verify</Link>
            </VerifyButt>
          ) : (
            <img
              src={checkL}
              alt="fd"
              style={{ width: "40px", marginRight: "30px" }}
            />
          )}
        </div>
      </VerfiyContain>
      <VerfiyContain>
        <div>
          <VerifyName>Phone Number</VerifyName>
          <Verifyp>
            {localPart1}******{localPart2}{" "}
            <span style={{ color: mobileVerify === true ? "green" : "red" }}>
              ({mobileVerify === true ? "verified" : "not verified"})
            </span>
          </Verifyp>
        </div>
        <div onClick={handleSubmit1}>
          {mobileVerify === false ? (
            <VerifyButt>
              <Link to="/PhoneVerifiypage">verify</Link>
            </VerifyButt>
          ) : (
            <img
              src={checkL}
              alt="fd"
              style={{ width: "40px", marginRight: "30px" }}
            />
          )}
        </div>
      </VerfiyContain>
      <Pharg1>You can complete the 2 following tasks later</Pharg1>
      <VerfiyContain>
        <div>
          <VerifyName>ID Verification</VerifyName>
          <Verifyp>Identity card - Driver license - Passport</Verifyp>
        </div>
        <div>
          {idVerify === "pending" ? (
            <VerifyButt1>Pending</VerifyButt1>
          ) : (
            <VerifyButt>
              <Link to="/IDVerifiPage">verify</Link>
            </VerifyButt>
          )}
        </div>
      </VerfiyContain>
      <VerfiyContain>
        <div>
          <VerifyName>Address Verification</VerifyName>
          <Verifyp style={{ fontSize: "13px" }}>
            Phone, Electricity, Water Bill - Bank statement
          </Verifyp>
        </div>
        <div>
          {addressVerify === "pending" ? (
            <VerifyButt1>Pending</VerifyButt1>
          ) : (
            <VerifyButt>
              <Link to="/AddressVerifiPage">verify</Link>
            </VerifyButt>
          )}
        </div>
      </VerfiyContain>
      <Button1
        style={{
          width: "424px",
          margin: "40px auto",
          background:
          emailVerify && mobileVerify !== false ?"#4375FF": "#A7BDFB",
        }}
        disabled={mobileVerify && emailVerify}
      >
        Continue
      </Button1>
    </div>
  );
};

export default Verfication;
