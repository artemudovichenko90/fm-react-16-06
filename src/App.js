import React, { useState } from 'react';
import { UserContext, ThemeContext } from './context/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useClicker } from './hooks';
import SignUpForm from './components/forms/SignUpForm';
import CONSTANTS from './constants';
import HomePage from './page/HomePage';
import Chat from './components/Chat';
const { THEMES } = CONSTANTS;
const App = () => {
  const [isVisible, setIsVisible] = useState();
  const [user, setUser] = useState({ id: 1, name: 'Elon' });
  const themeStateArr = useState(THEMES.LIGHT);
  const count = useClicker(100);
  return (<>
    <ThemeContext.Provider value={themeStateArr}>
      <UserContext.Provider value={user}>
        <p>count:{count}</p>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/signup'>SignUp</Link></li>
              <li><Link to='/chat'>Chat</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  </>)
}

export default App;