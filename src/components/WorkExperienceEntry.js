import React from 'react';

const workExperienceEntry = (props) => {
    return (
        <div className="workExperienceEntry">
            <label for="role">Role:</label>
            <input type="text" name="role" />

            <label for="company">Company:</label>
            <input type="text" name="company" />

            <label for="start-date">Start Date:</label>
            <input type="text" name="start-date" /> {/* Make this one of those date selectors when you learn how to use those */}

            <label for="end-date">End Date:</label>
            <input type="text" name="end-date" /> {/* Make this one of those date selectors when you learn how to use those */}

            <label for="description">Responsibilities / Accomplishments:</label>
            <textarea name="description" />

        </div>
    )
}

export default workExperienceEntry