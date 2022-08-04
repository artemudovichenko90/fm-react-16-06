import React, { useState, useEffect } from 'react';
import { getUsersJSON } from '../../api';
import { useData } from './../../hooks';

const NameList = () => {
  const {
    items:users,
    error,
    isFetching
  } = useData(getUsersJSON); 
  if (isFetching) {
    return <h2>loading</h2>
  }
  if (error) {
    return <h2>{error.message}</h2>
  }
  return (
    <div>
      <h2>list names:</h2>
      <ol>{
        users.map((user) => <li key={user.id}>{user.fname}</li>)
      }
      </ol>
    </div>
  );
}

export default NameList;
