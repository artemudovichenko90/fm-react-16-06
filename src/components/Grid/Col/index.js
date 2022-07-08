import React from 'react';
import styles from './Col.module.scss';
const Col = (props) => {
  const { children, colNum } = props;
  return (
    <div className={styles[`col-${colNum}`]}>
      {children}
    </div>
  );
}

export default Col;
