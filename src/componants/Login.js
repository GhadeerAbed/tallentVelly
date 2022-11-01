import React,{useState,useEffect} from "react";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";
import { Icon, ForgetPass,Icon2} from "../styled/Container.js";
// import axios from "axios";
import  {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Navigate} from "react-router-dom";

const Login = () => {
 
  const schema = yup.object().shape({
    Password: yup.string().min(4).max(15).required(),
    email: yup.string().email().required(),
  });
  const { register, handleSubmit,reset} = useForm({
    resolver: yupResolver(schema),
  });

  const [user, setUser] = useState()
  const[passwordEye,setPasswordEye]=useState(false)
  const handlePassEye =()=>{
    setPasswordEye(!passwordEye)
  }

  const onSubmit =  (data) => {
  const endpoint = `https://talents-valley.herokuapp.com/api/user/login`;  
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${data['token']}`,
    },
    body: JSON.stringify({
        email: data.email,
      password: data.Password,
    }),
  })
    .then((response) => {
       if(response.status === 200){
        setUser(response.data)
         console.log("sucess");
      }else{
       console.log("error");
     }
     response.json()
     .then((resp)=>{
      console.log(resp)
      // localStorage.setItem("token", JSON.stringify(resp.data.accessToken)); 
    })
    })
     .catch((error) => {
       console.log(error);
     });
     reset();
};
  
useEffect(() => {
  const loggedInUser = localStorage.getItem("token");
  if (loggedInUser) {
    const foundUser = JSON.stringify(loggedInUser);
    setUser(foundUser);
  }
}, []);

if (user) {
  return <Navigate to="/home" />;
}



    
  
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
            type={(passwordEye===false)?'password':'text'}
            autoComplete="current-Password"
            isRequired="true"
            placeholder="Password"
            register={register}
          />
        </div>
        {(passwordEye===false)? <Icon  onClick={handlePassEye}/>:<Icon2 onClick={handlePassEye}></Icon2>}
        
        <ForgetPass>
          <Link to="/ForgetPasswoed">Forgot Password?</Link>
        </ForgetPass>
        <FormButton text="Sign In" />
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
