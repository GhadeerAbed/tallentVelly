import React from "react";
import { Label } from "../../styled/Container";
import {SelectContian,Select} from '../../styled/Container1'

const SelectInput = ({
  option1,
  option2,
  option3,
  isRequired = false,
  type,
  register,
  name,
  labelFor,
  labelText,
  option4
}) => {
  return (
    <SelectContian>
        <Label htmlFor={labelFor}>
        {labelText}
      </Label>
      <Select
        name={name}
        required={isRequired}
        type={type}
        //  defaultValue={placeholder}
        {...register(name)}
      >
        <option value="" disabled selected hidden>{option4}</option>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
      </Select>
    </SelectContian>
  );
};

export default SelectInput;
