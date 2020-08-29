import React from 'react';

const generalInfo = (props) => {
    if (props.isEditing) {
        return(
            <div className="generalInfo">
                <form 
                    onSubmit={props.submit} 
                    name="general-info"
                >
                
                    <h2>General Info</h2>

                    <label for="name">
                        <strong>Name:</strong>
                    </label>
                    <input type="text" name="name" onChange={props.nameChange} required />

                    <label for="email">
                        <strong>Email:</strong>
                    </label>
                    <input type="text" name="email" onChange={props.emailChange} />

                    <label for="phone">
                        <strong>Phone Number:</strong>
                    </label>
                    <input type="text" name="phone" onChange={props.phoneChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    } else {
        return(
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
                <p>{props.phone}</p>
                <button id="edit-general-info-button" onClick={props.edit}>Edit</button>
            </div>
        )
    }
}

export default generalInfo