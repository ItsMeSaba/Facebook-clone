import React from 'react';


function aboutRow({ Icon, text }) {
    return (
        <div>
            { Icon }

            <h3>{ text }</h3>
        </div>
    )
}


export default aboutRow;