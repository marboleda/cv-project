import React from 'react';
import './EducationEntry.css';

const educationEntry = (props) => {
    const { isEditing, index, changeInput, entryInfo} = props;

    return (
        <div className="educationEntry">
            <span>
            <label for="title">Title of Study:</label>
            <input type="text" name="title" onChange={(e) => changeInput(e, index, 'title')} value={entryInfo.title}/>
            </span>

            <span>
            <label for="school">School:</label>
            <input type="text" name="school" onChange={(e) => changeInput(e, index, 'school')} value={entryInfo.school} />
            </span>

            <span>
            <label for="start-date">Start Date:</label>
            <input type="text" name="start-date" onChange={(e) => changeInput(e, index, 'start-date')} value={entryInfo.startDate} /> {/* Make this one of those date selectors when you learn how to use those */}
            </span>

            <span>
            <label for="end-date">End Date:</label>
            <input type="text" name="end-date" onChange={(e) => changeInput(e, index, 'end-date')} value={entryInfo.endDate} /> {/* Make this one of those date selectors when you learn how to use those */}
            </span>
        </div>
    )
}

export default educationEntry