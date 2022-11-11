import React, { useState } from "react";
import HeaderV from "../../componants/Verification/HeaderV";
import idcard from "../../assest/idcard.png";
import { useForm } from "react-hook-form";
import {LabelFile ,IconUoload} from '../../styled/Container1'
import { Button1 } from "../../styled/Container";
import SelectInput from "./SelectInput";
import Input from '../../componants/Login&signup/Input'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { data } from "autoprefixer";
const IDVerification = () => {
  const schema = yup.object().shape({
    file:yup.mixed().test('required','Plese select a file',value => {
      return value && value.length;
    })
  })
  const { register, handleSubmit, reset ,watch ,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });
  const [image,setImage]=useState('');
  const Convert2base64 = file =>{
    const reader = new FileReader();
    reader.onloadend=() =>{
      setImage(reader.result.toString())
    }
    reader.readAsDataURL(file)
  }
  const Submit = data =>{
    if(data.file.length>0){
      Convert2base64( data.file[0])
    }
  }
  return (
    <div>
      <HeaderV
        img={idcard}
        hedding={"ID Verification"}
        pharginfo={
          "Upload Document that Proof your Identity such as: Identity Card, Passport, Driver License"
        }
      />
      {image ?<img src={image} alt="" width="450"/>:null}
      <form style={{paddingLeft:'75px',paddingRight:'65px'}} onSubmit={handleSubmit(Submit)} >
        {!watch('file') || watch('file').length === 0?(
          <>
          <SelectInput
          labelText="Document Type"
          labelFor="Document-Type"
          name="idDocumentType"
          isRequired="true"
          register={register}
          option4="Choose your document type"
          option1="Identity Card"
          option2="Passport"
          option3="Driver License"
        />
        <Input
              labelText="ID Number"
              labelFor="IDNumber"
              id="IDNumber"
              name="idNumber"
              type="text"
              autoComplete="idNumber"
              isRequired="true"
              placeholder="Enter your ID number"
              register={register}
            />
            <div style={{marginTop:'50px'}}>
            <input type="file" id="fileupload" {...register('file')} style={{display:'none'}}/>
            <LabelFile htmlFor="fileupload">Upload a File</LabelFile>
            <IconUoload/>
            </div>
            </>
        ) :(<strong>{watch('file')[0].name}</strong>)}
      
          <Button1 type="submit">Continue</Button1>
          {errors.file && <div className="errors">{errors.file.message}</div>}
      </form>
    </div>
  );
};

export default IDVerification;
