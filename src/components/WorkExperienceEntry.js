import React from 'react';
import './WorkExperienceEntry.css'

const workExperienceEntry = (props) => {
    return (
        <div className="workExperienceEntry">
            <span>
            <label for="role">Role:</label>
            <input type="text" name="role" />
            </span>

            <span>
            <label for="company">Company:</label>
            <input type="text" name="company" />
            </span>

            <span>
            <label for="start-date">Start Date:</label>
            <input type="text" name="start-date" /> {/* Make this one of those date selectors when you learn how to use those */}

            <label for="end-date">End Date:</label>
            <input type="text" name="end-date" /> {/* Make this one of those date selectors when you learn how to use those */}
            </span>

            <span>
            <label for="description">Responsibilities / Accomplishments:</label>
            <textarea name="description" />
            </span>

        </div>
    )
}

export default workExperienceEntry