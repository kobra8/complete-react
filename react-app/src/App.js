import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:"abc", name: 'Max', age: 28 },
      { id:"bcd", name: 'Manu', age: 29 },
      { id:"cde", name: 'Stephanie', age: 26 },
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

  nameChangedHandler = (event, personId) => {
    const personIndex =  this.state.persons.findIndex(x => {
      return x.id === personId
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons
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
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '3px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    // Warunkowe ustawianie zawrtości zmiennej persons do wyświetlania
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(x => {
            return <Person
            key={x.id}
            click={() => this.deletePersonHandler(x.id)}
            name={x.name} 
            age={x.age}
            changed={(event)=> this.nameChangedHandler(event, x.id)}
            />
          })}
      </div> 
      )
      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi allala</h1>
        <p className={classes.join(' ')}>List below.</p>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>Switch name</button>
        {/* Kod do renderowania przeniesiony do zmiennej persons */}
        {persons} 
      </div>
    );
  }
}

export default Radium(App);
