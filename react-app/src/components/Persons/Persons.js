import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[person.js] getDerivedStateFromProps');
  //   return state;
  // }

  // Jeżeli przy update sprawdzamy wszystkie propsy możemy zamiast shouldComponentUpdate zrobić dziedziczenie
  // z klasy PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   // Poniższe działa tylko kiedy obiekt jest nowy tzn odcinamy referencję i robimy głęboką kopię w App.js
  //   // Poprawia wydajność - renderuje real DOM przeglądarki tylko wtedy kiedy zmieniamy persons
  //   if(
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //     ) {
  //     return true;
  //   } else {
  //     return false
  //   }
  // }

  componentWillUnmount() {
    console.log('[persons.js] componentWillUnmount');
  }

render() {
  console.log('[person.js] rendering...');
  return this.props.persons.map(x => {
    return (
    <Person   
    click={() => this.props.clicked(x.id)}
    name={x.name} 
    age={x.age}
    key={x.id}
    changed={(event)=> this.props.changed(event, x.id)}
    />
    );
  });
}

}
export default Persons;