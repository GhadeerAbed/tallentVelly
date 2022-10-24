import React from "react";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";
import { Icon, ForgetPass } from "../styled/Container.js";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    Password: yup.string().min(4).max(15).required(),
    email: yup.string().email().required(),
  });
  const { register, handleSubmit,reset } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit =   (data) => {
    console.log({data});
    reset();
  
    const endpoint = `https://talents-valley.herokuapp.com/api/user/login`;  
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: data.email,
        password: data.Password,
      }),
    })
      .then((response) => {
        console.log(response);
        if(response.status === 200){
          localStorage.setItem("accessToken", JSON.stringify(data));
          console.log("sucess");
        }else{
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            autoComplete="email"
            isRequired="true"
            placeholder="Email address"
            register={register}
            // error= {errors.email}
          />
          <Input
            labelText="Password"
            labelFor="Password"
            id="Password"
            name="Password"
            type="Password"
            autoComplete="current-Password"
            isRequired="true"
            placeholder="Password"
            register={register}
          />
        </div>
        {/* p::before {
  display: inline;
  content: "⚠ ";
} */}

        <Icon />
        <ForgetPass>
          <Link to="/ForgetPasswoed">Forgot Password?</Link>
        </ForgetPass>

        <FormButton text="Sign In" linkUrl="/home" />
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
