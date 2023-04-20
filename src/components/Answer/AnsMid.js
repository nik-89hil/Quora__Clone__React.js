import React from 'react'

const AnsMid = () => {

  const quest =[{
    quest:"Which is more better Java Vs Javascript?",
  },{
    quest:"what is the advantage of function closures?"
  },{
    quest:"How we download Vs in our Pc?"
  },{
    quest:"How much a Full Stack Developer can Earn?"
  },{
    quest:"Which is the best noSQL vs SQL?"
  },{
    quest:"What is the function binding?"
  },{
    quest:"How we remove error in react.js?"
  },{
    quest:"How many question should I write here?"
  },{
    quest:"How are You?"
  }
]






  return (
    <>
      <div className='ansRoutCont'>
        <div className='quesForYou' >
            <i class="fa-solid fa-square-plus"> </i> &nbsp; &nbsp;<p style={{color:"grey"}}>Questions for you</p>
        </div>
        <hr />

        { quest.map((data,idx)=>{

          return(
            <div key={idx}>
            <h6 style={{marginLeft:"2vw"}}>{data.quest}</h6>
            <p style={{color:"grey",marginLeft:"2vw"}}>No answer yet.</p>
            
          <button type="button" className="btn btn-primary answebutt" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
<i class="fa-solid fa-pen-fancy"></i> Answer
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
        </div>


          )

        
        })}



       
      </div>
    </>
  )
}

export default AnsMid
