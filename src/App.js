import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import SearchBy from "./components/SearchBy"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees,
    filterEmployees: employees
  };


  //takes in a filter, then applies it to a filterEmployees function
  handleFilterChange = event => {
    const name = event.target.value
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

  }



  //takes the current filter in state and stores employees affected by that filter and renders them somehow
  // filterEmployees = () => {
  //   const revised = this.state.filterEmployees
  //   this.setState(revised)
  // }


  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>

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
          // onChange={this.handleChange}

          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
