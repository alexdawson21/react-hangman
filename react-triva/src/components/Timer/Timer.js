import React from "react";
import "./Timer.css";

const Timer = (props) =>(
    <div className="timer">
        <h2>Timer: {props.timer}</h2>
    </div>
)

export default Timer;