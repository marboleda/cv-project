import React from 'react';
import './WorkExperienceEntry.css'

const workExperienceEntry = (props) => {

    const { index, changeInput, entryInfo, isEditing } = props;

    return (
        <div>
        { isEditing ? (
            <form className = 'workExperienceForm' data-work-experience-form={index}>
                <span>
                <label for="role">Role:</label>
                <input type="text" name="role" onChange={(e) => changeInput(e, index, 'role')} value={entryInfo.role} />
                </span>
                
                <span>
                <label for="company">Company:</label>
                <input type="text" name="company" onChange={(e) => changeInput(e, index, 'company')} value={entryInfo.company}/>
                </span>
                
                <span>
                <label for="start-date">Start Date:</label>
                <input type="date" name="start-date" onChange={(e) => changeInput(e, index, 'start-date')} value={entryInfo.startDate}/>
                
                <label for="end-date">End Date:</label>
                <input type="date" name="end-date" onChange={(e) => changeInput(e, index, 'end-date')} value={entryInfo.endDate}/>
                </span>
                
                <span>
                <label for="description">Responsibilities / Accomplishments:</label>
                <textarea name="description" onChange={(e) => changeInput(e, index, 'description')} value={entryInfo.description}/>
                </span>
            </form>
        ) : (
            <div className = 'workExperienceEntry'>
                <span class='role'>{entryInfo.role}</span>, {entryInfo.company} <span class='work-dates'>{entryInfo.startDate} to {entryInfo.endDate}</span>
                <div className = 'work-experience-description'>
                    {entryInfo.description}
                </div>
            </div>
        )}
        </div>
    )
}

export default workExperienceEntry