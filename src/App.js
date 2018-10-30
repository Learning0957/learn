import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Hello from master</div>
        <div>Hello from master</div>
        <div>Hello from master</div>
        <div>Hello from master</div>
        <a href={this.props.href} target="_blank" >{this.props.text}</a>
      </div>
    );
  }
}

export default App;
