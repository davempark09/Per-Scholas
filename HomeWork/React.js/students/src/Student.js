import React from "react";
import App from "./App";
import Score from "./Scores";

export default function Student(props) {
    return (
        <div>
        <h1>{props.student.name}</h1>
        <h2>{props.student.bio}</h2>
        {props.student.scores.map((scores, index) => (<Score score={scores} key={index} />
        ))}
        </div>
        );
}