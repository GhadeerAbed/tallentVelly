import React from "react";
import HeaderV from "../../componants/Verification/HeaderV";
import idcard from "../../assest/idcard.png";
import { useForm } from "react-hook-form";
import {LabelFile ,IconUoload,IconUoload1} from '../../styled/Container1'
import { Button1 } from "../../styled/Container";
import SelectInput from "./SelectInput";
import Input from '../../componants/Login&signup/Input'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const IDVerification = () => {
 
  const schema = yup.object().shape({
    file:yup.mixed().test('required','Plese select a file',value => {
      return value && value.length;
     })
     .test("filesize", "The file is too large", (value) => {
         return value && value[0] && value[0].size <= 2000000; 
    }),
    
    idNumber:yup.number().min(9).required("this filed is require"),
    SelectInput:yup.object().shape()({
    idDocumentType:yup.string.required("this filed is require")
  }),
})
  const { register, handleSubmit,formState:{errors},
  watch} = useForm({
    resolver: yupResolver(schema)
  });


  const Submit = (data) => {
    const formData = new FormData()
    formData.append('file', data.file[0])
    formData.append('idNumber', data.id)
    formData.append('idDocumentType', data.idDocumentType)
    // for (const k of formData.values()) {
    //     console.log(k)
    // }
    // let fileSize= (data.file[0].size/1000000).toFixed(1)
    // console.log(fileSize)
    fetch('https://talents-valley.herokuapp.com/api/user/verify/id', {
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
      <HeaderV
        img={idcard}
        hedding={"ID Verification"}
        pharginfo={
          "Upload Document that Proof your Identity such as: Identity Card, Passport, Driver License"
        }
      />
      <form style={{paddingLeft:'75px',paddingRight:'65px'}} onSubmit={handleSubmit(Submit)} >
          <SelectInput
          labelText="Document Type"
          labelFor="Document-Type"
          name="idDocumentType"
          isRequired="true"
          type="text"
          register={register}
          option4="Choose your document type"
          option1="national_id"
          option2="passport"
          option3="driving_license"
        />
        {errors.SelectInput && <div className="errors" style={{color:"red"}}>{errors.SelectInput.message}</div>}
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
            {errors.idNumber && <div className="errors" style={{color:"red"}}>{errors.idNumber.message}</div>}
         {!watch('file') || watch('file').length === 0?( 
            <div style={{marginTop:'50px'}}>
            <input type="file" id="fileupload" {...register('file')} style={{display:'none'}}/>
            <LabelFile htmlFor="fileupload">Upload a File</LabelFile>
            <IconUoload/>
            {errors.file && <div className="errors" style={{color:"red",paddingTop:"20px"}}>{errors.file.message}</div>}
            </div>
          ) :( 
           <div style={{marginTop:'50px'}}>
          <input type="file" id="fileupload" {...register('file')} style={{display:'none'}}/>
          <LabelFile htmlFor="fileupload" style={{position:"relative",background:"#E2E2E2",paddingRight: '241px'}}>
            <div style={{position:"absolute",left:"0", marginLeft:'30px'}}>
            {watch('file')[0].name}
            {(watch('file')[0].size/1000000).toFixed(2)+'MB'}</div>
            </LabelFile>
          <IconUoload1/>
          {errors.file && <div className="errors" style={{color:"red",paddingTop:"20px"}}>{errors.file.message}</div>}
          </div> 
         )} 
           
          <Button1 type="submit">Continue</Button1>
          
          
      </form>
    </div>
  );
};

export default IDVerification;
