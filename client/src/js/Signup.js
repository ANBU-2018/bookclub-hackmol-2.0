import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/Signup.css'

function Signup() {
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [Firstname, setFirstname] = useState('')
    const [Lastname, setLastname] = useState('')
    const [userName, setuserName] = useState('')

    const UserSignUp=async()=>{
        const response=await fetch('http://localhost:9000/user/signup',{
                method:'POST',
                headers:{
                    "Content-type":'application/json'
                },
                body:JSON.stringify({
                    'email':userMail,
                    'firstname':Firstname,
                    'lastname':Lastname,
                    'username':userName,
                    'password':userPassword 
                })

            }
        
        )
    }
    
    return (
        <div className="container1">
            <div className="row">
                <div className="col-md-offset-5 col-md-4 text-center">
                    <h1 className='text-white'>Sign Up</h1>
                    <div className="form-login">
                        <h4>Secure SignUp</h4>
                        <input type="text" id="userName" className="form-control input-sm chat-input" value={Firstname} placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
                        <input type="text" id="userName" className="form-control input-sm chat-input" value={Lastname} placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
                        <input type="text" id="userName" className="form-control input-sm chat-input" value={userName} placeholder="username" onChange={(e) => setuserName(e.target.value)} />
                        <input type="text" id="userName" className="form-control input-sm chat-input" value={userMail} placeholder="userMail" onChange={(e) => setUserMail(e.target.value)} />
                        <input type="password" id="userPassword" className="form-control input-sm chat-input" value={userPassword} placeholder="password" onChange={(e) => setUserPassword(e.target.value)} />
                        <div className="wrapper">
                            <span className="group-btn">
                                <Link to='/' onClick={UserSignUp} className="btn btn-danger btn-md">Sign Up <i className="fas fa-user-plus"></i></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
