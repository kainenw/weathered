//import logo from './logo.svg';
import './App.css';
import { React } from 'react';
import { Search } from './components/Search'
import { ErrorBoundary } from './components/ErrorBoundary';
//import { BrowserRouter as Router,} from "react-router-dom"

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header>
          <h1>Hourly 7-Day Forecast</h1>
        </header>
        <Search />
      </div>
    </ErrorBoundary>
  )
}

export default App;
