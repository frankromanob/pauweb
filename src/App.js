import logo from './logo.svg';
import banner from './st-banner.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="Banner" 
        width="80%" 
        height="80%" 
        alt="banner stranger things" />
        <p>
          Hola soy Paula Isabel
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/user/frankromano"
          target="_blank"
          rel="noopener noreferrer"
        >
         Canal de YouTube de mi papi
        </a>
      </header>
    </div>
  );
}

export default App;
