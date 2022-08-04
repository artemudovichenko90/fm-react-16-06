import React, { useState } from 'react';
import { UserContext, ThemeContext } from './context/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import CONSTANTS from './constants';
const { THEMES } = CONSTANTS;
const App = () => {
  const [isVisible, setIsVisible] = useState();
  const [user, setUser] = useState({ id: 1, name: 'Elon' });
  const themeStateArr = useState(THEMES.LIGHT);

  const handlerVisible = () => {
    setIsVisible(!isVisible);
  }
  return (<>
    <ThemeContext.Provider value={themeStateArr}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  </>)
}

export default App;