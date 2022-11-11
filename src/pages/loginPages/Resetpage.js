import React from "react";
import Header from "../../componants/Login&signup/Header";
import Reset from "../../componants/Login&signup/Reset";
import { Container2,Container1 } from "../../styled/Container";
const Resetpage = () => {
  return (
    <div>
      <Container1>
      <Header />
      <Container2>
        <Reset></Reset>
      </Container2>
      </Container1>
    </div>
  );
};

export default Resetpage;
