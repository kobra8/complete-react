import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi allala</h1>
       <Person name="Mac" age="43"/>
       <Person name="Manu" age="33">Hobby: Race</Person>
       <Person name="Xam" age="23"/>
      </div>
    );
  }
}

export default App;
