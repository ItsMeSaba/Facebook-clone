import React, { useState } from 'react'
import Login from '../../components/login/login';
import Register from '../../components/register/register';

import './authenticate.css';

function Authenticate({ log }) {
    let [registered, setRegistered] = useState(true);
    
    return (
        <div className='authenticate'>
            <div className="left">
                <p><span>facebook</span> <br/> Clone</p>
            </div>
            
            <div className="right">
                { !registered && <Register changeRoute={() => setRegistered(!registered)} log={log}/> }
                { registered && <Login changeRoute={() => setRegistered(!registered)} log={log}/> }
            </div>
        </div>
    )
}

export default Authenticate;
