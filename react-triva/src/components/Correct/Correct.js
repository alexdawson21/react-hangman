import React from "react";
import "./Correct.css";


const Correct = (props) =>(
<div>
    <div className="correct">
        <h2>Correct!</h2>
    </div>
    <div className="image-container">
        <img className="correct-image" src={props.image}/>
    </div>
</div>
)

export default Correct;