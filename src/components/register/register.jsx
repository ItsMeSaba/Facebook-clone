import React, { useState } from 'react';
import { signUp } from '../../firebase/auth';

// async function register(username, email, password, rpassword, setErrors) {
//     let errors = [];

//     if(!username || !email || !password || !rpassword) {
//         setErrors(['Fill All Fields']);
//         return false;
//     }

//     if(username.length < 6) errors.push('Username Must Be At Least 6 Characters');

//     if(email.length < 8 || !email.includes('@')) errors.push('Enter Valid Email');

//     if(password.length < 6) errors.push('Password Must Be At Least 6 Characters');

//     if(password != rpassword) errors.push('Passwords Doesn\'t Match');

//     if(errors.length > 0) {
//         setErrors(errors);
//         return false;
//     }

//     try {    
//         let request = await fetch('http://localhost:5000/api/users/register', {
//             method : 'POST',
//             credentials: 'include',
//             // mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body : JSON.stringify({
//                 username : username,
//                 email : email,
//                 password : password,
//                 rpassword : rpassword,
//             })
//         });

//         if(request.status === 200) {
//             setErrors(['success']);
//         }

//         else if(request.status === 400) {
//             let text = JSON.parse(await request.text());
//             setErrors(text);
//         } 

        
//     } catch(e) {
//         console.log('Something went wrong', e)
//         setErrors(['Something Went Wrong'])
//     }
// }

function Register({ changeRoute }) {
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [rpassword, setRpassword] = useState('');
    let [errors, setErrors] = useState();

    return (
        <form className="box" autoComplete="on" onSubmit={e => {
            e.preventDefault();
            signUp(username, email, password, rpassword, setErrors);
            // register(username, email, password, rpassword, setErrors, changeRoute);
        }}>
            <input type="text" placeholder='Username' onChange={x => setUsername(x.target.value)} />
            <input type="text" placeholder='Email' onChange={x => setEmail(x.target.value)}/>
            <input type="password" placeholder='Password' onChange={x => setPassword(x.target.value)}/>
            <input type="password" placeholder='Repeat Password' onChange={x => setRpassword(x.target.value)}/>

            <input type="submit" className='primaryButton' value='Register' />

            { errors && <h5>{ errors }</h5> }

            <hr/>
            
            <input type="submit" className='secondaryButton' onClick={changeRoute} value='Login' /> 
        </form>
   )
}

export default Register
