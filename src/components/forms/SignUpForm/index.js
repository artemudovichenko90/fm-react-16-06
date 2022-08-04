import React, { useReducer } from 'react';
import reducer from './reducer';
const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    fname: '',
    lname: '',
    email: '',
    password: '',
    phone: '',
    age: 0
  });
  const handlerInput = ({ target: { name, value } }) => {
    const action = { name, value };//часть состояния
    dispatch(action);
  }
  return (
    <div>
      <h2>sign up</h2>
      <input type='text' name='fname' value={state.fname} onChange={handlerInput} />
      <input type='text' name='lname' value={state.lname} onChange={handlerInput} />
      <input type='text' name='email' value={state.email} onChange={handlerInput} />
      <input type='password' name='password' value={state.password} onChange={handlerInput} />
      <input type='text' name='phone' value={state.phone} onChange={handlerInput} />
      <input type='number' name='age' value={state.age} onChange={handlerInput} />

    </div>
  );
}

export default SignUpForm;
