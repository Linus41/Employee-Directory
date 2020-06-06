import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import InputForm from "./components/InputForm"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  // removeEmployee = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const employees = this.state.employees.filter(employee => employee.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ employees });
  // };
  //render a form for user filtering
  // searchEmployee = id => {
  //   const lastName = this.state.InputForm.filter(employee => employee.)
  // }
  //put in filters here: by name, by category, by department

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {/* {this.state.employee.map} */}
        <InputForm>
    
        </InputForm>
        {this.state.employees.map(employee => (
          <EmployeeCard
            // removeFriend={this.removeFriend}
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
