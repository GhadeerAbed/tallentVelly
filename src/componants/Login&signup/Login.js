import React, { useState } from "react";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";
import {
  Icon,
  ForgetPass,
  Icon2,
  ErrorMessage,
} from "../../styled/Container.js";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const schema = yup.object({
    Password: yup.string().min(8).required("Password is required"),
    email: yup.string().email().required('this field must be an email').trim(),
  });
  const { register, handleSubmit, reset , formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate()
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePassEye = () => {
    setPasswordEye(!passwordEye);
  };
  const [errorMsg, setErrorMsg] = useState();
  

  const onSubmit = (data) => {
    const endpoint = `https://talents-valley-backend.herokuapp.com/api/user/login`
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${data["token"]}`,
      },
      body: JSON.stringify({
        email: data.email,
        password: data.Password,
      }),
    })
      .then((response) => response.json())
      .then((resp) => {
        //  navigate('/Home',{state:{AccessToken:result.data.accessToken}})
         console.log(resp);
        
        if (resp.statusCode >= 400) {
          setErrorMsg(resp.message);
        } else if (resp.statusCode < 400) {
          localStorage.setItem("token",resp.data.accessToken);
          localStorage.setItem("user",JSON.stringify(resp.data.user));
          localStorage.setItem("refreshToken",resp.data.refreshToken);
          navigate('/Verfication')
        }
       
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };
  // localStorage.setItem("mobile",resp.data.user.mobile);
  // localStorage.setItem("emailVerify", resp.data.user.verifiedEmail);
  // localStorage.setItem("mobileVerify",resp.data.user.verifiedMobile);
  // localStorage.setItem("email",resp.data.user.email);
  const erremail = errors.email && errors.email?.message
  const errpassword = errors.Password && errors.Password?.message

  return (
    <div>
      <form className="mx-20 " onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            labelText="Email address"
            labelFor="email-address"
            id="email-address"
            name="email"
            type="email"
            err={erremail || errorMsg}
            autoComplete="email"
            isRequired="true"
            placeholder="Email address"
            register={register}
            // customClass={"hel"}
          />
         {/* {errors.email && <span style={{borderColor:"red",color:"red"}}>{errors.email.message}</span>}  */}
         
        {/* {errors.email && <p style={{ color: 'red',marginTop:"-18px" }}>{errors.email?.message}</p>} */}
          <Input
            labelText="Password"
            labelFor="Password"
            err={errpassword || errorMsg}
            id="Password"
            name="Password"
            type={passwordEye === false ? "password" : "text"}
            autoComplete="current-Password"
            isRequired="true"
            placeholder="Password"
            register={register}
          />
        </div>
        {passwordEye === false ? (
          <Icon onClick={handlePassEye} />
        ) : (
          <Icon2 onClick={handlePassEye}></Icon2>
        )}
        <ForgetPass>
          <Link to="/ForgetPasswoed">Forgot Password?</Link>
        </ForgetPass>
        <div style={{ color: 'red' ,'marginTop': '-23px'}}>{errpassword ? errpassword : errorMsg}</div>
        {/* {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>} */}
        <FormButton text="Sign In"  />
      </form>
      <Footer
        paragraph1="Don't have an account?"
        linkName="Signup"
        linkUrl="/signup"
      ></Footer>
    </div>
  );
};

export default Login;
