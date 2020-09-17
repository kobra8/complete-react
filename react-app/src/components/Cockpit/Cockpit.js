import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Simulate http
 //   const timer = 
    // setTimeout(() => {
    //   alert('Data received!')
    // }, 1000)
    toggleBtnRef.current.click();
    return () => {
     // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = '';
  if(props.showPersons) {
    btnClass = classes.Red;
  }
  if(props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>List below.</p>
      {/* <button style={customStyle} onClick={this.togglePersonsHandler}>Switch name</button> - wersja ze stylami inline i Radium  */}
      {/* <StyledButton altStyle={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch name</StyledButton> -  wersja ze Styled components*/}
      <button
      ref={toggleBtnRef}
      className={btnClass} 
      onClick={props.clicked}>
        Switch name</button>
    <button onClick={authContext.login}>Log in</button>   
    </div>
  )
}

// Memo umożliwia poprawę wydajności dla komponentów funkcyjnych
export default React.memo(cockpit);