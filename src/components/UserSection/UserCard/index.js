import React from 'react';

const UserCard = (props) => {
  const { user: { id, fname, isSelected }, userSelector } = props;
  const styles = { border: isSelected ? 'solid teal 2px' : undefined };
  const btnHandler = () => userSelector(id);

  return (
    <article style={styles}>
      <h2>{id}: {fname}</h2>
      <button onClick={btnHandler}>Choose</button>
    </article>
  );
}

export default UserCard;
