import React from 'react';
import { UserContext } from '../../../context';
import styles from './UserCard.module.scss';

const UserCard = (props) => {

  return (
    <UserContext.Consumer>
      {user => (
        <section className={styles.container}>
          <h2>UserCard</h2>
          <h3>{user.fname} {user.lname}</h3>
          <img src={user.imgSrc} alt={user.lname} />
        </section>
      )}
    </UserContext.Consumer>
  );
}

export default UserCard;
