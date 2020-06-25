import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import SearchBy from "./components/SearchBy"
import Search from "./components/Search";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees,
    filterEmployees: employees
  };


  //takes in a filter, then applies it to a filterEmployees function
  handleFilterChange = event => {
    let name = event.target.value
    //loop through all employees
    const filterList = this.state.employees.filter(item => {
      console.log(item)
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(name.toLowerCase()) !== -1;
    })
    console.log(filterList)
    this.setState({
      filterEmployees: filterList
    })
    //reset other menu field to clear? or clear filterEmployees state?

  }

  render() {
    return (
      <Wrapper>
      
          <Title>Friend Directory</Title>
          <Search>Search:</Search>
          <SearchBy

            employees={this.state.employees}
            onChange={this.handleFilterChange}></SearchBy>



          {/* for every employee, render a card with this info */}
          {this.state.filterEmployees.map(employee => (
            <EmployeeCard
              name={employee.name}
              image={employee.image}
              department={employee.department}
              location={employee.location}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
