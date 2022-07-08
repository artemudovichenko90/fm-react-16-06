import React, { Component } from 'react';
import UserCard,{userShape} from '../UserCard';
import { PropTypes } from 'prop-types';


const UserList = (props) => {
  const { users, setUserSelector } = props;

  const userSelector = (id) => {
    const newUsers = users.map(user => ({ ...user, isSelected: id === user.id ? !user.isSelected : user.isSelected }))
    setUserSelector(newUsers);
  }

  const mapUsers = (user) => <UserCard key={user.id} user={user} userSelector={userSelector} />

  return (
    <section>
      <h1>Users List</h1>
      {users.map(mapUsers)}
    </section>
  );

}
UserList.propTypes = {
  users: PropTypes.arrayOf(userShape).isRequired,
  setUserSelector: PropTypes.func,
}
export default UserList;
