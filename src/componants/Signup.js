import React from "react";
//import { loginFields } from "../constants/FormFileds";
import Footer from "./Footer.js";
import FormButton from "./FormButton.js";
import Input from "./Input";
import { Label,FirstLast,Country, Icon } from "../styled/Container";
const Signup = () => {
  
  // const INITIAL_STATE2 = {
  //   email: "",
  //   password: "",
  //   Firstname:'',
  //   Lastname:" ",
  // };

  // const [signupState, setSignupState] = useState(INITIAL_STATE2 );

  // const handleChange = (e) =>
  //   setSignupState({ ...signupState, [e.target.id]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(signupState);
  //   createAccount();
  // };

  //handle Signup API Integration here
  // const createAccount = () => {};
  return (
    <div>
      <form className="mx-20"  style={{ 'margin-top': '-2rem ' }}>
        <FirstLast>
          <div>
          <Input
            // handleChange={handleChange}
            // value={signupState.id}
            labelText="Firstname"
            labelFor="Firstname"
            id="Firstname"
            name="Firstname"
            type="text"
            autoComplete="Firstname"
            isRequired="true"
            placeholder="Enter First name"
            
          />
          </div>
          <div>
            <Input
            // handleChange={handleChange}
            // value={signupState.id}
            labelText="Lastname"
            labelFor="Lastname"
            id="Lastname"
            name="Lastname"
            type="text"
            autoComplete="Lastname"
            isRequired="true"
            placeholder="Enter Last name"
          />
          </div>
        </FirstLast>
        <div>
        <Input
            // handleChange={handleChange}
            // value={signupState.id}
            labelText="Email address"
            labelFor="email-address"
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            isRequired="true"
            placeholder="Email address"
          />
          <Input
            // handleChange={handleChange}
            // value={signupState.id}
            labelText="Password"
            labelFor="Password"
            id="Password"
            name="Password"
            type="Password"
            autoComplete="current-Password"
            isRequired="true"
            placeholder="Password"
          />
          <Icon />
          <Input
            // handleChange={handleChange}
            // value={signupState.id}
            labelText="Phone Number"
            labelFor="Phone-Number"
            id="Phone-Number"
            name="Phone-Number"
            type="number"
            autoComplete="Phone-Number"
            isRequired="true"
            placeholder="+972"
          />
        
        
        <div>
        <Label htmlFor="Country">Country</Label>
          <Country  >
          <option></option>
            <option>USA</option>
            <option>palestine</option>
          </Country>
        </div>
        </div>
        <FormButton text="Sign In" linkUrl="/"/>
      </form>
      <Footer
        paragraph1="Already have an account? "    
        linkName="Sign in"
        linkUrl="/"
      ></Footer>
    </div>
  );
};

export default Signup;
