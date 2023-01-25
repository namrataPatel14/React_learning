import React from 'react';


const Greet = (props) => { 
    return(
      <div>
        <p>{props.name} a.k.a {props.originalName}</p>
        {props.children}
      </div>
    ) 
}

export default Greet;