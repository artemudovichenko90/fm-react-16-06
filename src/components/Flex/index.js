import React from 'react';
import Container from './Container';
import Chao from './../ChaoSection/Chao';
import { PropTypes } from 'prop-types';

const Flex = () => {
  return <>
    <Container
      title="@@"
      style={{ backgroundColor: 'pink', border: '5px solid red' }}>
      <Chao />
      <Chao />
      <Chao />
      <Chao />
    </Container>
  </>
}
Flex.defaultProps = {
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flexWrap: "wrap"
}
Flex.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexWrap: PropTypes.string,
}
export default Flex;
