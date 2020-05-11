import React from 'react';
import './App.css';
import Content from './components/content/Content';
import AppHeader from './components/header/AppHeader';
import AppFooter from './components/footer/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Content/>
      <AppFooter/>
    </div>
  );
}

export default App;
