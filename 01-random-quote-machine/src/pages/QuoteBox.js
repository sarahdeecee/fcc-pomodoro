import * as React from 'react';
import {useState, useEffect} from 'react';
import Quote from './Quote';
import { Button } from '@mui/material';
import { Twitter } from '@mui/icons-material'

function QuoteBox() {
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
      {quote.quote ? <Quote quote={quote} /> : ''}
      <Button id="new-quote" onClick={handleNewQuote}>New Quote</Button>
      <a href="https://twitter.com/intent/tweet">
        <Twitter id="tweet-quote" />
      </a>
    </div>
  );
}

export default QuoteBox;