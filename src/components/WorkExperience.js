import React, { Component } from 'react';
import WorkExperienceEntry from './WorkExperienceEntry'

class WorkExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workExperienceEntries: []
        }

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    addButtonHandler = () => {
        this.setState({
            workExperienceEntries: this.state.workExperienceEntries.concat({
                role: '',
                company: '',
                startDate: '',
                endDate: '',
                description: '',
            })
        });
    }

    onChangeInput = (e, workExperienceEntryIndex, inputType) => {
        const newValue = e.target.value;
        const updatedWorkExperienceEntries = [...this.state.workExperienceEntries];
        switch(inputType) {
            case 'role':
                updatedWorkExperienceEntries[workExperienceEntryIndex].role = newValue;
                break;
            case 'company':
                updatedWorkExperienceEntries[workExperienceEntryIndex].company = newValue;
                break;
            case 'start-date':
                updatedWorkExperienceEntries[workExperienceEntryIndex].startDate = newValue;
                break;
            case 'end-date':
                updatedWorkExperienceEntries[workExperienceEntryIndex].endDate = newValue;
                break;
            case 'description':
                updatedWorkExperienceEntries[workExperienceEntryIndex].description = newValue;
        }
        this.setState({
            workExperienceEntries: updatedWorkExperienceEntries,
        })
    }
    

    render() {
        const { workExperienceEntries } = this.state;

        return(
            <div className="workExperience">
                <h2>Work Experience</h2>
                {workExperienceEntries.map((entry, index) => {
                    return (
                    <WorkExperienceEntry index={index} changeInput={this.onChangeInput} entryInfo={entry}/>)
                })}
                <button onClick={this.addButtonHandler}>Add</button>
            </div>
        )
    }
}

export default WorkExperience