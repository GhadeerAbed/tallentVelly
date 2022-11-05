import React from "react";
import Header from "../../componants/Login&signup/Header";
import RePass from "../../componants/Login&signup/RePass";
import { Icon4 } from "../../styled/Container";
import { useNavigate } from "react-router-dom";
const RePassPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header paragraph="Create New Password"></Header>
      <Icon4 onClick={() => navigate("/Emailpage", { replace: true })} />
      <RePass></RePass>
    </div>
  );
};

export default RePassPage;
