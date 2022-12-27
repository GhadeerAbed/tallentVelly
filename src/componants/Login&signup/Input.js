import React from "react";
import { FixedInputClass, Label } from "../../styled/Container";
export default function Input({
  labelText,
  labelFor,
  // id,
  name,
  type,
  isRequired = false,
  placeholder,
  register,
  err,
}) {
  const errStyle = {
    border:'1px solid red'
  }
  return (
    <div className="my-5">
      <Label htmlFor={labelFor}>{labelText}</Label>
      <FixedInputClass
        style={err && errStyle}
        // id={id}
        name={name}
        type={type}
        required={isRequired}
        placeholder={placeholder}
        {...register(name)}
      />
      {/* {error &&  <div >{error.message}</div>}   */}
    </div>
  );
}
