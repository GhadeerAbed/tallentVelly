import React from "react";
import Header from "../../componants/Login&signup/Header";
import Email from "../../componants/Login&signup/Email";
import { Container2, Icon4,Container1 } from "../../styled/Container.js";
import { useNavigate } from "react-router-dom";

const Emailpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container1>
      <Header paragraph="Check Your Email" />
      <Icon4 onClick={() => navigate("/ForgetPasswoed", { replace: true })} />
      <Container2>
        <Email></Email>
      </Container2>
      </Container1>
    </div>
  );
};

export default Emailpage;
