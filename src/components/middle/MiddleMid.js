import React from 'react'
import './midmid.css'
const MiddleMid = (props) => {
    const details = props.details;
    // const add = props.details.address;
    // const updated = props.details.updated;
    // const questionis = props.details.questionis;
    // const imgsrc = props.details.imgsrc;
    // const upvote = props.details.upvote;
    // const comment = props.details.comment;
    // const share = props.details.share;
    // const description = props.details.description;
    
  return (
    <>

    {/* for each use  */}

    {
        details.map((data,idx)=>{
            return (
                <div className='mainContainer' key={idx}>
            <div className='nameDetails'>
            <img className='profile' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            <div>
                <div>
                <h6>&nbsp;{data.name}<a href="" className='followButton'>&nbsp;follow</a></h6>
                </div>
                <div>
                <p style={{fontSize:"13px"}}>{data.add}<span>* <a href="">{data.updated}</a></span> </p>
                </div>
            </div>
        </div>
        <div className='questionContainer'>
        <h5 className='QuestionName'>{data.questionis}</h5>

        </div>

        <div className='answerContainer'>
        <p className='AnwserTag'>
            {data.description}
        </p>

        </div>
        <div className='PostImage'>
        <img src={data.imgsrc}/>

        </div>
        <div  className='lastUpvote'>
            <button><i class="fa-solid fa-up-long"></i>Upvote</button>{data.upvote}
            <button>&nbsp;<i class="fa-solid fa-down-long"></i>&nbsp;</button>
            <button><i class="fa-regular fa-comment"></i>{data.comment}</button>
            <button><i class="fa-solid fa-arrows-rotate"></i>{data.share}</button>


        </div>
        </div>
            )
        })

}




      
    </>
  )
}

export default MiddleMid
