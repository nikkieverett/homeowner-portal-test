import React, { Component } from 'react';
import logo from './logo.svg';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import HelpSection from './components/HelpSection';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <HelpSection />
      </div>
    );
  }
}

export default App;
