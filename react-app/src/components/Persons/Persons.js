import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[person.js] getDerivedStateFromProps');
  //   return state;
  // }

render() {
  console.log('[person.js] rendering...');
  return this.props.persons.map(x => {
    return <Person   
    click={() => this.props.clicked(x.id)}
    name={x.name} 
    age={x.age}
    key={x.id}
    changed={(event)=> this.props.changed(event, x.id)}
    />
  })
}

}
export default Persons;