import React from "react";
import "./Question.css";

const Question = (props) =>(
<div>
    <div className="number">
        <h3>Question: {props.number}</h3>
    </div>
    <div className="question">
        <h3>{props.question}</h3>
    </div>
    <div className="answers">
        <div className="buttonwrap">
        <button className="btn btn-secondary buttons" onClick={()=>props.answering(props.answers[0].correct)}>{props.answers[0].text}</button>
        </div>
        <div className="buttonwrap">
        <button className="btn btn-secondary buttons" onClick={()=>props.answering(props.answers[1].correct)}>{props.answers[1].text}</button>
        </div>
        <div className="buttonwrap">
        <button className="btn btn-secondary buttons" onClick={()=>props.answering(props.answers[2].correct)}>{props.answers[2].text}</button>
        </div>
        <div className="buttonwrap">
        <button className="btn btn-secondary buttons" onClick={()=>props.answering(props.answers[3].correct)}>{props.answers[3].text}</button>
        </div>
    </div>
</div>
)

export default Question