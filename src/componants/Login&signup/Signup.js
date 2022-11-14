import React, { useState } from "react";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";
import { Navigate } from "react-router-dom";

import {
  FirstLast,
  Icon,
  PhoneCountry,
  Label,
  CountrySelect,
  EroorP,
  SuccessP,
  Icon2,
  Icon3,
} from "../../styled/Container";
import "react-phone-number-input/style.css";
import { getCountries } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Signup = () => {
  const schema1 = yup.object().shape({
    firstName: yup.string().required(),
    Password: yup
      .string()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        { excludeEmptyString: false },""
      )
      .required("Password is required"),
    lastName: yup.string().required("lastName is required"),
    email: yup.string().email().required("email is required"),
    mobile: yup.string().required(" mobile is required"),
    country: yup.string().required("country is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema1),
  });

  const [country, setCountry] = useState();
  // const [user, setUser] = useState();
  const [navigate, setNavigate] = useState(false);
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePassEye = () => {
    setPasswordEye(!passwordEye);
  };

  const onSubmit1 = async (data) => {
    const endpoint = `https://talents-valley.herokuapp.com/api/user/signup`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // Authorization: `Bearer ${data["token"]}`,
      },
      body: JSON.stringify({
        email: data.email,
        password: data.Password,
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        mobile: data.mobile,
      }),
    })
      .then((response) => response.json())
      .then((resp) => {
        //  navigate('/Home',{state:{AccessToken:result.data.accessToken}})
        console.log(resp);
        localStorage.setItem("token", resp.data.accessToken);
        localStorage.setItem(
          "refreshToken",
          resp.data.refreshToken
        );
        setNavigate(true);
      })
      .catch((error) => console.log(error));
    reset();
  };

  if (navigate) {
    return <Navigate to="/Verfication" />;
  }

  return (
    <div>
      <form className="mx-20" onSubmit={handleSubmit(onSubmit1)}>
        <FirstLast>
          <Input
            labelText="Firstname"
            labelFor="Firstname"
            id="Firstname"
            name="firstName"
            type="text"
            autoComplete="Firstname"
            isRequired="true"
            placeholder="Enter First name"
            register={register}
          />
          {/* {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>} */}
          <Input
            labelText="Lastname"
            labelFor="Lastname"
            id="Lastname"
            name="lastName"
            type="text"
            autoComplete="Lastname"
            isRequired="true"
            placeholder="Enter Last name"
            register={register}
          />
        </FirstLast>
        <div style={{ marginTop: "-15px" }}>
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
            type={passwordEye === false ? "password" : "text"}
            autoComplete="current-Password"
            isRequired="true"
            placeholder="Password"
            register={register}
          />

          {passwordEye === true ? (
            <Icon onClick={handlePassEye} />
          ) : (
            <Icon2 onClick={handlePassEye}></Icon2>
          )}

          {/* {errors.Password && <span>{errors.Password.message}</span>} */}
          {errors.Password?.type === "matches" && (
            <EroorP>Your password is weak</EroorP>
          )}
          {/* {errors.Password?.type !== "matches" && (
          <SuccessP>
            Nice work. This is an excellent password
          </SuccessP>
        )}   */}
        </div>

        <div style={{ marginTop: "35px" }}>
          <Label htmlFor="PhoneNumber">Phone Number</Label>
          <PhoneCountry
            international
            defaultCountry="PS"
            // name="phoneInputWithCountrySelect"
            name="mobile"
            control={control}
            rules={{ required: true }}
          />
        </div>

        <CountrySelect>
          <Label htmlFor="country">country</Label>
          <select
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            style={{
              border: "1px solid #BEC2C6",
              paddingTop: "6px",
              paddingBottom: "6px",
              borderRadius: "0.375rem",
              height: "50px",
              appearance: "none",
            }}
            {...register("country")}
          >
            <option value=""></option>
            {getCountries().map((country) => (
              <option key={country} value={country}>
                {en[country]}
              </option>
            ))}
          </select>
          <Icon3 />
        </CountrySelect>

        <FormButton text="Sign In" />
      </form>
      <Footer
        paragraph1="Already have an account? "
        linkName="Sign in"
        linkUrl="/"
      ></Footer>
    </div>
  );
};

export default Signup;
