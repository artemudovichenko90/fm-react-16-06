import React, { useState } from 'react';

const Count = (props) => {
  const [count, setCount] = useState(0);
  console.log(count);
  const [step, setStep] = useState(1);

  const handlerClick = () => {
    setCount(count + step);
  }
  const handlerInput = ({ target: { value } }) => {
    setStep(Number(value))
  }
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handlerClick}>Add</button>
      <input type='number' onChange={handlerInput} value={step} />
    </div>
  );
}

export default Count;
