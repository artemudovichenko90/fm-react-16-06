import React, { Component } from 'react';
import SelectedUsers from './SelectedUsers/index';
import UserList from './UserList/index';
const userDB = [
  { id: 1, fname: 'Elon' },
  { id: 2, fname: 'Rob' },
  { id: 3, fname: 'Tom' },
  { id: 4, fname: 'Alex' },
  { id: 5, fname: 'Max' },
]
class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDB.map(u => ({ ...u, isSelected: false }))
    }
  }

  setUserSelector = (newUsers) => {
    this.setState({ users: newUsers })
  }

  render() {
    const { users } = this.state;

    return (
      <section>
        <SelectedUsers users={users} />
        <UserList users={users} setUserSelector={this.setUserSelector} />
      </section>
    );
  }
}

export default UserSection;
