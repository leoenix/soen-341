import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import { Button } from 'primereact/button';
import Account from './components/account/Account'
import { Route, Link } from "react-router-dom"
function App() {

  return (
    <div className="App">

        <Header />
        <Route exact path="/account" component ={Account}></Route>

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
