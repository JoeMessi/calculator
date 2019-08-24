import React, { Component } from 'react';
import Display from './Components/Display';
import KeyPad from './Components/KeyPad';


export default class App extends Component {

  // initial state
  state = {
    display: '',
    equal: false   // boolian that helps with the functionality when the equal operator button is clicked
  }

  // build up the expression that will be evaluete
  buildExpr = (val) => {
    // if equal button has been clicked
    if(this.state.equal) {
        // if val is a number
        if(!isNaN(val)) {
          this.setState({
            display: val,
            equal: false
          })
        }
        // when previous error computed nothing but numbers work
        if(this.state.display === 'Error') {
          return null;
        }
        // if val is NOT a number
        if(isNaN(val)) {
          this.setState({
            display: this.state.display + val,
            equal: false
          })
        }
    }else{
      this.setState({
        display: this.state.display + val
      })
    }
  } // end buildExpr


  // reset the calculator
  reset = () => {
    this.setState({
      display: ''
    })
  }

  // evaluetes the expression
  evaluete = () => {
    if(this.state.display.length === 0 || this.state.display === 'Error' ) {
      return null
    }
    try {
      this.setState({
        display: eval(this.state.display),
        equal: true
      })
    }catch(err){
      this.setState({
        display: 'Error',
        equal: true
      })
    }
  }

  // this runs every time a button is clicked
  onClick = (buttonValue) => {
    if(buttonValue === 'AC') {
      this.reset();
    }else if(buttonValue === '='){
      this.evaluete();
    }else{
      this.buildExpr(buttonValue);
    }
  }

  render() {
    return (
        <div className="calculator-container">
           <Display display={this.state.display} />
           <KeyPad onClick={this.onClick} />
        </div>
    );
  }


}
