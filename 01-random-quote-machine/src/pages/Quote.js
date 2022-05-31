import * as React from 'react';
import {useState, useEffect} from 'react';

function Quote() {
  const [quote, setQuotes] = useState({});
  const [newQuote, setNewQuote] = useState(false);

  useEffect(() => {
    setNewQuote(false);
    fetch("https://animechan.vercel.app/api/random")
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
  }, [newQuote])

  // const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const handleNewQuote = () => {
    setNewQuote(true);
  }

  return (
    <div id="quote-box">
      {quote.quote ? 
        <>
          <div id="text">"{quote.quote}"</div>
          <div id="author">- {quote.character}</div>
          <div id="anime">({quote.anime})</div>
        </>
      : ''}
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
      <a href="https://twitter.com/intent/tweet">
        <button id="tweet-quote">Tweet</button>
      </a>
    </div>
  );
}

export default Quote;