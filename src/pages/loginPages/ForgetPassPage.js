import React from "react";
import Header from "../../componants/Login&signup/Header";
import Forget from "../../componants/Login&signup/Forget.js";
import { Container2, Icon4,Container1 } from "../../styled/Container.js";
import { useNavigate } from "react-router-dom";

const ForgetPassPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container1>
      <Header paragraph="Forgot Password?" />
      <Icon4 onClick={() => navigate("/", { replace: true })} />
      <Container2>
        <Forget></Forget>
      </Container2>
      </Container1>
    </div>
  );
};

export default ForgetPassPage;
