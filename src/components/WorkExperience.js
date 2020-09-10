import React, { Component } from 'react';
import WorkExperienceEntry from './WorkExperienceEntry'

class WorkExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workExperienceEntries: []
        }
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
                    <form data-work-experience-form={index}>
                        <span>
                        <label for="role">Role:</label>
                        <input type="text" name="role" onChange={(e) => this.onChangeInput(e, index, 'role')} value={entry.role} />
                        </span>
            
                        <span>
                        <label for="company">Company:</label>
                        <input type="text" name="company" value={entry.company}/>
                        </span>
            
                        <span>
                        <label for="start-date">Start Date:</label>
                        <input type="text" name="start-date" value={entry.startDate}/> {/* Make this one of those date selectors when you learn how to use those */}
            
                        <label for="end-date">End Date:</label>
                        <input type="text" name="end-date" value={entry.endDate}/> {/* Make this one of those date selectors when you learn how to use those */}
                        </span>
            
                        <span>
                        <label for="description">Responsibilities / Accomplishments:</label>
                        <textarea name="description" value={entry.description}/>
                        </span>
                    </form>)
                })}
                <button onClick={this.addButtonHandler}>Add</button>
            </div>
        )
    }
}

export default WorkExperience