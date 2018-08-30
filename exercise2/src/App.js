import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char';
import Vallidation from './Validation/Validation';
 
class App extends Component {
  state = {
    textValue: '',
    textLength: 0
  }
 
  mainInputChange(event){
    const text = event.target.value;
    this.setState({
      textValue: text,
      textLength: text.length
    })
  }
  deleteLetter(index){
    const lettersArray = [...this.state.textValue]
    lettersArray.splice(index, 1)
    const resultText = lettersArray.join('');
    this.setState({
      textValue: resultText,
      textLength: resultText.length
    })
  }
 
  render() {
    let textArray = this.state.textValue.split('');
    let chars = textArray.map((x, i) => { 
      return <Char 
      key={i}
      letter={x}
      click={()=> this.deleteLetter(i)}
      />
    })
 
    return (
      <div className="App">
        <h1>Hi allala</h1>
        <div>
        Main input <input type="text" value={this.state.textValue} onChange={(event)=> this.mainInputChange(event)}></input>
        {chars}
        <Vallidation textLength={this.state.textLength}></Vallidation>
        </div>
      </div>
    );
  }
}
 
export default App;
 