import React, { Component } from 'react';
import EducationEntry from './EducationEntry';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationEntries: [],
            editingEducation: true,
        };
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
                        />
                    )
                })}
                <button onClick={this.addButtonHandler}>Add</button>
            </div>
        )
    }
}

export default Education