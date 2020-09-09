import React, { Component } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingGeneralInfo: true,
      generalInfoName: "",
      generalInfoEmail: "",
      generalInfoPhoneNumber: "",
      editingWorkExperience: true,
    }

    this.generalInfoNameChangeHandler = this.generalInfoNameChangeHandler.bind(this);
    this.generalInfoEmailChangeHandler = this.generalInfoEmailChangeHandler.bind(this);
    this.generalInfoPhoneNumberChangeHandler = this.generalInfoPhoneNumberChangeHandler.bind(this);
    this.generalInfoSubmitHandler = this.generalInfoSubmitHandler.bind(this);
    this.generalInfoEditButtonHandler = this.generalInfoEditButtonHandler.bind(this);
  }

  generalInfoNameChangeHandler = (event) => {
    this.setState({
      generalInfoName: event.target.value
    });
  }

  generalInfoEmailChangeHandler = (event) => {
    this.setState({
      generalInfoEmail: event.target.value
    });
  }

  generalInfoPhoneNumberChangeHandler = (event) => {
    this.setState({
      generalInfoPhoneNumber: event.target.value
    })
  }

  generalInfoSubmitHandler = () => {
    this.setState({
      editingGeneralInfo: false,
    })
  }

  generalInfoEditButtonHandler = () => {
    this.setState({
      editingGeneralInfo: true
    });
  }

  render() {
    const { editingGeneralInfo, generalInfoName, generalInfoEmail, generalInfoPhoneNumber, editingWorkExperience } = this.state;

    return (
      <div className="App">
        <GeneralInfo 
          submit={this.generalInfoSubmitHandler} 
          edit={this.generalInfoEditButtonHandler}
          isEditing={editingGeneralInfo} 
          name={generalInfoName}
          email={generalInfoEmail}
          phone={generalInfoPhoneNumber}
          nameChange={this.generalInfoNameChangeHandler}
          phoneChange={this.generalInfoPhoneNumberChangeHandler}
          emailChange={this.generalInfoEmailChangeHandler}
        />
        <WorkExperience
          isEditing={editingWorkExperience} 
        />
        <Education />
      </div>
    );
  }
}

export default App;
