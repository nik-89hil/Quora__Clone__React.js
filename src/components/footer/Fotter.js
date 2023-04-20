import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Fotter = () => {
  return (
    <>
    <div className='footerBox'>
        <ul>
        <li><Link to={"/home"}>About</Link></li>
        <li><Link to={"/following"}>Following</Link></li>
        <li><Link to={"/"}>Carrers</Link></li>
        <li><Link to={"/"}>Terms</Link></li>
        <li><Link to={"/"}>Privacy</Link></li>
        <li><Link to={"/"}>Business</Link></li>

        </ul>
    </div>
      
    </>
  )
}

export default Fotter
