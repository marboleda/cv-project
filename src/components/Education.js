import React, { Component } from 'react';
import EducationEntry from './EducationEntry';

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="education">
                <h2>Education</h2>
                <form>
                    <EducationEntry />
                </form>
            </div>
        )
    }
}

export default Education