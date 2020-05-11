import React from 'react';
import './AppFooter.css';

function AppFooter(){
  return (
    <div class="row footer">
    <a href="/main">
      <img alt="" src="assets/images/TURTLE.jpg" Border="no" />
    </a>
    Email us:
    <a href="mailto: jeff@tortugaDesign.com">Tortuga Design Inc.</a>
  
    <span class="copyright">
      Copyright © Tortuga Design Inc, 2020. <small>We Reserve Nothing.</small>
    </span>

  </div>
  );
};

export default AppFooter;