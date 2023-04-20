import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import "./Notification.css"

const SideNOt = () => {
  return (
    <>
    <Header/>
    <div className='sideNotification'>
        <button><Link style={{textDecoration:"none"}} to="/notification/All"> All Notifications</Link></button>
        <button><Link style={{textDecoration:"none"}} to="/notification/notific-spaces">Spaces</Link></button>
        <button><Link style={{textDecoration:"none"}} to="/notification/Announcements">Announcements</Link></button>
        <button><Link style={{textDecoration:"none"}} to="/notification/Subscription">Subscription</Link></button>
    </div>
    </>
  )
}

export default SideNOt
