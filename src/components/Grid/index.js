import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';

const List = (props) => {
  const { titleProp, children } = props;
  return <div>
    <ul title={titleProp}>
      {children}
    </ul>
  </div>
}

const Grid = () => {
  return <>

    <Container>
      <Row>
        <Col colNum={6}>
          <List titleProp="qwe">
            <li>text 1</li>
            <li>text 2</li>
          </List>
        </Col>
        <Col colNum={3}>
          <List titleProp="qweasdf">
            <li>aaa 1</li>
            <li>bbb 2</li>
            <li>ccc 2</li>
          </List>
        </Col>
      </Row>
    </Container>

  </>
}
export default Grid;
