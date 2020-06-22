import React, { Component } from "react";
import "./style.css";


class SearchBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDept: []
        }

    }
    //map in this function to return only the selected department
    // handleDeptChange(event) {
    //     this.setState({
    //         currentDept: event.target.value
    //     });
    // }
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
                    <select
                       >
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