import React,{useState} from "react";
import {signupFields} from "../constants/FormFileds.js";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";

const Signup = () => {
let fieldsState={};

signupFields.forEach(field => fieldsState[field.id]='');

  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }
  return (
    <>
    <form  className="mx-20" onSubmit={handleSubmit}>
      <div>
      {
        signupFields.map(field=>
           <Input
           key={field.id}
           handleChange={handleChange}
           value={signupState[field.id]}
           labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
          />
                
                )
            }
      </div>

    <FormButton text='Sign In' handleSupmit={handleSubmit} />
    </form>
    <Footer paragraph1="Already have an account? " linkName='Sign in' linkUrl="/"></Footer>
    </>
  )
}

export default Signup