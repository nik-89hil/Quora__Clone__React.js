import React from 'react'
import './Spaces.css'

const Spaces = () => {
    return (
        <>
            <div className='spaceStyle'>
            <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-plus"></i> create Spaces &nbsp;
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Space || Post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='textAreaforPost'>
                                <textarea  cols="55" rows="13" placeholder='say something....'/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button style={{padding:"8px"}} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button style={{padding:"8px"}} type="button" className="btn btn-secondary">Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div><button><i class="fa-solid fa-utensils"></i><a href="">Food&nbsp;&nbsp;</a>&nbsp;</button></div>
            <div><button><i class="fa-solid fa-person-praying"></i><a href="">Yoga &nbsp;&nbsp;</a></button></div>
            <div><button><i class="fa-solid fa-dumbbell"></i><a href="">Gym&nbsp;</a>&nbsp;</button></div>
            <div><button><i class="fa-solid fa-person-snowboarding"></i><a href="">Health</a></button></div>
            <div><button><i class="fa-solid fa-briefcase"></i><a href="">Jobs</a>&nbsp;&nbsp;&nbsp;</button></div>

            </div>
        </>
    )
}

export default Spaces
