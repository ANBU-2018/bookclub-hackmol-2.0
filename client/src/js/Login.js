import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import '../css/Login.css'

function Login() {
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const jwtToken = useSelector(state => state.jwtToken)

    const handleLogin=()=>{};
    return (
        <div class="container2">
            <div class="row">
                <div class="col-md-offset-5 col-md-4 text-center">
                    <h1 class='text-white'>Login</h1>
                    <form class="form-login" onSubmit={handleLogin}>
                        <h4>Secure Login</h4>
                        <input type="email" id="userName" class="form-control input-sm chat-input" value={userMail} placeholder="E-mail" onChange={(e) => setUserMail(e.target.value)} />
                        <input type="password" id="userPassword" class="form-control input-sm chat-input" value={userPassword} placeholder="password" onChange={(e) => setUserPassword(e.target.value)} />
                        <div class="wrapper">
                            <span class="group-btn">
                                <button class="btn btn-danger btn-md" type="submit">Login <i class="fa fa-sign-in"></i></button>
                                <Link to='/signup' class="btn btn-danger btn-md">Sign Up <i class="fas fa-user-plus"></i></Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;