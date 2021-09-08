import React from "react";
import App from "./App";

export default function Score(props) {
    return (
        <div>
        <p>{props.score.date}</p>
        <p>{props.score.score}</p>
        </div>
        );
}