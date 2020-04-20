import React from "react";
import Radium from 'radium';
import './Person.css'

const person = props => {
  return (
    <div className="Person">
    <h2 onClick={props.click}>
      I'm {props.name} and have {props.age} year.
    </h2>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default Radium(person);
