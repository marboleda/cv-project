import React from 'react';
import './EducationEntry.css';

const educationEntry = (props) => {
    const { isEditing, index, changeInput, entryInfo} = props;

    return (
        <div>
        { isEditing ? (
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
                <input type="date" name="start-date" onChange={(e) => changeInput(e, index, 'start-date')} value={entryInfo.startDate} />
                </span>

                <span>
                <label for="end-date">End Date:</label>
                <input type="date" name="end-date" onChange={(e) => changeInput(e, index, 'end-date')} value={entryInfo.endDate} />
                </span>
            </div>
        ) : (
            <div className='educationEntry'>
                <span className='title'>{entryInfo.title}</span>
                <span className='school-and-dates'>{entryInfo.school} ({entryInfo.startDate} to {entryInfo.endDate})</span>
            </div>
            )}
        </div>
    )
}

export default educationEntry