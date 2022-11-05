import React from "react";
import Header from "../../componants/Login&signup/Header";
import Reset from "../../componants/Login&signup/Reset";
import { Container2 } from "../../styled/Container";
const Resetpage = () => {
  return (
    <div>
      <Header />
      <Container2>
        <Reset></Reset>
      </Container2>
    </div>
  );
};

export default Resetpage;
