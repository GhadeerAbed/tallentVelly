import React, { useState } from "react";
//import { loginFields } from "../constants/FormFileds";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";
import { FirstLast, Icon, Phone, Label,CountrySelect } from "../styled/Container";
import "react-phone-number-input/style.css";
import { getCountries} from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Signup = () => {
  const schema1 = yup.object().shape({
    Firstname: yup.string().required(),
    Password: yup.string().min(4).max(15).required(),
    Lastname: yup.string().required(),
    email: yup.string().email().required(),
    //  PhoneNumber: yup.string().phone().required(),
    select : yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema1),
  });

  const onSubmit1 = (data) => {
    console.log({ data });
    reset();
    const endpoint = "https://talents-valley.herokuapp.com/api/user/signup";
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Firstname: data.Firstname,
        Lastname: data.Lastname,
        email: data.email,
        password: data.Password,
        PhoneNumber: data.PhoneNumber,
        // Country: data.Country,
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("accessToken", JSON.stringify(data));
          console.log("sucess");
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [value, setValue] = useState();
  const [country, setCountry] = useState();
  return (
    <div>
      <form className="mx-20" onSubmit={handleSubmit(onSubmit1)}>
        <FirstLast>
          <Input
            labelText="Firstname"
            labelFor="Firstname"
            id="Firstname"
            name="Firstname"
            type="text"
            autoComplete="Firstname"
            isRequired="true"
            placeholder="Enter First name"
            register={register}
          />
          <Input
            labelText="Lastname"
            labelFor="Lastname"
            id="Lastname"
            name="Lastname"
            type="text"
            autoComplete="Lastname"
            isRequired="true"
            placeholder="Enter Last name"
            register={register}
          />
        </FirstLast>
        <div style={{'marginTop':'-12px'}}>
        <Input
          // handleChange={handleChange}
          // value={signupState.id}
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
        <Icon />
        {errors.Password?.type === "min" && (
          <p style={{ color: "red" }}>Your password is weak</p>
        )}
        {errors.Password?.type === "max" && (
          <p style={{ color: "green" }}>
            Nice work. This is an excellent password
          </p>
        )}
       </div>
        {/* <div>
            <Label htmlFor="Country">Country</Label>
            <Country
              name="Country"
            >
              <option></option>
              <option>USA</option>
              <option>Palestine</option>
            </Country>
          </div> */}
        <div style={{ marginTop: "35px" }}>
          <Label htmlFor="PhoneNumber">Phone Number</Label>
          <Phone
            name="PhoneNumber"
            international
            defaultCountry="PS"
            value={value}
            onChange={setValue}
            required
          />
        </div>
        <CountrySelect>
        <Label htmlFor="country">country</Label>
        <select
          name = "country"
          value={country}
          onChange={(event) => setCountry(event.target.value || undefined)}
          style={{  'border': '1px solid #BEC2C6','paddingTop': '6px','paddingBottom': '6px','borderRadius': '0.375rem'}}
        >
          <option value="">{en["ZZ"]}</option>
          {getCountries().map((country) => (
            <option key={country} value={country}>
              {en[country]}
            </option>
          ))} 
        </select>
        </CountrySelect>
        <FormButton text="Sign In" linkUrl="/" />
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
