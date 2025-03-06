import React from 'react'
import "./Docter.css"
import { Link } from 'react-router-dom'

const Button  = () => {
  return (
    <button className='requestbtn' ><Link to="/payments">Request an Appointment</Link></button>
  )
}

export default Button