import React from 'react';
import UserCardWithUserContext from '../UserCard';

const Child = (props) => {
  return (
    <section>
      <h2>Child</h2>
      <UserCardWithUserContext />
    </section>
  );
}

export default Child;
