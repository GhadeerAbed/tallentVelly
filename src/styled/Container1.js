import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import {MdOutlineFileUpload} from 'react-icons/md'
export const Nav = styled.nav`
padding-left: 0.5rem;
padding-right: 4rem; 
padding-top: 0.4rem;
background-color: #ffffff; 
max-height: 72px;
width:100vw;
position: fixed; 
top: 0; 
left: 0; 
z-index: 20; 
box-shadow: 0px 0.5px 6px #00000029;
@media (max-width: 768px) { 
  padding-left: 1rem;
  padding-right: 1rem; 
 }`
export const NavContainer = styled.div`
position:relative;
display: flex; 
flex-direction:row;
justify-content: space-between; 
align-items: center; 
`
export  const Logo1 = styled.img`
  height: 80%;
  width: 80px;
`;
export  const Title1 = styled.div`
 font-size:20px;
  line-height: 2.25rem;
  font-weight: 600;
  text-transform: uppercase;
`;
// export const ButtonContainer = styled.div`
// display:flex;

// // @media (min-width: 768px) { 
// //     order: 1; 
// //    }
// `
export const ButtonCreate = styled.button`
border: 1px solid #4375FF;
border-radius: 23px;
color: #4375FF;
font-weight: 600;
padding:5px 25px;
`
export const ButtonToegel = styled.button`
cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: none;

  @media (max-width: 768px) { 
    display:block
   }
`

export const Ul =styled.ul`

display:flex;


@media (max-width: 768px) { 
  flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: white;
    border-top: 1px solid black;
    display: none;
 }

}
`
export const LI =styled.li`
margin: 0 1.2rem;
@media (max-width: 768px) { 
  text-align: center;
  margin: 0;
 }
}
`
export const LiNavLink =styled(NavLink)`{
  color:#151617;
  display: block;
  width: 100%;
  font-size:20px;
  line-height: 2.25rem;
  font-weight: 600;
  @media (max-width: 768px) { 
    width: 100%;
     padding: 1.5rem 0;
   }
}
`
export const Titleh1 = styled.h1`
font-size:30px;
font-weight:600;
text-align:center;
color:#151617;
padding-top:30px;
`
export const Paragraphp =styled.p `
font-size:18px;
font-weight:500;
//  margin-left:42px;
padding-top:25px;
text-align:center;

`
export const VerfiyContain =styled.div`
background-color:#F3F4F6;
border:1px solid #E2E2E2;
margin-left:   60px  ;
margin-right:  60px ;
border-radius: 7px;
margin-top:20px;
padding-left:20px;
padding-right:20px;
// padding-top:20px;
height:88px;
display:flex;
justify-content:space-between;
align-items:center;
`
export const VerifyButt = styled.button`
background-color:#4375FF;
border: 1px solid #E2E2E2;
border-radius: 7px;
color:white;
padding:6px 35px;
`
export const VerifyName =styled.h2`
font-weight:600;
`
export const Verifyp =styled.p`
font-size:14px;
`
export const Pharg1=styled.p`
margin-bottom: -9px;
padding-left: 67px;
font-size:14px;
padding-top:10px;
`
export const ImgeV =styled.img`
width:75px;
height:75px;
margin:auto;
margin-top:30px;
`
export const ParagraphV = styled.p`
font-size:18px;
color:#707070;
max-width:400px;
margin:auto;
padding-top:30px;
font-weight:500
`
export const Checkp = styled.p`
font-size:18px;
color:#707070;
text-align:center;
font-weight:500
`
export const SelectContian = styled.div`
display:flex;
flex-direction:column;
// padding-left:75px;
// padding-right:65px;
margin-top:30px;

`
export const Select = styled.select`
  border: 1px solid #BEC2C6;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left:15px;
  border-radius: 0.375rem;
  height: 50px;
  appearance: none;
`
export const LabelFile = styled.label`
cursor:pointer;
border: 1px solid #BEC2C6;
padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 10rem;
  padding-right: 9rem;
  height: 50px;
  border-radius: 0.375rem;
  font-size:17px;
`

export const IconUoload = styled(MdOutlineFileUpload)`
display: block;
    font-size: 27px;
    margin-left: 125px;
    margin-top:-26px
`
export const IconUoload1 = styled(MdOutlineFileUpload)`
display: block;
    font-size: 27px;
    position:absolute;
    `
export const WidthInput = styled.div`
width:195px
`