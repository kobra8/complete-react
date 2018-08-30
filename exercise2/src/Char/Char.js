import React from 'react';
import './Char.css';

const char = (props) => {
  return(
  <div className="Char" onClick={props.click}>
    <h4>{props.letter}</h4>
  </div>
  )
}

export default char;