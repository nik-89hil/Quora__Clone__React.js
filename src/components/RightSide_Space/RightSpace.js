import React from 'react'
import "./right.css"

const RightSpace = () => {
    const dataContainer=[{
        imgsrc:"https://www.freecodecamp.org/news/content/images/2022/12/main-image.png",
        name:"The Programmer's Cafe",
        para:"The space to share ideas via coding"
    },{
        imgsrc:"https://pandorafms.com/blog/wp-content/uploads/2018/05/what-is-an-algorithm-featured.png",
        name:"Programming Algorithms",
        para:"All about the programming ,data structures and algorithms ,..."
    },{
        imgsrc:"data:image/png;base64,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",
        name:"Python and ML Basics",
        para:"Basics concepts of Python and Machine Learning for Beginners.."
    },{
        imgsrc:"https://www.simplilearn.com/ice9/free_resources_article_thumb/Business_Analytics_vs_Data_Analytics.jpg",
        name:"Data Analytics basics",
        para:"Business-Statistics| Statistical-Modeling| Analytics-Tools"
    },{
        imgsrc:"https://m.economictimes.com/thumb/msid-69278826,width-1200,height-900,resizemode-4,imgsize-82628/internship2-getty.jpg",
        name:"The Internships Club",
        para:"Join this space to get daily updates & info on Internship's Advice"
    },{
        imgsrc:"https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/09/01202946/importance-of-internship.jpg",
        name:"Programmer's Heaven",
        para:"it's all about Computer Programming"
    },]




  return (
    <>
        <div className="rightSpaceContainer">
            <h4 style={{marginLeft:"10px"}}>Spaces to follow</h4>
            <hr />
            {
         dataContainer.map((data,idx)=>{
            return (
                <div key={idx} className='rightDAta'>
                <div>
                    <img src={data.imgsrc} alt="images" />
                </div>
                <div>
                    <h6 style={{fontSize:"14px"}}>{data.name}</h6>
                    <p style={{fontSize:"12px"}}>{data.para}</p>
                </div>
            </div>

            )
         })

            }
            
        </div>
      
    </>
  )
}

export default RightSpace
