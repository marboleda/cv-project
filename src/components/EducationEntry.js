import React from 'react';

const educationEntry = (props) => {
    return (
        <div className="educationEntry">
            <label for="title">Title of Study:</label>
            <input type="text" name="title" />

            <label for="school">School:</label>
            <input type="text" name="school" />

            <label for="start-date">Start Date:</label>
            <input type="text" name="start-date" /> {/* Make this one of those date selectors when you learn how to use those */}

            <label for="end-date">End Date:</label>
            <input type="text" name="end-date" /> {/* Make this one of those date selectors when you learn how to use those */}
        </div>
    )
}

export default educationEntry