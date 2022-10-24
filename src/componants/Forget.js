import React from "react";
import FormButton from "./FormButton";
import Input from "./Input";
import { Paragraph1 } from "../styled/Container.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Forget = () => {

  const schema2 = yup.object().shape({
    email: yup.string().email().required(),
  });
  
  const {register,handleSubmit,reset} = useForm({
      resolver: yupResolver(schema2),
    }
  )

  const onSubmit2 = (data) => {
    console.log({data});
    reset();
  }
  return (
    <div>
      <Paragraph1>
        We'll send a code to your email to reset your password
      </Paragraph1>
      <form onSubmit={handleSubmit(onSubmit2)}>
        <div style={{ marginTop: "12%" }}>
          <Input
            labelText="Email address"
            labelFor="email-address"
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            isRequired="true"
            placeholder="email@gmail.com"
            register={register}
          />
        </div>
        <div style={{ marginTop: "20%" }}>
          <FormButton text="Send Code" linkUrl="/Emailpage" />
        </div>
      </form>
    </div>
  );
};

export default Forget;
