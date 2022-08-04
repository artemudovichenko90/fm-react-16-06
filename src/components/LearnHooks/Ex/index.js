import React, { useState, useEffect } from 'react';

const Ex = (props) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(10);
  const handlerInput = ({target:{value}}) => {
    setStep(Number(value));
  }
  useEffect(() => {
    const handlerClick = () => {
      setCount((prevCount) => prevCount + step);
    }
    console.log('addEventListener');
    document.body.addEventListener('click', handlerClick);
    return () => {
      document.body.removeEventListener('click', handlerClick);
      console.log('removeEventListener');
    }
  }, [step]);
  return (
    <div style={{ height: '70vh', backgroundColor: 'pink', textAlign: 'center', paddingTop: '10vh' }}
    >
      <p>{count}</p>
      <input value={step} onChange={handlerInput}/>
    </div>
  );
}

export default Ex;
