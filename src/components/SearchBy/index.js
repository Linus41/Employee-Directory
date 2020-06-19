import React from "react";
import "./style.css";

// const uniqueDept = [];
// console.log(uniqueDept);

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
                    {/* trying to take the duplicates out of the department array, but is there a department array??
                    Need to push to global array from here, then use set ?*/}
                   <option></option>
                   
                        {/* {props.employees.map(employee => (
                        <option>{uniqueDept.push(employee.name.toString())}</option> */}
                        ))};
                    
                </select>
            </form>
        </div>
    );
}

export default SearchBy; 