import React, { useState } from "react";
import Input from "./Input";
import FormButton from "./FormButton";
import { Icon, Icon2, EroorP } from "../../styled/Container";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RePass = () => {
  const schema3 = yup.object().shape({
    password: yup.string().min(8).max(15).required("please enter new password"),
    ConfirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema3),
  });

  const [passwordEye, setPasswordEye] = useState(false);
  const handlePassEye = () => {
    setPasswordEye(!passwordEye);
  };

  const [navigate, setNavigate] = useState(false);
  const USER_Recover = JSON.parse(localStorage.getItem("recoverToken"));
  console.log(USER_Recover);
  const onSubmit3 = ({ recoverToken, password }) => {
    // _id = localStorage.getItem('userid');

    const endpoint = `https://talents-valley.herokuapp.com/api/user/password/recover`;
    recoverToken = USER_Recover;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer${data['token']}`,
      },
      body: JSON.stringify({
        password,
        recoverToken,
      }),
    })
      .then((response) => response.json())
      .then((resp) => {
        //  navigate('/Home',{state:{AccessToken:result.data.accessToken}})
        console.log(resp);
        // JSON.parse(localStorage.getItem("recoverToken"));
        setNavigate(true);
      })
      .catch((error) => console.log(error));
    reset();
  };
  if (navigate) {
    return <Navigate to="/Resetpage" />;
  }
  return (
    <form className="mx-20 " onSubmit={handleSubmit(onSubmit3)}>
      <div style={{ marginTop: "-30px" }}>
        <Input
          labelText="New Password"
          labelFor="NewPassword"
          id="NewPassword"
          name="password"
          type={passwordEye === false ? "password" : "text"}
          autoComplete="current-Password"
          isRequired="true"
          // placeholder="New Password"
          register={register}
        />

        {passwordEye === false ? (
          <Icon onClick={handlePassEye} />
        ) : (
          <Icon2 onClick={handlePassEye}></Icon2>
        )}
        {errors.NewPassword && <EroorP>{errors.NewPassword?.message}</EroorP>}
        <Input
          labelText="Re Enter Password"
          labelFor="Confirm Password"
          id="ConfirmPassword"
          name="ConfirmPassword"
          type={passwordEye === false ? "password" : "text"}
          autoComplete="Confirm Password"
          isRequired="true"
          // placeholder="Confirm Password"
          register={register}
        />
        {passwordEye === false ? (
          <Icon onClick={handlePassEye} />
        ) : (
          <Icon2 onClick={handlePassEye}></Icon2>
        )}
        {errors.ConfirmPassword && <EroorP>Passwords should match !</EroorP>}
        {/* <p>{errors.ConfirmPassword && "Passwords should match !"}</p> */}
      </div>
      <FormButton text="Continue" linkUrl="/Resetpage" />
    </form>
  );
};

export default RePass;
