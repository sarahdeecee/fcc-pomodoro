import * as React from 'react';
import Quote from './Quote'
import {useState} from 'react';

function QuoteBox() {
  const [quote, setQuote] = useState({});

  return (
    <div id="quote-box">
      <Quote />
      <button id="new-quote">New Quote</button>
      <a href="https://twitter.com/intent/tweet">
        <button id="tweet-quote">Tweet</button>
      </a>
    </div>
  );
}

export default QuoteBox;
