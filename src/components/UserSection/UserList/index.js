import React, { Component } from 'react';
import UserCard from '../UserCard';


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

export default UserList;
