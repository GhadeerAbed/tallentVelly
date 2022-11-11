import React from "react";
import check from "../../assest/check-mark.png";
// import FormButton from "./FormButton";
import { Button1 } from "../../styled/Container.js";
import { Link } from "react-router-dom";
import {
  ImgHeding,
  Hesading1,
  Paragraph2,
  Icon1,
} from "../../styled/Container.js";
const Reset = () => {
  return (
    <div>
      <ImgHeding>
        <Icon1 src={check} alt="#"></Icon1>
        <Hesading1>Password Reset</Hesading1>
      </ImgHeding>
      <Paragraph2>
        Your Password has been Successfully Reset.<br/> Click Below To Login
      </Paragraph2>
      {/* <FormButton text="Sign In "/> */}
      <Button1>
         <Link to="/">Sign In</Link>
      </Button1>
    </div>
  );
};

export default Reset;
