import React, { useContext, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import styles from './NavMenu.module.scss';
import { MenuContext } from '../../context';
import CONSTANTS from '../../constants';
const { MENU_TYPES_ACTION } = CONSTANTS;

const NavMenu = (props, ref) => {
  const navRef = useRef(null);
  const { state: { isMenuOpen }, closeNavMenu, openNavMenu } = useContext(MenuContext);
  const classNames = cx(styles.container, { [styles.open]: isMenuOpen });

  useEffect(() => {
    const handlerClickMenu = ({ target }) => {
      if (isMenuOpen && !navRef.current.contains(target)) {
        closeNavMenu();
      }
    }
    window.addEventListener('click', handlerClickMenu);
    return () => window.removeEventListener('click', handlerClickMenu);
  }, [isMenuOpen])
  const tabOpen = (event) => {
    if (event.key === 'Enter') {
      openNavMenu();
    }
  }
  const tabClose = (event) => {
    if (event.key === 'Enter') {
      closeNavMenu();
    }
  }
  return (
    <nav className={classNames} ref={navRef}>
      <MenuOpenIcon onClick={openNavMenu} className={styles.openBtn}
        tabindex='1'
        onKeyDown={tabOpen} />
      <CancelPresentationIcon
        className={styles.closeBtn}
        onClick={closeNavMenu}
        tabindex='1'
        onKeyDown={tabClose} />
      <ul className={styles.list}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to='/chat'>Chat</NavLink>
        </li>
        <li>
          <NavLink to='/todo'>Todo</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
