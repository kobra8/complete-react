import React, { Component }from "react";
import classes from './Person.css';

class Person extends Component {
  render() {

    return (
      <div className={classes.Person}>
    <h2 onClick={this.props.click}>
      I'm {this.props.name} and have {this.props.age} year.
    </h2>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name}/>
  </div>
  );
};
}
export default Person;
