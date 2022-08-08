import React, { useState, useReducer } from 'react';
import { UserContext, ThemeContext, MenuContext } from './context/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useClicker } from './hooks';
import SignUpForm from './components/forms/SignUpForm';
import HomePage from './page/HomePage';
import Chat from './components/Chat';
import NavMenu from './components/NavMenu';
import reducer from './navMenuReducer';
import CONSTANTS from './constants';
import Todo from './components/Todo';
const { THEMES, MENU_TYPES_ACTION } = CONSTANTS;
const App = () => {
  const [isVisible, setIsVisible] = useState();
  const [user, setUser] = useState({ id: 1, name: 'Elon' });
  const themeStateArr = useState(THEMES.LIGHT);
  const count = useClicker(100);
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
  const openNavMenu = () => { dispatch({ type: MENU_TYPES_ACTION.MENU_OPEN }) }
  const closeNavMenu = () => { dispatch({ type: MENU_TYPES_ACTION.MENU_CLOSE }) }
  return (<>
    <MenuContext.Provider value={{ state, closeNavMenu, openNavMenu }}>
      <ThemeContext.Provider value={themeStateArr}>
        <UserContext.Provider value={user}>
          <p>count:{count}</p>
          <BrowserRouter>
            <NavMenu />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/signup' element={<SignUpForm />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/todo' element={<Todo />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </MenuContext.Provider>

  </>)
}

export default App;