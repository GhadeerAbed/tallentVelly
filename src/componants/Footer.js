import React from 'react'
//import { Link } from 'react-router-dom'
import  {Footer1,Links}  from "../styled/Container.js";
const Footer = ({
    paragraph1,
    linkName,
    linkUrl="#"
}) => {
  return (
    <Footer1>
        <p>{paragraph1}</p>
        <Links to={linkUrl}>{linkName}</Links>
    </Footer1>
  )
}

export default Footer