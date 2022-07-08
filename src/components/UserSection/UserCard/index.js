import React from 'react';
import { PropTypes } from 'prop-types';

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
export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  fname: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
}).isRequired
UserCard.defaultProps = {
  user: { id: 0, fname: 'Anonym', isSelected: false }
}
UserCard.propTypes = {
  user: userShape,
  userSelector: PropTypes.func
}
export default UserCard;
