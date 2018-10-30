import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href={this.props.href} target="_blank" >{this.props.text}</a>
      </div>
    );
  }
}

export default App;
