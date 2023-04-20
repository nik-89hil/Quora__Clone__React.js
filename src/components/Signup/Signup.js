import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { useEffect,useState } from 'react'
// import axios from "axios";
// import { response } from 'express'

const Signup = () => {

    const {register,handleSubmit,formState:{errors}}=useForm();
    // const handleregistration = (data)=>console.log(data); // take data from here
    const handleError=(errors)=>{};
    // const [post,setPost] = useState([])

    const handleregistration =(data)=>{
        console.log(data)
        // axios.post("http://localhost:8080/user",{
        //     data
        // })
        
    }
    
    const registerOptions={
        email:{required:"Email is required !!"},
        password:{required:"Password is required !!",
        minLength:{
            value:8,
            message:"Password should be atleast 8 character..."
        },maxLength:{
            value:15,
            message:"Provide it less than 11 character"
        }}
    }




    return (
        <>
            <div className='backgroundImg'>
                <div className='signupContainer'>
                    <div className='qouraImg'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" alt="logo" /></div>
                    <div style={{ color: "grey" }}><h5>A place to share knowledge and better understand the world</h5></div>

                    <div className='alignSingupCont'>
                        <div className='leftsingup'>
                            <div>
                                <p>By continuing you indicate that you agree to
                                    Nikhil's Quora Terms of Service and Privacy Policy.
                                </p>
                            </div>
                            <div className='googlelogin'>
                            <Link to={"/auth/google"}><img src="https://global.discourse-cdn.com/business5/uploads/webflow1/original/3X/2/4/24bc102eccbabdb30b5ec93447732ead235d5549.png" alt="google_login"/></Link>
                            </div>
                            <div>
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <a>Sign up with email</a>
                                </button>


                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Signup</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body" style={{height:"55vh"}}>
                                                <form onSubmit={handleSubmit(handleregistration,handleError)}>
                                                    <div>
                                                        <label htmlFor="email">Email</label><br /><br />
                                                        <input type="email" placeholder='Your email' name='email'{...register('email',registerOptions.email)} /><br /><br />
                                                        <p style={{color:"red"}}>{errors?.email && errors.email.message}</p>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password">Password</label><br /><br />
                                                        <input type="password" placeholder='Your password' name='password'{...register('password',registerOptions.password)} /><br /><br />
                                                        <p style={{color:"red"}}>{errors?.password && errors.password.message}</p>
                                                    </div>
                                                    <button>signup</button>
                                                </form>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rightsignup'>
                    <div>Login</div>
                    
                    <div>
                        <form onSubmit={handleSubmit(handleregistration)}>
                            <div>
                                <label htmlFor="email">Email</label><br />
                                <input type="email" placeholder='Your email' name='email'{...register('email')}/>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label><br />
                                <input type="password" placeholder='Your password' name='password'{...register('password')}/>
                            </div>
                            <br />
                            <button className='Loginbutton'><Link style={{color:"white"}} to="/home">Login</Link></button>
                        </form>
                    </div>
                </div>
                
                    
            </div>
            <div className='lastonesingup'>
                    
                        <li>About</li>
                        <li>Carrers</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Contact</li>
                        <li>Languages</li>
                        <li>Your Ad Choices</li>
                        <li>Press</li>
                        <li>Quora, Inc. 2023</li>
                    
                </div>

        </div>
                
            </div>
           


        </>
    )
}

export default Signup
