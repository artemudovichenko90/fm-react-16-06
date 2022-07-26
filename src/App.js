import React from 'react';
import { useLocation} from 'react-router-dom';
import './App.scss';
import logo from './logo.svg';
import SignForm from './components/forms/SignForm';

const App = () => {
  const {pathname} = useLocation();
  console.log(pathname);
  return (<>
    <img src="/static/images/logo.png" />
    <SignForm />
    <img src={logo} />
  </>)
}

export default App;