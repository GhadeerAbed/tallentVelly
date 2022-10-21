import React from "react";
import Header from "../componants/Header";
import Forget from "../componants/Forget.js";
import { Container2 } from "../styled/Container.js";

const ForgetPassPage = () => {
  return (
    <div>
      <Header paragraph="Forgot Password?" />
      <Container2>
        <Forget></Forget>
      </Container2>
    </div>
  );
};

export default ForgetPassPage;
