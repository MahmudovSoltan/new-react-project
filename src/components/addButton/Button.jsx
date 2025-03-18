import React from 'react'
import { IoMdAdd } from "react-icons/io";
const Button = ({setIsOpen}) => {
  return (
    <button className='add_btn' onClick={()=>setIsOpen(true)}><IoMdAdd size={40} color='#ffff'/></button>
  )
}

export default Button