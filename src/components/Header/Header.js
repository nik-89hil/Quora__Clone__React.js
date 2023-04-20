import React from 'react'
import './Header.css'
import  './heade.js'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='navContainer'>
    <nav>
        <div style={{marginRight:"3vw"}}>
            <a title='QUORA'><Link to={"/home"}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" alt="logo" /></Link></a>
        </div>
        <div className='navSecond'>
          <div><a title='HOME'><Link to={"/home"}><i class="fa-solid fa-house" ></i></Link></a></div>
          <div><a title='SPACES'><Link to={"/following"}><i class="fa-regular fa-rectangle-list" ></i></Link></a></div>
          <div><a title='ANSWERS'><Link to={"/answer"}><i class="fa-regular fa-pen-to-square"></i></Link></a></div>
          <div><a title='DISCOVER'><Link to={"/spaces"}><i class="fa-solid fa-users-line" ></i></Link></a></div>
          <div><a title='NOTIFICATION'><Link to={"/notification/All"}><i class="fa-regular fa-bell" ></i></Link></a></div>
        </div>
        <div className='searchingInput'>
          <span className='searchbar' title='STATIC__SEARCH'><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder='search Quora'/></span>
        </div>
        <div style={{display:"flex",fontSize:"20px"}}>
          <div><a title='PROFILE' href="/"><i class="fa-solid fa-user"></i></a></div>
          <div><a title='LANGUAGES' href="/"><i class="fa-solid fa-globe"></i></a></div>
        </div>
        <div className='questionButton'>
      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add question <i class="fa-solid fa-chevron-down"></i>
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Question </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <button style={{color:"red",backgroundColor:"white",border:"1px solid grey"}}>For post : use post section on home page</button>

         

          <div className='Makesure'>
            <h5>Tips on getting good answers quickly</h5>
            <li>Make sure your question has not been asked already</li>
            <li>Keep your question short and to the point</li>
            <li>Double-check grammar and spelling</li>
          </div>

          <div style={{marginBottom:"20px"}}>
          <select  className='selectingStyle'>
            <option value="public">public</option>
            <option value="limited">limited</option>
          </select>
          </div>

          <div className='questioInputLive'>
            <input type="text" name="" placeholder='Start your question with "What","How","Why",etc.'/>
          </div>
      
      
      
      
      
      
      
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add question</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Header
