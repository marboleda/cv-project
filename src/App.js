import React, { Component } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <GeneralInfo />
      </div>
    );
  }
}

export default App;
