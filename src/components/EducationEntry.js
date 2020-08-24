import React from 'react';
import './EducationEntry.css';

const educationEntry = (props) => {
    return (
        <div className="educationEntry">
            <span>
            <label for="title">Title of Study:</label>
            <input type="text" name="title" />
            </span>

            <span>
            <label for="school">School:</label>
            <input type="text" name="school" />
            </span>

            <span>
            <label for="start-date">Start Date:</label>
            <input type="text" name="start-date" /> {/* Make this one of those date selectors when you learn how to use those */}
            </span>

            <span>
            <label for="end-date">End Date:</label>
            <input type="text" name="end-date" /> {/* Make this one of those date selectors when you learn how to use those */}
            </span>
        </div>
    )
}

export default educationEntry