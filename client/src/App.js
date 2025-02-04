import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
  useEffect(() => {
    const [data, setData] = useState(null);

    fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
