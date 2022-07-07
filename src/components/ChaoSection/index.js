import React, { Component } from 'react';
import ChaoList from './ChaoList/index';
const userDB = [
  { id: 3, fname: 'Elon' },
  { id: 2, fname: 'Rob' },
  { id: 1, fname: 'Tom' },
  { id: 4, fname: 'Alex' },
  { id: 5, fname: 'Max' },
]
class ChaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStraightSortId: true,
      isStraightSortName: true,
      users: userDB
    };
  }
  sortUsersByName = () => {
    const { users, isStraightSortName } = this.state;
    const copyUsers = [...users];
    //const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((prev, next) => {
      if (prev.fname < next.fname) {
        return isStraightSortName ? -1 : 1;
      }
      if (prev.fname > next.fname) {
        return isStraightSortName ? 1 : -1;
      }
      return 0;
    });
    this.setState({
      users: copyUsers,
      isStraightSortName: !isStraightSortName,
    });
  };
  sortUsersById = () => {
    const { users, isStraightSortId } = this.state;
    const copyUsers = [...users];
    //const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((prev, next) => {
      return isStraightSortId ? prev.id - next.id : next.id - prev.id;
    });
    this.setState({
      users: copyUsers,
      isStraightSortId: !isStraightSortId
    });
  };

  render() {
    const { isStraightSortId: isUp, isStraightSortName: isAlpha, users } = this.state;
    return <>
      <button onClick={this.sortUsersByName}>
        sort by name {isAlpha ? "Up" : "Down"}
      </button>
      <button onClick={this.sortUsersById}>
        sort by id {isUp ? "Up" : "Down"}
      </button>
      <ChaoList users={users} />
    </>;
  }
}
export default ChaoSection;
