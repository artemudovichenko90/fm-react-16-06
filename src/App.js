import React, { useState } from 'react';
import { UserContext, ThemeContext } from './context/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NameList from './components/NameList';
import { useClicker } from './hooks';
import CONSTANTS from './constants';
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
          <Routes>
            <Route path='/' element={<NameList />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  </>)
}

export default App;