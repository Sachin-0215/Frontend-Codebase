import React from 'react'

function Data(props) {
    return (
        <div>
            <ul> <h1>About Me </h1>
                <li>
                    <h3> Name : {props.firstName} {props.lastName}</h3>
                </li>
                <li>
                    <h3> Enrollment No : {props.rollNo} </h3>
                </li>
                <li>
                    <h3> Age : {props.age}</h3>
                </li>
                <li>
                    <h3> Skills : { props.skills }</h3>
                </li>
            </ul>
        </div>
    )
}

export default Data;

