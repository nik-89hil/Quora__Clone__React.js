import React from 'react'
import SideNOt from './SideNOt'

const Subscription = () => {
  return (
    <>
        <div className='notificationContainer'>
            <div>
                <SideNOt/>

            </div>
            <div className='classicNotification'>
            <h5>Notifications || Subscription || click on word</h5>
            <div className='bellContainer'>
            <i class="fa-regular fa-bell"></i>
            <h4>No New Notification</h4>
            <p>Notification you received in the last 30 days will show up here.</p>
            </div>

            </div>
            
        </div>
      
    </>
  )
}

export default Subscription
