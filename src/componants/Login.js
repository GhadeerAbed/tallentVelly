import React from "react";

//import{ useState } from "react";
//import {loginFields} from "../constants/FormFileds.js";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";
import { Icon, ForgetPass } from "../styled/Container.js";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import{yupResolver} from '@hookform/resolvers/yup'
 import * as yup from 'yup';

const Login = () => {
  const schema = yup.object().shape({
    Password:yup.string().min(4).max(20).required(),
    email: yup.string().email().required(),
  
   })
  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });
  
  // let fieldsState = {};
  // loginFields.forEach(field=>fieldsState[field.id]='');
  // const INITIAL_STATE = {
  //   email: "",
  //   password: "",
  // };

  // const [data, setData] = useState("");
  //  const handleChange = (e) => {
  //   setLoginState(e.target.value );
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   authenticateUser();
  // };
  const onSubmit = (data) => {
    console.log(data)
  }

  // }
  //https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}

  // const authenticateUser = () => {
  //   const endpoint = ` https://talents-valley.herokuapp.com/api/user/login`;
  //   fetch(endpoint, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //API Success from LoginRadius Login API
  //     })
  //     .catch((error) => console.log(error));
  // };
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
        <Icon />
        <ForgetPass>
          <Link to="/ForgetPasswoed">Forgot Password?</Link>
        </ForgetPass>

        <FormButton
          text="Sign In"
          linkUrl="/home"
        />
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
