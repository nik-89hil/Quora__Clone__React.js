import React from 'react'
import "./midtop.css"
import { Link } from 'react-router-dom'

const MidTop = () => {
    return (
        <>
            <div className='midTop'>
                <div className='midTopFirst'>
                    <div><img src="https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg" alt="logo" /></div>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <input type="text" placeholder='What do you want to ask or share?' />
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

                <div className='midTopSecond'>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-regular fa-message"></i><a href="">Ask</a></button>
                    <button><i class="fa-regular fa-pen-to-square"></i><Link to={"/answer"}><a>&nbsp;Answer</a></Link></button>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-fancy"></i><a href="">Post</a></button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Space || Posts <span>hello</span></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <select className='selectingStyle'>
                                    <option value="everyone">Everyone</option>
                                    <option value="limited">Limited</option>
                                </select>
                            </div>
                       
                       
                            <div className='textAreaforPost'>
                            
                                <textarea  cols="55" rows="13" placeholder='say something.....'/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

                </div>
            </div>

        </>
    )
}

export default MidTop
