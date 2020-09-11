import React, { Component } from 'react';
import EducationEntry from './EducationEntry';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationEntries: [],
            editingEducation: true,
        };

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    addButtonHandler = () => {
        this.setState({
            educationEntries: this.state.educationEntries.concat({
                title: '',
                school: '',
                startDate: '',
                endDate: '',
            })
        });
    }

    onChangeInput = (e, educationEntryIndex, inputType) => {
        const newValue = e.target.value;
        const updatedEducationEntries = [...this.state.educationEntries];
        switch(inputType) {
            case 'title':
                updatedEducationEntries[educationEntryIndex].title = e.target.value;
                break;
            case 'school':
                updatedEducationEntries[educationEntryIndex].school = e.target.value;
                break;
            case 'start-date':
                updatedEducationEntries[educationEntryIndex].startDate = e.target.value;
                break;
            case 'end-date':
                updatedEducationEntries[educationEntryIndex].endDate = e.target.value;
        }
        this.setState({
            educationEntries: updatedEducationEntries,
        });
    }

    submitButtonHandler = () => {
        this.setState({
            editingEducation: false,
        });
    }

    render() {
        const { educationEntries, editingEducation } = this.state;

        return(
            <div className="education">
                <h2>Education</h2>
                {educationEntries.map((entry, index) => {
                    return (
                        <EducationEntry
                            isEditing={editingEducation}
                            index={index}
                            changeInput={this.onChangeInput}
                            entryInfo={entry}
                        />
                    )
                })}
                { editingEducation ? (<button onClick={this.addButtonHandler}>Add</button>) : null }
                <button onClick={this.submitButtonHandler}>Submit</button>
            </div>
        )
    }
}

export default Education