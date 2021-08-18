import logo from '../logo.svg';
import './App.css';
import BuildPC from '../BuildPC/BuildPC'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='rigbldr-logo'>rigbldr</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>BuildaPC</li>
            <li className="Mode-switch">
              <span className="dot"></span>
              <span className="dot2"></span>
            </li>
          </ul>
        </nav>
      </header>
      <BuildPC />
    </div>
  );
}

export default App;
