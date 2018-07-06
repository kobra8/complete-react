import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName: ['John', 'Staszek' ]
  }

  changeUserNameHandler = (event) => {
    this.setState({
      userName: [event.target.value, 'Staszek']
    })
  }

  render() {
    return (
      <div className="App">
      <h2>React - exercise 1</h2>
       <UserOutput name={this.state.userName[0]} />
       <UserOutput name={this.state.userName[1]} />
       <UserInput changeName={this.changeUserNameHandler} name={this.state.userName[0]}/>
      </div>
    );
  }
}

export default App;
