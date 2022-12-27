import React, { useState } from "react";
import FormButton from "./FormButton";
import Input from "../../componants/Login&signup/Input";
// import { useNavigate} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Paragraph1 } from "../../styled/Container.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Forget = () => {
  const schema2 = yup.object().shape({
    email: yup.string().email().required("email is requird"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema2),
  });
  // const [userid, setuserId] = useState('');
  // const navigate = useNavigate()

  //   const tocodepage=()=>{
  //     navigate('/Emailpage',{state:{id:userid}});
  // }

  const [navigate, setNavigate] = useState(false);

  const onSubmit2 = (data) => {
    console.log({ data });
    const endpoint = `https://talents-valley-backend.herokuapp.com/api/user/password/forgot`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer${data['token']}`,
      },
      body: JSON.stringify({
        email: data.email,
      }),
    })
      .then((response) => response.json())
      .then((resp) => {
        //  navigate('/Home',{state:{AccessToken:result.data.accessToken}})
        console.log(resp);
        localStorage.setItem("userid", JSON.stringify(resp.data._id));
        setNavigate(true);
      })
      .catch((error) => console.log(error));
    reset();
  };

  if (navigate) {
    return <Navigate to="/Emailpage" />;
  }
  return (
    <div>
      <Paragraph1>
        We'll send a code to your email to reset your password
      </Paragraph1>
      <form onSubmit={handleSubmit(onSubmit2)}>
        <div style={{ marginTop: "12%" }}>
          <Input
            labelText="Email address"
            labelFor="email-address"
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            isRequired="true"
            placeholder="email@gmail.com"
            register={register}
          />
        </div>
        <div style={{ marginTop: "20%" }}>
          <FormButton text="Send Code" linkUrl="/Emailpage" />
        </div>
      </form>
    </div>
  );
};

export default Forget;
