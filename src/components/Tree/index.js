import React from 'react';
import cx from 'classnames';
import { ThemeContext } from '../../context';
import Parent from './Parent';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

const Tree = (props) => {
  return (<ThemeContext.Consumer>
    {
      ([theme, setTheme]) => {
        const classNames = cx(styles.container, {
          [styles.light]: theme === THEMES.LIGHT,
          [styles.dark]: theme === THEMES.DARK
        });
        return <section className={classNames}>
          <h2>Tree</h2>
          <Parent />
        </section>
      }
    }
  </ThemeContext.Consumer>

  );
}

export default Tree;
