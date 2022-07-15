import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFount = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/', { replace: true });
  }, 5000);
  return <section>404, replace to home!</section>
}

export default PageNotFount;