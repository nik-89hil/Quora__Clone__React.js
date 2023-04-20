import React from 'react'
import SideNOt from './SideNOt'

const Allnot = () => {

    const allNotification = [{
        toptitle: "The anonymously writes.",
        time: "11h ago",
        Img:"https://randomuser.me/api/portraits/women/90.jpg",
        boldQuestino: "After reading so much news about the Sushant Singh Rajput case, what is your opinion on reality? What exactly happend"
    }, {
        toptitle: "Salary and Hapiness.",
        time: "Tue",
        Img:"https://randomuser.me/api/portraits/women/85.jpg",
        boldQuestino: "Are you satisfied with your current job and the salary you receive for it? What is the eligibility for that job?"
    }, {
        toptitle: "BALUS BOX OFFICE.",
        time: "Sun",
        Img:"https://randomuser.me/api/portraits/women/65.jpg",
        boldQuestino: "Which celebrated Bollywood celebrity was a horrible person in real life?"
    }, {
        toptitle: "The anonymously writes.",
        time: "11h ago",
        Img:"https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
        boldQuestino: "After reading so much news about the Sushant Singh Rajput case, what is your opinion on reality? What exactly happend"
    }, {
        toptitle: "The anonymously writes.",
        time: "1h ago",
        Img:"https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
        boldQuestino: "After reading so much news about the Sushant Singh Rajput case, what is your opinion on reality? What exactly happend"
    }, {
        toptitle: "The ExtranOrdinary writes.",
        time: "19h ago",
        Img:"https://randomuser.me/api/portraits/women/12.jpg",
        boldQuestino: "Which is the best job in the world?"
    }]





    return (
        <>
            <div className='notificationContainer'>
                <div>
                    <SideNOt />

                </div>
                <div className='classicNotification'>
                    <h5 style={{ color: "red" }}>Notifications || with filtering Functionality</h5>

                    {
                        allNotification.map((data, idx) => {
                            return (
                                <div className='rowwdy' key={idx}>
                                    <div>
                                        <img src={data.Img} alt="imagesUser" />
                                    </div>
                                    <div>
                                        <p>{data.toptitle}<span>posted in a space you might like</span> &nbsp; <span>{data.time}</span></p>
                                        <h6>{data.boldQuestino}</h6>
                                    </div>
                                    <hr />
                                </div>

                            )
                        })
                    }


                </div>

            </div>

        </>
    )
}

export default Allnot
