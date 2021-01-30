import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import '../css/Login.css'

function Login() {
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [jwtToken, setJwtToken] = useState(useSelector(state => state.jwtToken))
    let history = useHistory()
    const handleLogin = async (e) => {
        e.preventDefault()
        const postLogin = await fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
                "Content-type": "application/Json",
            },
            body: JSON.stringify({
                email: userMail,
                password: userPassword
            }),
        });
        const data = await postLogin.json();
        console.log(data);
    }
    return (
        <div className="container2">
            <div className="row">
                <div className="col-md-offset-5 col-md-4 text-center">
                    <h1 className='text-white'>Login</h1>
                    <form className="form-login" onSubmit={handleLogin}>
                        <h4>Secure Login</h4>
                        <input type="email" id="userName" className="form-control input-sm chat-input" value={userMail} placeholder="E-mail" onChange={(e) => setUserMail(e.target.value)} />
                        <input type="password" id="userPassword" className="form-control input-sm chat-input" value={userPassword} placeholder="password" onChange={(e) => setUserPassword(e.target.value)} />
                        <div className="wrapper">
                            <span className="group-btn">
                                <button className="btn btn-danger btn-md" type="submit">Login <i className="fa fa-sign-in"></i></button>
                                <Link to='/signup' className="btn btn-danger btn-md">Sign Up <i className="fas fa-user-plus"></i></Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;