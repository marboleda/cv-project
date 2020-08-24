import React from 'react';

const generalInfo = (props) => {
    return(
        <div className="generalInfo">
            <form name="general-info">
                <h2>General Info</h2>

                <label for="name">
                    <strong>Name:</strong>
                </label>
                <input type="text" name="name" required />

                <label for="email">
                    <strong>Email:</strong>
                </label>
                <input type="text" name="email" />

                <label for="phone">
                    <strong>Phone Number:</strong>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default generalInfo