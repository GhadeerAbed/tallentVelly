import React from 'react'
import  {FixedInputClass ,Label}  from "../styled/Container.js";
export default function Input({
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  register
}) {
  return (
    <div className="my-5">
      <Label htmlFor={labelFor}>
        {labelText}
      </Label>
      <FixedInputClass
        //  onChange={handleChange}
        // value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        placeholder={placeholder}
        {...register(name)}
        // {...register(name)}
      />
    </div>
  );
}
