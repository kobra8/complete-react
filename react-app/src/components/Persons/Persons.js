import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map(x => {
    return <Person   
    click={() => props.clicked(x.id)}
    name={x.name} 
    age={x.age}
    key={x.id}
    changed={(event)=> props.changed(event, x.id)}
    />
  })

export default persons;