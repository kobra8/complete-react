import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
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
    // Warunkowe ustawianie zawrtości zmiennej persons do wyświetlania
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((x,i) => {
            return <Person
            key={i}
            click={() => this.deletePersonHandler(i)}
            name={x.name} 
            age={x.age}/>
          })}
      </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi allala</h1>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>Switch name</button>
        {/* Kod do renderowania przeniesiony do zmiennej persons */}
        {persons} 
      </div>
    );
  }
}

export default App;
