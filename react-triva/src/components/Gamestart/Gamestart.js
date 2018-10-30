import React from "react";
import "./Gamestart.css";

const Gamestart = (props) =>(
    <div className="start">
        <h2>Game of Trivia</h2>
        <button onClick={()=>props.startGame()}>Start Game</button>
    </div>
)

export default Gamestart;