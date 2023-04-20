import React from 'react'
import AnsMid from './AnsMid'
import './ans.css'
import Header from '../Header/Header'
const Answer = () => {
  return (
    <>

      <Header/>
      <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"14vw",marginTop:"4vh"}}>
        <div style={{marginRight:'2vw'}}>
          <h6>Questions</h6>
          <button className='quesForYoubuttt'>Questions for you</button><br />
          <button className='othersbutt'>Answer requests</button><br />
          <button className='othersbutt'>&nbsp;Drafts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
        <div>
          <AnsMid />
        </div>
      </div>

    </>
  )
}

export default Answer
