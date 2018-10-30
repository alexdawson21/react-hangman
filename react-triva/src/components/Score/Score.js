import React from "react";
import "./Score.css";

const Score = (props) =>(
    <div className="score">
        <h2>Score</h2>
        <h2>Correct: {props.correct}</h2>
        <h2>Incorrect: {props.incorrect}</h2>
        <button onClick={()=>props.startGame()}>Restart?</button>
    </div>
)

export default Score;