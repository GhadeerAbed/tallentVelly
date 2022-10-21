import React from 'react'
import Input from './Input'
import FormButton from './FormButton'
import { Icon } from '../styled/Container'
 const RePass = () => {
//   const INITIAL_STATE3 = {
//     password: "",
//     ConfirmPassword :"",

//   };
//     const [repassState,setRepassState]=useState(INITIAL_STATE3);
//     const handleChange=(e)=>{
//       setRepassState({...repassState,[e.target.id]:e.target.value})
//     }
//     const handleSubmit=(e)=>{
//       e.preventDefault();
//       // authenticateUser();
//   }
  return (
    <div>
         <form  className="mx-20 " >
      <div>
      <Input
            // handleChange={handleChange}
            // value={repassState.id}
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
            // value={repassState.id}
            labelText="Confirm Password"
            labelFor="Confirm Password"
            id="Confirm Password"
            name="Password"
            type="Password"
            autoComplete="Confirm Password"
            isRequired="true"
            placeholder="Confirm Password"
          />
          <Icon />
      </div>
      


    <FormButton text='Continue' linkUrl="/Resetpage" />
    </form> 
    </div>
  )
}

export default RePass