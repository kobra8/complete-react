import React from "react";

const person = props => {
  return (
    <div>
    <h2>
      I'm {props.name} and have {props.age} year.
    </h2>
    <p>{props.children}</p>
    </div>
  );
};

export default person;
