import React from 'react';

const Container = (props) => {
  const { flexDirection, alignItems, justifyContent, flexWrap, style, children, ...restProps } = props;
  const styleFlex = {
    ...style,
    display: 'flex',
    flexDirection: flexDirection,
    alignItems: alignItems,
    justifyContent: justifyContent,
    flexWrap: flexWrap
  }
  return (
    <div style={styleFlex}{...restProps}>
      {children}
    </div>
  );
}

export default Container;
