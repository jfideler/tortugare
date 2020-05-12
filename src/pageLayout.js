import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
  
const PageLayout = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <div className="sidebar">This is the default Layout</div>  
      <div className="main">{children}</div>  
    </div>  
  )  
}  
  
const PageLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <PageLayout>  
          <Component {...matchProps} />  
      </PageLayout>  
    )} />  
  )  
};  
  
export default PageLayoutRoute;  