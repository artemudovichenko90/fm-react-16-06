import React from 'react';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>common title</h1>
      <Outlet />
      <p>lorem</p>
    </div>
  );
}

export default Dashboard;