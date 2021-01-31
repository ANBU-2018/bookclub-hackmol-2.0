import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import '../css/Login.css'
import { Email, FirstName, Jwttoken, LastName, UserName } from '../redux/action';

function Login() {
    const jwtStored = useSelector(state => state.jwtToken)
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [jwtToken, setJwtToken] = useState(jwtStored ?? null)
    const dispatch = useDispatch();
    let history = useHistory()

    console.log(jwtStored)
    const handleLogin = async (e) => {
        e.preventDefault()
        const postLogin = await fetch("http://localhost:9000/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/Json",
            },
            body: JSON.stringify({
                email: userMail,
                password: userPassword,
            }),
        });
        const bata = await postLogin.json();    
        let jwt = bata[4]
        let email=bata[0]
        let firstName=bata[1]
        let lastName=bata[2]
        let userName=bata[3]
        const preference=await fetch(`http://localhost:9000/users/preference?email=${email}`,{
            method:"GET"
        });
        const {data}=await preference.json()
        console.log(data)
        dispatch(Jwttoken(jwt))
        dispatch(Email(email))
        dispatch(FirstName(firstName))
        dispatch(LastName(lastName))
        dispatch(UserName(userName))

        if (jwt && data.length != 0) {
            history.push('/home')
        }else{
            history.push('/genre')
        }
    }
    if (jwtToken) {
        history.push('/home')
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