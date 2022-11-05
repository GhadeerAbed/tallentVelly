import React from "react";
import Header from "../../componants/Login&signup/Header";
import Email from "../../componants/Login&signup/Email";
import { Container2, Icon4 } from "../../styled/Container.js";
import { useNavigate } from "react-router-dom";

const Emailpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header paragraph="Check Your Email" />
      <Icon4 onClick={() => navigate("/ForgetPasswoed", { replace: true })} />
      <Container2>
        <Email></Email>
      </Container2>
    </div>
  );
};

export default Emailpage;
