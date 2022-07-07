import React from 'react';

const SelectedUsers = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  const selectedUsersMap =({ id, fname }) => <span key={id}>{fname}</span>;
  return (
    <div>
      {selectedUsers.map(selectedUsersMap)}
    </div>
  );
}

export default SelectedUsers;
