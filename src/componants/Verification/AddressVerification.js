import React,{useState} from 'react'
import HeaderV from '../../componants/Verification/HeaderV'
import address from '../../assest/address.png'
import SelectInput from "./SelectInput";
import {LabelFile ,IconUoload,WidthInput} from '../../styled/Container1'
import Input from '../../componants/Login&signup/Input'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getCountries } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import {Icon3,Label,CountrySelect,Button1} from '../../styled/Container'
import "react-phone-number-input/style.css";
const AddressVerification = () => {
  // const schema = yup.object().shape({
  //   // file:yup.mixed().test('required','Plese select a file',value => {
  //   //   return value && value.length;
  //   // })
  // })
  const { register, handleSubmit, reset ,watch } = useForm({
    // resolver: yupResolver(schema),
  });
  const [country, setCountry] = useState();
  const Submit = (data) => {
    const formData = new FormData()
    formData.append('file', data.file[0])
    formData.append('addressDocumentType', data.addressDocumentType)
    formData.append('address1', data.address1)
    formData.append('address2', data.address2)
    formData.append('city', data.city)
    formData.append('country', data.country)
    // for (const k of formData.values()) {
    //     console.log(k)
    // }
    fetch('https://talents-valley.herokuapp.com/api/user/verify/address', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData
    })
        .then((response) => response.json())
        .then(data => console.log(data))
        .catch((error) => console.log('error', error));
}
  return (
    <div>
        <HeaderV img={address} hedding={'Address Verification'} pharginfo={'Upload Document That Proof Your Address Such As: Bill (Phone, Electricity, Water, Bank Statement'}/>
        <form style={{paddingLeft:'75px',paddingRight:'65px'}} onSubmit={handleSubmit(Submit)}>
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
      <div style={{display:'flex',justifyContent: 'space-between',marginTop:'10px'}}>
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
        <div style={{display:'flex',justifyContent: 'space-between',marginTop:'-15px'}}>
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
          <CountrySelect style={{marginTop:'20px'}}>
  
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
              width:'195px'
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
        <div style={{marginTop:'50px'}}>
          <input type="file" id="fileupload" {...register('file')} style={{display:'none'}}/>
          {/* <LabelFile htmlFor="fileupload">Upload a File</LabelFile> */}
          <LabelFile htmlFor="fileupload">Upload a File</LabelFile>
          <IconUoload/>
          </div>
          <Button1>Continue</Button1>
      </form>
    </div>
  )
}

export default AddressVerification