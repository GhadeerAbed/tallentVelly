import React,{useContext } from 'react'
import { Context } from "../Verification/Context";
import {Titleh1,Paragraphp,VerfiyContain ,VerifyButt ,VerifyName ,Verifyp,Pharg1} from '../../styled/Container1'
import { Button1 } from '../../styled/Container'
import {Link} from 'react-router-dom'
import checkL from '../../assest/check-mark.png'
const Verfication = () => {
  // const [disable, setDisable] = useState(true);
  const { buttonText,buttonText1,verify1,verify,disabled , setDisabled} = useContext(Context);

  const handleSubmit = () => {
    const endpoint = `https://talents-valley.herokuapp.com/api/user/send-code-email`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
     })
    .then((response) => response.json())
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => console.log(error));
};
const handleSubmit1 = () => {
  const endpoint = `https://talents-valley.herokuapp.com/api/user/send-code-mobile`;
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
   })
  .then((response) => response.json())
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => console.log(error));
};
  return (
    <div>
        <Titleh1>Verfication</Titleh1>
        <Paragraphp>To use our services, We need to verify your account</Paragraphp>
        <VerfiyContain>
          <div>
          <VerifyName>Email Address</VerifyName>
          <Verifyp>mail@email.com <span style={{color: verify === "not verified" ? 'red' : 'green'}}>({verify})</span></Verifyp>
          </div>
          <div onClick={handleSubmit}> 
            { buttonText ?
            <VerifyButt>
            <Link to="/EmailVerifypage">verify</Link>
              </VerifyButt>:
            <img src={checkL} alt="fd" style={{width:'40px',marginRight:"30px"}}/> 
              }
          </div>
        </VerfiyContain>
        <VerfiyContain>
          <div>
          <VerifyName>Phone Number</VerifyName>
          <Verifyp>+972 ******966 <span style={{color: verify1 === "not verified" ? 'red' : 'green'}}>({verify1})</span></Verifyp>
          </div>
          <div onClick={handleSubmit1}> 
            { buttonText1 ?
            <VerifyButt>
            <Link to="/PhoneVerifiypage">verify</Link>
              </VerifyButt>:
            <img src={checkL} alt="fd" style={{width:'40px',marginRight:"30px"}}/> 
              }
          </div>
        </VerfiyContain>
        <Pharg1>You can complete the 2 following tasks later</Pharg1>
        <VerfiyContain>
          <div>
          <VerifyName>ID Verification</VerifyName>
          <Verifyp>Identity card - Driver license - Passport</Verifyp>
          </div>
          <div>
            <VerifyButt>Verify</VerifyButt>
          </div>
        </VerfiyContain>
        <VerfiyContain>
          <div>
          <VerifyName>Address Verification</VerifyName>
          <Verifyp>mail@email.com <span>(not verified)</span></Verifyp>
          </div>
          <div>
            <VerifyButt>Verify</VerifyButt>
          </div>
          
        </VerfiyContain>
        <Button1 style={{width:'424px', margin: '40px auto',background:disabled === true ?"#A7BDFB":"#4375FF"}} disabled={disabled}>Continue</Button1>
    </div>
  )
}

export default Verfication