import React, { useState } from 'react';
import './login.css';

async function login(email, password, setErrors, log) {
    if(!email || !password || email.length < 8 || password.length < 6) {
        setErrors('Incorrect Email or Password');
        return false;
    }

    let response = await fetch('http://localhost:5000/api/users/login', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            email : email,
            password : password
        })
    });

    if(response.status === 400) {
        setErrors('Invalid Email or Password');
        return false;
    }

    if(response.status === 200) {
        let user = JSON.parse(await response.text());

        localStorage.setItem('loggedUser', user._id);
        log(user._id);
        return false;
    }
}

function Login({ changeRoute, log }) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [errors, setErrors] = useState('');

    return (
        <form className="box" onSubmit={e => {
            e.preventDefault();
            login(email, password, setErrors, log);
        }}>
            <input type="text" placeholder='Email' onChange={x => setEmail(x.target.value)}/>
            <input type="text" placeholder='Password' onChange={x => setPassword(x.target.value)}></input>
            <input type="submit" className='primaryButton' value='Login' />
                        
            <h5>{ errors }</h5>

            <hr/>
            
            <input type='submit' className='secondaryButton' value='Register' onClick={changeRoute} />
            
        </form>

    )
}

export default Login
