import React from 'react'
import { Link } from 'react-router-dom'
const Footer = ({
    paragraph1,
    linkName,
    linkUrl="#"
}) => {
  return (
    <div className='flex justify-center  text-sm mt-20'>
        <p>{paragraph1}</p>
        <Link className='text-blue-600 ' to={linkUrl}>{linkName}</Link>
    </div>
  )
}

export default Footer