import React from 'react'
import SideNOt from './SideNOt'

const SpacesNotification = () => {
    
  return (
    <>
     <div className='notificationContainer'>
            <div>
                <SideNOt/>

            </div>
            <div className='classicNotification'>
            <h5>Notifications || Spaces || click on word</h5>
            <div className='rowwdy'>
                <div>
                    <img src="https://assets.inc.com/_/images/uploaded_files/image/336x336/quoralogo_38939.jpg" alt="Quora_logo" />
                </div>
                <div>
                    <p>You are not created any space till now. posted in a space you might like <span>22h ago</span></p>
                    <h6>Create your first spaces that you like and then its gives you relatable information about that space.</h6>
                </div>
            </div>

            </div>
            
        </div>
    </>
  )
}

export default SpacesNotification
