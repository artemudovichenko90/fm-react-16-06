import React, { useReducer, useEffect } from 'react';
import { getChatJSON } from '../../api';
import reducer from './reducer';
const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: [],
    messages: [],
    error: null
  });
  useEffect(() => {
    getChatJSON()
      .then(data => dispatch({
        type: 'DATA_ALL_RESPONSE_SUCCESS',
        data
      })).catch(error => dispatch({
        type: 'DATA_ALL_RESPONSE_ERROR',
        error
      }))
  }, []);
  const showMessage = (message) => (
    <article key={message.id}>
      <h3>{message.author.name}</h3>
      <p>{message.body}</p>
    </article>
  )
  return (
    <div>
      <h2>Chat</h2>
      {state.messages.map(showMessage)}
    </div>
  );
}

export default Chat;
