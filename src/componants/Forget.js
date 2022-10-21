import React from "react";
import FormButton from "./FormButton";
import Input from "./Input";
import { Paragraph1 } from "../styled/Container.js";

const Forget = () => {
  // const INITIAL_STATE = {
  //   email: "",
  // };

  // const [forgetState, setForgetState] = useState(INITIAL_STATE);
  // const handleChange = (e) => {
  //   setForgetState({ ...forgetState, [e.target.id]: e.target.value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div>
      <Paragraph1>
        We'll send a code to your email to reset your password
      </Paragraph1>
      <form>
        <div style={{ marginTop: "12%" }}>
          <Input
            // handleChange={handleChange}
            // value={forgetState.id}
            labelText="Email address"
            labelFor="email-address"
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            isRequired="true"
            placeholder="email@gmail.com"
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
