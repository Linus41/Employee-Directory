import React from "react";
import "./style.css";
//create global variable that filters departments and then use it in by department code
const uniqueDept = 

function SearchBy(props) {
    return (
        // filter by name

        <div className="searchBy">
            <h4>Search:</h4>
            <form>
                <label>By Name:</label>
                <select>
                    <option></option>
                    {props.employees.map(employee => (
                        <option>{employee.name}</option>
                    ))};
                    
                </select>
            </form>
            <form>
                <label>By Department:</label>
                <select>
                   
                    <option>{props.employees.filter((employee) => employee)}</option>
                      
                    
                </select>
            </form>
        </div>
    );
}

export default SearchBy; 