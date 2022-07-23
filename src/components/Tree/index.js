import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
import { WithContextTheme } from '../HOCs';
const { THEMES } = CONSTANTS;

const Tree = (props) => {
  const { theme } = props;
  const classNames = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK
  });
  return <section className={classNames}>
    <h2>Tree</h2>
    <Parent />
  </section>
}


export default WithContextTheme(Tree);
