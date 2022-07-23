import React, { Component } from 'react';
import cx from 'classnames';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { UserContext, ThemeContext } from '../../context';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { WithContextTheme, WithContextUser } from '../HOCs';
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    const { theme, setTheme, user } = this.props;
    const isLightTeme = theme === THEMES.LIGHT;
    const classNames = cx(styles.header, {
      [styles.light]: isLightTeme,
      [styles.dark]: theme === THEMES.DARK
    });
    return (
      <header className={classNames}>
        <div onClick={() => {
          const newTheme = isLightTeme ? THEMES.DARK : THEMES.LIGHT;
          setTheme(newTheme);
        }}>{isLightTeme ? <WbSunnyIcon /> : <DarkModeIcon />}</div>
        <p>
          Hi, {user.fname} {user.lname}
        </p>
      </header>
    );
  }
}
const HeaderWithContextUser = WithContextUser(Header);
const HeaderWithContextTheme = WithContextTheme(HeaderWithContextUser);
export default HeaderWithContextTheme;
