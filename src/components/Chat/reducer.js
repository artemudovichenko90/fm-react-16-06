const reducer = (state, action) => {
  switch (action.type) {

    case 'DATA_ALL_RESPONSE_SUCCESS': {
      const { data: { users, messages } } = action;
      const usersMap = new Map();
      users.forEach(user => usersMap.set(user.id, user));
      const messagesWithAuthor = messages.map(message => ({
        ...message,
        author: usersMap.get(message.authorId)
      }));
      const newState = {
        ...state,
        users,
        messages: messagesWithAuthor
      };
      return newState;
    }
    case 'DATA_ALL_RESPONSE_ERROR': {
      const { error } = action;
      const newState = {
        ...state,
        error
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
export default reducer;