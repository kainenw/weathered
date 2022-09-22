//import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';
import { Search } from './components/Search'
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter as Router,} from "react-router-dom"
import { Results } from './components/Results';
import { testData } from './components/testData';

function App() {
  return (
      <div className="App">
          <header>
              <h1>Hourly 7-Day Forecast</h1>
          </header>
          <Search />
      </div>
  );
}

export default App;
