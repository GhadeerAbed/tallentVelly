import React,{useState} from "react";
import {loginFields} from "../constants/FormFileds.js";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";
import { AiOutlineEyeInvisible} from 'react-icons/ai'
const Login = () => {
    let fieldsState = {};
    loginFields.forEach(field=>fieldsState[field.id]='');

    const [loginState,setLoginState]=useState(fieldsState);
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      authenticateUser();
  }
  
  //https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}

  const authenticateUser = () =>{
    const endpoint=` https://talents-valley.herokuapp.com/api/user/login`;
         fetch(endpoint,
             {
             method:'POST',
             headers: {
             'Content-Type': 'application/json'
             },
             body:JSON.stringify(loginFields)
             }).then(response=>response.json())
             .then(data=>{
                //API Success from LoginRadius Login API
             })
             .catch(error=>console.log(error))

  }
  return (
    <>
    <form  className="mx-20 " onSubmit={handleSubmit}>
      <div>
      {
        loginFields.map(field=>
           <Input
           key={field.id}
           handleChange={handleChange}
           value={loginState[field.id]}
           labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
           customClass ={field.customClass}
          /> ) }
      </div>
      <AiOutlineEyeInvisible  className="absolute "/>

    <FormButton text='Sign In' handleSupmit={handleSubmit} />
    </form>
    <Footer paragraph1="Don't have an account?" linkName='Signup' linkUrl="/signup"></Footer>
    </>
  );
};

export default Login;
