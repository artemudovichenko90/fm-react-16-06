import React, { useState } from 'react';

const Coordinate = (props) => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    count: 0
  });
  const handlerMouseMove = (event) => {
    setCoords({
      ...coords,
      x: event.clientX,
      y: event.clientY
    })
  }
  const hanlderClick = () => {
    setCoords({
      ...coords,
      count: coords.count + 1
    })
  }
  return (
    <div style={{ height: '70vh', backgroundColor: 'pink', textAlign: 'center', paddingTop: '10vh' }}
      onMouseMove={handlerMouseMove}
      onClick={hanlderClick}>
      <p>{coords.x}</p>
      <p>{coords.y}</p>
      <p>{coords.count}</p>

    </div>
  );
}

export default Coordinate;
