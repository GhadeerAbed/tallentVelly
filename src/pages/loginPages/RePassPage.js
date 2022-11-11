import React from "react";
import Header from "../../componants/Login&signup/Header";
import RePass from "../../componants/Login&signup/RePass";
import { Icon4 ,Container1} from "../../styled/Container";
import { useNavigate } from "react-router-dom";
const RePassPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container1>
      <Header paragraph="Create New Password"></Header>
      <Icon4 onClick={() => navigate("/Emailpage", { replace: true })} />
      <RePass></RePass>
      </Container1>
    </div>
  );
};

export default RePassPage;
