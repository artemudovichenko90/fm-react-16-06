import './App.css';
import React, { Component } from 'react';
import Chao from './components/ChaoSection/Chao/index';
import UserCard from './components/UserSection/UserCard/index';
import UserList from './components/UserSection/UserList/index';


const App = () => {
  const users=[
    {
      id: 1,
      fname: 'bob',
      isSelected: true
    },{
      id: 2,
      fname: 'Tom',
      isSelected: false
    }
  ]
  return <>
    {/* <Chao name={user.name} /> */}
    <UserCard/>
    {/* <UserList users={users} /> */}
  </>
}
export default App;
