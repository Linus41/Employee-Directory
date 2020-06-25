import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import SearchBy from "./components/SearchBy"
import Search from "./components/Search";

class App extends Component {
  state = {
    friends,
    filterFriends: friends
  };

  handleFilterChange = event => {
    //name holds onChange value from dropdown menu in SearchBy
    let name = event.target.value
    //filter through friends list to find name or department that matches target
    const filterList = this.state.friends.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(name.toLowerCase()) !== -1;
    })
    //set filter in state to new filtered list
    this.setState({
      filterFriends: filterList
    })
  }

//render all components with props
  render() {
    return (
      <Wrapper>
      
          <Title>Friend &nbsp;Directory</Title>
          <Search>Search:</Search>
          <SearchBy

            friends={this.state.friends}
            onChange={this.handleFilterChange}></SearchBy>



          {/* render filtered friends from state, renders all friends on load before filter is applied */}
          {this.state.filterFriends.map(friend => (
            <FriendCard
              name={friend.name}
              image={friend.image}
              department={friend.department}
              location={friend.location}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
