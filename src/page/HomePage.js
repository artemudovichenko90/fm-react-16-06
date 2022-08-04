import React, { useContext, useState, useCallback, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS from '../constants';
const { THEMES: { DARK, LIGHT } } = CONSTANTS;
const HomePage = () => {
  const [value, setValue] = useState(10);
  const [theme, setTheme] = useContext(ThemeContext);

  const currentTheme = {
    [DARK]: { backgroundColor: '#eee', color: '#222' },
    [LIGHT]: { backgroundColor: '#222', color: '#eee' },
  }
  const handlerTheme = useCallback(() => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
  }, [theme]);
  const handlerInput = useCallback(({ target: { value } }) => {
    setValue(Number(value));
  }, [value]);
  const handlerLog = useCallback(() => console.log(value), [value]);

  // useEffect(() => { console.log('theme'); }, [handlerTheme])
  return (
    <div style={currentTheme[theme]}>
      <h1>HomePage</h1>
      <h2>value:{value}</h2>
      <input type='number' value={value} onChange={handlerInput} />
      <UserProfile />
      <button onClick={handlerTheme}>switch theme</button>
      <button onClick={handlerLog}>log</button>

    </div>
  );
}

export default HomePage;
