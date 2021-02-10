import React from 'react';

function Gravatar(props) {
    return (
        <img 
            className={props.className} 
            // src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
            src={props.email}
            alt="Avatar"
        />
    )
}

export default Gravatar;