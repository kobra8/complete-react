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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 29 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 29 }
      ]
    })
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '3px'
    }
    return (
      <div className="App">
        <h1>Hi allala</h1>
        <button style={btnStyle} onClick={() => this.switchNameHandler('Aleksander')}>Switch name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age="33"
        click={this.switchNameHandler.bind(this, 'Antony')}
        changed={this.nameChangedHandler}>Hobby: Race</Person>
        <Person
         name="Xam" 
         age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
