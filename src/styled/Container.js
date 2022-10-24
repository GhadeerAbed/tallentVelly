import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";
const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const Container1 = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width:34rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding-bottom: 2%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const Header1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 5.5rem;
  width: 5.5rem;
`;
const Title = styled.div`
  margin-top: -1.75rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  letter-spacing: 0.05em;
`;
const Paragraph = styled.p`
  margin-top: 3rem;
  margin-bottom: 2rem;
  margin-left: 5rem;
  font-size: 1.1rem;
  line-height: 1.75rem;
  font-weight: 500;
`;
const Paragraph1 = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  color: #707070;
  margin-top: -10px;
`;

const Label = styled.label`
  color: #707070;
  font-size: 16px;
  font-weight: 500;
  margin-bottom :5px;
`;
const FixedInputClass = styled.input`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-top: 5px;
  color: #707070;
  width: 100%;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: #d1d5db;
  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

const Footer1 = styled.div`
  display: flex;
  margin-top: 5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  position: relative;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 4rem;
  background-color: #4375ff;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
`;
const Links = styled(Link)`
  color: #0044ff;
`;
const Icon = styled(AiOutlineEyeInvisible)`
  margin-top: -48px;
  margin-left: 93%;
  color: #bec2c6;
  font-size: 20px;
`;
const ForgetPass = styled.span`
  color: #707070;
  font-size: 16px;
  display: inline-block;
  margin-left: 67.5%;
  padding-top: 9px;
`;
const FirstLast = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:-25px
`;
const Country = styled.select`
display: block; 
padding-top: 0.5rem;
padding-bottom: 0.5rem; 
padding-left: 0.75rem;
padding-right: 0.75rem; 
margin-top: 5px;
color:#707070; 
border-radius: 0.375rem; 
border-width: 1px; 
border-color: #D1D5DB; 
@media (min-width: 640px) { 
font-size: 0.875rem;
line-height: 1.25rem; 
width:100%
`;
const Container2 = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
`;
const CodeInput = styled.input`
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #374151;
  line-height: 1.25;
  width: 3rem;
  border-radius: 0.25rem;
  border-width: 1px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-left: 10px;
`;
const CodeInput1 = styled.input`
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #374151;
  line-height: 1.25;
  width: 3rem;
  border-radius: 0.25rem;
  border-width: 1px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-left: 45px;
`;
const ImgHeding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;
const Hesading1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
const Paragraph2 = styled.p`
  font-size: 20px;
  margin-top: 5%;
  margin-bottom: 18%;
`;
const Icon1 = styled.img`
  margin-top: -30px;
  margin-bottom: 20px;
`;
const Phone = styled(PhoneInput)`
.PhoneInputInput{
  border: 1px solid #BEC2C6;
  padding: 5px;
  border-radius:0rem 0.375rem 0.375rem 0rem;
}

.PhoneInputCountry{
  border: 1px solid #BEC2C6;
  margin-right:0px;
  padding: 5px;
  border-radius:0.375rem 0rem  0rem 0.375rem ;
}
.PhoneInputCountrySelectArrow{
  visibility: hidden;
}
`
const CountrySelect = styled.div`
display:flex;
flex-direction: column;
margin-top:25px;

`
export {
  Container,
  Container1,
  Header1,
  Logo,
  Title,
  Paragraph,
  FixedInputClass,
  Footer1,
  Button,
  Links,
  Icon,
  ForgetPass,
  Label,
  FirstLast,
  Country,
  Container2,
  Paragraph1,
  CodeInput,
  CodeInput1,
  ImgHeding,
  Hesading1,
  Paragraph2,
  Icon1,
  Phone,
  CountrySelect,
  
};
