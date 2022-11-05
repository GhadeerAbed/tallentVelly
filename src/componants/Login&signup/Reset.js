import React from "react";
import check from "../../assest/check-mark.png";
import FormButton from "./FormButton";
import {
  ImgHeding,
  Hesading1,
  Paragraph2,
  Icon1,
} from "../../styled/Container.js";
const Reset = ({ handleSubmit }) => {
  return (
    <div>
      <ImgHeding>
        <Icon1 src={check} alt="#"></Icon1>
        <Hesading1>Password Reset</Hesading1>
      </ImgHeding>
      <Paragraph2>
        Your Password has been Successfully Reset. Click Below To Login
      </Paragraph2>
      <FormButton text="Sign In " handleSupmit={handleSubmit} linkUrl="/" />
    </div>
  );
};

export default Reset;
