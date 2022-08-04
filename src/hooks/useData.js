import { useState, useEffect } from 'react';

export default function useData(getItems){
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    getItems()
      .then(data => setItems(data))
      .catch(error => setError(error))
      .finally(() => setIsFetching(false))
  }, []);
 
  return{
    items,
    error,
    isFetching
  }
}