import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  if(props.showPersons) {
    btnClass = classes.Red;
  }
  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>List below.</p>
      {/* <button style={customStyle} onClick={this.togglePersonsHandler}>Switch name</button> - wersja ze stylami inline i Radium  */}
      {/* <StyledButton altStyle={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch name</StyledButton> -  wersja ze Styled components*/}
      <button className={btnClass} onClick={props.clicked}>Switch name</button>
    </div>
  )
}

export default cockpit;