import './App.css';
import logo from './lib/components/assets/iconLogo.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://openclassrooms.com/fr/paths/516/projects/815/assignment"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with OpenClassrooms
        </a>
      </header>
    </div>
  );
}

export default App;
