import React from "react";
import "./style.css";

function InputForm(props) {
    return (
        <div className="inputForm">
            <h4>Search Directory:</h4>
            <div class="dropdown">
                <span>By Name</span>
                <div class="dropdown-content">
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default InputForm; 