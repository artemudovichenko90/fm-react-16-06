import React from 'react';
import { UserContext } from '../context';
const Home = () => {
  return (
    <UserContext.Consumer>
      {(value) => (
        <div>
          <h1>Home</h1>
          <p>{value.name}</p>
        </div>
      )}
    </UserContext.Consumer>

  );
}

export default Home;
