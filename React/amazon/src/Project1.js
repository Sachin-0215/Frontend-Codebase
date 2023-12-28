import React from 'react'

function Project1(props) {
    return (
        <div>
            <ul> <h1>Details of the Person</h1>
                <li>
                    <h3> Name : {props.firstName} {props.lastName}</h3>
                </li>
                <li>
                    <h3> Age : {props.age}</h3>
                </li>
                <li>
                    <h3> Higher Education : { props.education }</h3>
                </li>
                <li>
                    <h3> Date of Birth : { props.dob }</h3>
                </li>
            </ul>
        </div>
    )
}

export default Project1;

