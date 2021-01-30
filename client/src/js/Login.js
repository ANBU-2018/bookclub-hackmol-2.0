import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/Login.css'

function Login() {
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-offset-5 col-md-4 text-center">
                    <h1 class='text-white'>Login</h1>
                    <div class="form-login">
                        <h4>Secure Login</h4>
                        <input type="text" id="userName" class="form-control input-sm chat-input" value={userMail} placeholder="username" onChange={(e) => setUserMail(e.target.value)} />
                        <input type="password" id="userPassword" class="form-control input-sm chat-input" value={userPassword} placeholder="password" onChange={(e) => setUserPassword(e.target.value)} />
                        <div class="wrapper">
                            <span class="group-btn">
                                <Link to='/home' class="btn btn-danger btn-md">Login <i class="fa fa-sign-in"></i></Link>
                                <Link to='/signup' class="btn btn-danger btn-md">Sign Up <i class="fas fa-user-plus"></i></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;