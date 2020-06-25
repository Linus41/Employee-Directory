import React from "react";
import "./style.css";

function EmployeeCard(props) {
  // if(this.state.employeeName === props.name || this.state.department === props.department) {

  // }
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Job:</strong> {props.department}
          </li>
          <li>
            <strong>City:</strong> {props.location}
          </li>

        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
