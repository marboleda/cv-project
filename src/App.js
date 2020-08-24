import React, { Component } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <GeneralInfo />
        <WorkExperience />
        <Education />
      </div>
    );
  }
}

export default App;
