import React, { Component } from 'react';

class ErrorBonduary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }
  render() {
    if(this.state.errorMessage) {
        return <h1>{this.state.errorMessage}</h1>
    } else {
        return this.props.children;
    }
  }
}

export default ErrorBonduary;