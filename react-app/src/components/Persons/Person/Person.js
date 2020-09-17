import React, { Component }from "react";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass'
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {

    return (
   // <div className={classes.Person}>
   <Aux>
       {
       this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
       }
    <h2 onClick={this.props.click}>
      I'm {this.props.name} and have {this.props.age} year.
    </h2>
    <p>{this.props.children}</p>
    <input 
      type="text"
      //ref={inputEl => {this.inputElement = inputEl}}
      ref={this.inputElementRef}
      onChange={this.props.changed} 
      value={this.props.name}
      />
    </Aux>
    // </div>
    );
  };
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
