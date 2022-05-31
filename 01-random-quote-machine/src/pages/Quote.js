import * as React from 'react';
import {useState, useEffect} from 'react';

function Quote() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(
        (result) => {
          setQuotes(result);
          console.log(result);
        },
        (error) => {
          console.log('Error >>>>> ',error);
        }
      )
  }, [])

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div id="quote-box">
      {quotes.length ? 
        <>
          <div id="text">{randomQuote.text}</div>
          <div id="author">{randomQuote.author}</div>
        </>
      : ''}
      <button id="new-quote">New Quote</button>
      <a href="https://twitter.com/intent/tweet">
        <button id="tweet-quote">Tweet</button>
      </a>
    </div>
  );
}

export default Quote;