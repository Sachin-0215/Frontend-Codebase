import React from "react";

export default function Fullstack(props) {
    return (
        <div>
            <ol> <h1>Full Stack Roadmap</h1>
                <li>
                    <h3> Frontend - </h3>
                    <h4> Core : {props.skeleton} {props.styling} {props.functioning}</h4>
                    <h4> Framework : {props.framework}</h4>
                </li>
                <li>
                    <h3> Backend : {props.backend} </h3>
                </li>
                <li>
                    <h3> DataBase : {props.db}</h3>
                </li>
                <li>
                    <h3> Where to Upload Code : {props.upload}</h3>
                </li>
            </ol>
        </div>
    );
}