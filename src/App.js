import './App.css';
import React, { Component } from 'react';
import Calendar from './components/Calendar';


const App = () => {
  const users = [
    {
      id: 1,
      fname: 'bob',
      isSelected: true
    }, {
      id: 2,
      fname: 'Tom',
      isSelected: false
    }
  ]
  return <>
    <Calendar />
  </>
}
export default App;
