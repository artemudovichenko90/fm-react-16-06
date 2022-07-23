import React from 'react';
import { UserContext } from '../../../context';
import styles from './UserCard.module.scss';
import { WithContextUser } from './../../HOCs';


const UserCard = (props) => {
  const { user } = props;
  return (
    <section className={styles.container}>
      <h2>UserCard</h2>
      <h3>{user.fname} {user.lname}</h3>
      <img src={user.imgSrc} alt={user.lname} />
    </section>
  );
}
const UserCardWithUserContext = WithContextUser(UserCard);
export default UserCardWithUserContext;
