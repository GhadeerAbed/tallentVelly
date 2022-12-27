import React, { useState } from "react";
import HeaderV from "../../componants/Verification/HeaderV";
import address from "../../assest/address.png";
import SelectInput from "./SelectInput";
import {
  LabelFile,
  IconUoload,
  WidthInput,
  IconUoload1,
} from "../../styled/Container1";
import Input from "../../componants/Login&signup/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getCountries } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import { Label, CountrySelect, Button1 } from "../../styled/Container";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";


const AddressVerification = () => {
  // const schema = yup.object().shape({
  //   file: yup
  //     .mixed()
  //     .test("required", "Plese select a file", (value) => {
  //       return value && value.length;
  //     })
  //     .test("filesize", "The file is too large", (value) => {
  //       return value && value[0] && value[0].size <= 2000000;
  //     }),
  //   idNumber: yup.number().min(9).required("this filed is require"),
  // });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [country, setCountry] = useState();

  const Submit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("addressDocumentType", data.addressDocumentType);
    formData.append("address1", data.address1);
    formData.append("address2", data.address2);
    formData.append("city", data.city);
    formData.append("country", data.country);
    fetch(
      "https://talents-valley-backend.herokuapp.com/api/user/verify/address",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.statusCode < 400) {
          handleClick() 
          // navigate("/Verfication");
        }
      })
      .catch((error) => console.log("error", error));
  };
 
  function handleClick() {
    fetch("https://talents-valley-backend.herokuapp.com/api/settings/profile",{
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }})
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data)
       localStorage.setItem("user",JSON.stringify(data.data));
      navigate('/Verfication');
    })
  }
  return (
    <div>
      <HeaderV
        img={address}
        hedding={"Address Verification"}
        pharginfo={
          "Upload Document That Proof Your Address Such As: Bill (Phone, Electricity, Water, Bank Statement"
        }
      />
      <form
        style={{ paddingLeft: "75px", paddingRight: "65px" }}
        onSubmit={handleSubmit(Submit)}
      >
        <SelectInput
          labelText="Document Type"
          labelFor="Document-Type"
          name="addressDocumentType"
          isRequired="true"
          register={register}
          option4="Choose your document type"
          option1="water_bill"
          option2="bank_statement"
          option3="phone_bill"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <WidthInput>
            <Input
              labelText="Address 1"
              labelFor="Address1"
              id="Address1"
              name="address1"
              type="text"
              autoComplete="Address1"
              isRequired="true"
              placeholder="Neighborhood"
              register={register}
            />
          </WidthInput>
          <WidthInput>
            <Input
              labelText="Address 2"
              labelFor="Address2"
              id="Address2"
              name="address2"
              type="text"
              autoComplete="Address2"
              isRequired="true"
              placeholder="Street"
              register={register}
            />
          </WidthInput>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-15px",
          }}
        >
          <WidthInput>
            <Input
              labelText="City"
              labelFor="city"
              id="city"
              name="city"
              type="text"
              autoComplete="city"
              isRequired="true"
              placeholder=""
              register={register}
            />
          </WidthInput>
          <CountrySelect style={{ marginTop: "20px" }}>
            <Label htmlFor="country">Country</Label>
            <select
              name="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              style={{
                border: "1px solid #BEC2C6",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "0.375rem",
                height: "50px",
                appearance: "none",
                width: "195px",
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
            {/* <Icon3 /> */}
          </CountrySelect>
        </div>
        {!watch("file") || watch("file").length === 0 ? (
          <div style={{ marginTop: "50px" }}>
            <input
              type="file"
              id="fileupload"
              {...register("file")}
              style={{ display: "none" }}
            />
            <LabelFile htmlFor="fileupload">Upload a File</LabelFile>
            <IconUoload />
            {errors.file && (
              <div
                className="errors"
                style={{ color: "red", paddingTop: "20px" }}
              >
                {errors.file.message}
              </div>
            )}
          </div>
        ) : (
          <div style={{ marginTop: "50px" }}>
            <input
              type="file"
              id="fileupload"
              {...register("file")}
              style={{ display: "none" }}
            />
            <LabelFile
              htmlFor="fileupload"
              style={{
                position: "relative",
                background: "#E2E2E2",
                paddingRight: "241px",
              }}
            >
              <div
                style={{ position: "absolute", left: "0", marginLeft: "30px" }}
              >
                {watch("file")[0].name}
                {(watch("file")[0].size / 1000000).toFixed(2) + "MB"}
              </div>
            </LabelFile>
            <IconUoload1 />
            {/* {errors.file && (
              <div
                className="errors"
                style={{ color: "red", paddingTop: "20px" }}
              >
                {errors.file.message}
              </div>
            )} */}
          </div>
        )}
        <Button1 type="submit">Continue</Button1>
      </form>
    </div>
  );
};

export default AddressVerification;
