import React from 'react'
import Header from '../Header/Header'
import Spaces from '../spaces/Spaces'
import './following.css'
import Footer from '../footer/Fotter'

const Following = () => {

    const following=[{
        name:"DREAM UPSC",
        Followers : 4512245 +"follower",
        follImg:"https://static.india.com/wp-content/uploads/2017/02/UPSC.jpg?impolicy=Medium_Resize&w=1200&h=800"
    },{
        name:"Daily Dose of Vocabulary",
        Followers : 245 +"follower",
        follImg:"https://uploads-ssl.webflow.com/61c1a8251c7c762bdbadf2a0/61c1a8251c7c7628ceae0397_303-Important-SAT-Vocab-Words.jpeg"
    },{
        name:"Best Excel Tricks",
        Followers : 15245 +"follower",
        follImg:"https://play-lh.googleusercontent.com/37EzETO6gZyKmCg2kBIFX1e9gkubxZrVa5fHJ6yOaa7VvEShHjKv2RdtwnZt9Sk258s=w240-h480-rw"
    },{
        name:"IT jobs & Careers",
        Followers : 1194.5 +"k follower",
        follImg:"https://static1.shine.com/l/m/images/blog/Top-IT-jobs-for-freshers-in-India.jpg"
    },{
        name:"The Hindu",
        Followers : 1.5 +"M follower",
        follImg:"https://yt3.googleusercontent.com/ytc/AGIKgqNrBXnkvevoW_mbCIPkleMR_860-FcahFI8ARci=s900-c-k-c0x00ffffff-no-rj"
    },{
        name:"Banking",
        Followers : 1 +"M follower",
        follImg:"https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_780x440_mobile.jpeg"
    },{
        name:"SSC",
        Followers : 1.5 +"k follower",
        follImg:"https://images.indianexpress.com/2018/12/SSClogo759.jpg"
    },{
        name:"UP PSC",
        Followers : 0.5 +"M follower",
        follImg:"https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/11/full/1528703584-2922.jpg"
    }]


  return (
    <>
    <Header/>

    <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"14vw",marginTop:"4vh"}}>
        <div style={{marginRight:'2vw'}}>
            <Spaces/>
            <Footer/>
        </div>
        <div className='followingContainer'>
            <h3>Discover Spaces</h3>
            <br />
            <h6>Spaces you might like</h6>
            <hr />



            {
                following.map((data,idx)=>{
                    return(
                    <div key={idx} className='spacProfi' style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                    <img src={data.follImg}alt="img" />
                    <div>
                    <a href='/' style={{color:"black"}}>{data.name}</a>
                    <p style={{fontSize:"10px"}}>{data.Followers}</p>
                    </div>
                    </div>

                ) })
            }


            
            
        </div>
       
    </div>
      
    </>
  )
}

export default Following
