import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import SearchBy from "./components/SearchBy"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  handleChange = event => {
    let name = event.target.name;
    this.setState({
      [name]: name
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        
        <SearchBy employees={this.state.employees}></SearchBy>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
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
