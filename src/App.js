import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppHeader from './components/header/appHeader';
import AppFooter from './components/footer/appFooter';
import Content from './components/content/content';
import Where from './components/where/where';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/content" component={Content} />
          <Route path="/why" exact component={Content} />
          <Route path="/what" exact component={Content} />
          <Route path="/how" exact component={Content} />
          <Route path="/where" exact component={Where} />
          <Route path="/" exact component={Content} />
    </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
