import React,{useState} from "react";
import Input from "./Input";
import FormButton from "./FormButton";
import { Icon ,EroorP,Icon2} from "../styled/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RePass = () => {
  const schema3 = yup.object().shape({
    NewPassword: yup.string().min(8).max(15).required(),
    ConfirmPassword: yup.string().oneOf([yup.ref("NewPassword"),null]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema3),
  });
  
  const[passwordEye,setPasswordEye]=useState(false)
  const handlePassEye =()=>{
    setPasswordEye(!passwordEye)
  }
  const onSubmit3 = (data) => {
    console.log({data});
    // _id = localStorage.getItem('userid');
  
    const endpoint = `https://talents-valley.herokuapp.com/api/user/password/recover`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer${data['token']}`,
      },
      body: JSON.stringify({
        NewPassword:data.NewPassword,
        ConfirmPassword:data.ConfirmPassword
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
            JSON.parse(localStorage.getItem("token"));                         
            JSON.parse(localStorage.getItem("recoverToken"));
            // localStorage.setItem('userid',JSON.stringify(resp.data.recoverToken) );
          console.log(resp);
          //  setUserCode(resp.data);
          // localStorage.setItem("token", JSON.stringify(resp.data.accessToken));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <form className="mx-20 " onSubmit={handleSubmit(onSubmit3)}>
        <div>
          <Input
            labelText="New Password"
            labelFor="NewPassword"
            id="NewPassword"
            name="NewPassword"
            type={(passwordEye===false)?'password':'text'}
            autoComplete="current-Password"
            isRequired="true"
            placeholder="New Password"
            register={register}
          />
           {(passwordEye===false)? <Icon  onClick={handlePassEye}/>:<Icon2 onClick={handlePassEye}></Icon2>}
          {errors.NewPassword && <EroorP>{errors.NewPassword?.message}</EroorP>}
          <Input
            labelText="Re Enter Password"
            labelFor="Confirm Password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            type={(passwordEye===false)?'password':'text'}
            autoComplete="Confirm Password"
            isRequired="true"
            placeholder="Confirm Password"
            register={register}
          />
           {(passwordEye===false)? <Icon  onClick={handlePassEye}/>:<Icon2 onClick={handlePassEye}></Icon2>}
          {errors.ConfirmPassword && <EroorP>Passwords should match !</EroorP>}
          {/* <p>{errors.ConfirmPassword && "Passwords should match !"}</p> */}
        </div>
        <FormButton text="Continue" linkUrl="/Resetpage" />
      </form>
    </div>
  );
};

export default RePass;
