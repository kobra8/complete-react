import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  }
  render() {
    return (
      <div className="App">
       <h1>Hi allala</h1>
       <button>Switch name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name="Manu" age="33">Hobby: Race</Person>
       <Person name="Xam" age="23"/>
      </div>
    );
  }
}

export default App;
