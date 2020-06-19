import React, { Component } from "react";
import "./style.css";


class SearchBy extends Component {
    state = {
        department: 0
    }
    render() {
        const department = [];

        (this.props.employees.forEach(employee => {
            department.push(employee.department)
        }))
        const unique = Array.from(new Set(department));

        return (
            // filter by name
            <div className="searchBy" >
                <h4>Search:</h4>
                <form>
                    <label>By Name:</label>
                    <select>
                        <option></option>
                        {this.props.employees.map(employee => (
                            <option>{employee.name}</option>
                        ))};

                </select>
                </form>
                <form>
                    <label>By Department:</label>
                    <select>
                        <option></option>
                        {unique.map(department => (
                            <option>{department}</option>
                        ))};



                    </select>
                </form>
            </div>
        );

    }
}

export default SearchBy; 