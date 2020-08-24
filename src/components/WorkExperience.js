import React, { Component } from 'react';
import WorkExperienceEntry from './WorkExperienceEntry'


class WorkExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="workExperience">
                <h2>Work Experience</h2>
                <form name="work-experience">
                    <WorkExperienceEntry we_id={0}/>
                </form>
            </div>
        )
    }
}

export default WorkExperience