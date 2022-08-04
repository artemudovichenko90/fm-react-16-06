import { useState, useEffect } from 'react';

const useClicker = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    const handlerClick = () => { setCount(prevCount => prevCount + 1) }
    window.addEventListener('click', handlerClick);
    return () => {
      window.removeEventListener('click', handlerClick);
    }
  }, []);
  return count;
}

export default useClicker;