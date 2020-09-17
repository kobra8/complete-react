import React, { Component, Fragment } from 'react';
import './App.css';
// import Radium, { StyleRoot }  from 'radium';
// import styled from 'styled-components';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

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
    showPersons: false,
    cockpitVisible: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get derived state from props ", props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] Component did mount');
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
    // Deep copy aby dostać obiekt z nową referencją - działa na hook shouldComponentUpdate w Persons.js
    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState((prevState, props) => {
      return {
        persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    }) 
  }

  loginHandler = () => {
    this.setState({authenticated: true})
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
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
          />; 
    }

    return (
      // <StyleRoot> - for Radium
      <Fragment>
      <button onClick={() => this.setState({cockpitVisible: false})}>Hide cockpit</button>
      <AuthContext.Provider value={
        { authenticated: this.state.authenticated,
          login: this.loginHandler}
          }>
      { this.state.cockpitVisible ? (
        < Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}/> 
          ) : null };
        {/* Kod do renderowania przeniesiony do zmiennej persons */}
        {persons} 
        </AuthContext.Provider>
      </Fragment>
    // </StyleRoot>
    )
  }
}

export default withClass(App, classes.App);
