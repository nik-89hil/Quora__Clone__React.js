import React from 'react';
import SideNOt from './SideNOt';

const Announcement = () => {
    const announceNotification =[
        {
            toptitle: "BALUS BOX OFFICE.",
            time: "Sun",
            Img:"https://randomuser.me/api/portraits/women/65.jpg",
            boldQuestino: "Which celebrated Bollywood celebrity was a horrible person in real life?"
        },{
            toptitle: "Join Spaces on Quora.",
            time: "April 10",
            Img:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            boldQuestino: "Quora gets better when you follow spaces.Find ones tha match your interest."
        }
    ]

  return (
    <>
        <div className='notificationContainer'>
            <div>
                <SideNOt/>

            </div>
            <div className='classicNotification'>
            <h5>Notifications || Announcement || click on word</h5>
           {
            announceNotification.map((data,idx)=>{
                return(
                    <div className='rowwdy' key={idx}>
             <div>
                 <img src={data.Img} alt="images" />
             </div>
             <div>
                 <p>{data.toptitle}  posted in a space you might like <span>{data.time}</span></p>
                 <h6>{data.boldQuestino}</h6>
             </div>
         </div>


                )
            })
             
           }

            </div>
            
        </div>
      
    </>
  )
}

export default Announcement
