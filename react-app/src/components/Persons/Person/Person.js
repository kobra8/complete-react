import React from "react";
import classes from './Person.css';

const person = props => {
  return (
  <div className={classes.Person}>
    <h2 onClick={props.click}>
      I'm {props.name} and have {props.age} year.
    </h2>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
  </div>
  );
};

export default person;
