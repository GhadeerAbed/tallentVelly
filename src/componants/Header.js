import React from 'react'
import logo from '../assest/logo.png'
import  {Header1,Logo,Title,Paragraph}  from "../styled/Container.js";
const Header = ({paragraph}) => {
  return (
    <div>
        <Header1>
        <Logo src={logo} alt='logo'></Logo>
        <Title>Talents Valley</Title>
        </Header1>
        <Paragraph>{paragraph}</Paragraph>
    </div>
  )
}

export default Header