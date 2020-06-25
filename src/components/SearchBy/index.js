import React, { Component } from "react";
import "./style.css";


class SearchBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDept: []
        }

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
                <div className="col-sm-5">
                    <form>
                        <label>By Name:&nbsp;</label>
                        <select
                            onChange={this.props.onChange}>
                            <option></option>
                            {this.props.employees.map(employee => (
                                <option>{employee.name}</option>
                            ))};

                        </select>

                    </form>
                </div>
                <div className="col-sm-2">
                    <h1 id="or">~OR~</h1>
                </div>
                <div className="col-sm-5">
                    <form>
                        <label> By Job: &nbsp;</label>
                        <select
                            onChange={this.props.onChange}
                        >
                            <option></option>
                            {unique.map(department => (
                                <option>{department}</option>
                            ))};
                        </select>
                    </form>
                </div>
            </div>

        );

    }
}

export default SearchBy; 