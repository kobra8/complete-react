import React from "react";
// import Radium from 'radium';
import styled from 'styled-components';
// import './Person.css'

const StyledDiv = styled.div `
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = props => {
  const customStyle = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  };
  return (
    // <div className="Person" style = {customStyle}>
  <StyledDiv>
    <h2 onClick={props.click}>
      I'm {props.name} and have {props.age} year.
    </h2>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
  </StyledDiv>
  );
};

export default person;
