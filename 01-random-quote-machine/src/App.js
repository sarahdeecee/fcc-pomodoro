import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">Quote</div>
        <div id="author">Author</div>
        <button id="new-quote">New</button>
        <a href="https://twitter.com/intent/tweet">
          <button id="tweet-quote">Tweet</button>
        </a>
      </div>
    </div>
  );
}

export default App;
