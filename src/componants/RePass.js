import React from "react";
import Input from "./Input";
import FormButton from "./FormButton";
import { Icon ,EroorP} from "../styled/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RePass = () => {
  const schema3 = yup.object().shape({
    Password: yup.string().min(8).max(15).required(),
    ConfirmPassword: yup.string().oneOf([yup.ref("Password"),null]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema3),
  });
  const onSubmit3 = (data) => {
    console.log({data});
    reset();
  }
  return (
    <div>
      <form className="mx-20 " onSubmit={handleSubmit(onSubmit3)}>
        <div>
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
          {errors.Password && <EroorP>{errors.Password?.message}</EroorP>}
          <Input
            labelText="Confirm Password"
            labelFor="Confirm Password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            type="Password"
            autoComplete="Confirm Password"
            isRequired="true"
            placeholder="Confirm Password"
            register={register}
          />
          <Icon />
          {errors.ConfirmPassword && <EroorP>Passwords should match !</EroorP>}
          {/* <p>{errors.ConfirmPassword && "Passwords should match !"}</p> */}
        </div>
        <FormButton text="Continue" linkUrl="/Resetpage" />
      </form>
    </div>
  );
};

export default RePass;
