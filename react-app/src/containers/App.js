import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot }  from 'radium';
// import styled from 'styled-components';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// const StyledButton = styled.button`
//   background-color: ${props => props.altStyle ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   border-radius: 3px;

//   &:hover {
//     background-color: ${props => props.altStyle ? 'yellow' : 'lightgreen'};
//     color: black;
//   }
// `

class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    persons: [
      { id:"abc", name: 'Max', age: 28 },
      { id:"bcd", name: 'Manu', age: 29 },
      { id:"cde", name: 'Stephanie', age: 26 },
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get derived state from props ", props);
    return state;
  }

  componentDidMount() {
    console.log('Component did mount');
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
    // const customStyle = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   borderRadius: '3px',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }
    // Warunkowe ustawianie zawrtości zmiennej persons do wyświetlania
    let persons = null;
 
    if(this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
  
  
    }

    return (
      // <StyleRoot> - for Radium
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {/* Kod do renderowania przeniesiony do zmiennej persons */}
        {persons} 
      </div>
      // </StyleRoot>
    );
  }
}

export default App;
