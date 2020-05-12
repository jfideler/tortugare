import React from 'react';
import './appHeader.css';
import AppTopNav from './topNav/appTopNav';

function AppHeader(){
  return (
    <div>
    <div className="pull-right logo-link">
      <a href="/main">
        <img alt="wtf" src="assets/images/TORTUGATop.jpg"/> </a>
      <br />
      <a href="/main">
        <img alt = "wtf" src="assets/images/TORTUGABottom.jpg" /> </a>
    </div>
    <AppTopNav/>
  </div>
  );
};

export default AppHeader;