import React from 'react';
import Navigation from './Navigation';

function Layout(props) {
  return (
    <div className="app-container">
      <Navigation />
      {props.children}
    </div>
  )
}

export default Layout;
