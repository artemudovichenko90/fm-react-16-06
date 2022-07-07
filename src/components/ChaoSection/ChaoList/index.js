import React from 'react';
import Chao from './../Chao';

function ChaoList(props) {
  const { users } = props;
  const mapUsers = ({ id, fname }) => (<Chao name={fname} key={id} />)
  return <>
    {users.map(mapUsers)}
  </>;

}
export default ChaoList;
