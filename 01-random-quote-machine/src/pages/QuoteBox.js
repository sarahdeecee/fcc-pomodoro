import * as React from 'react';
import {useState, useEffect} from 'react';
import Quote from './Quote';
import { Button, Card, CardActions, Typography, IconButton, Box } from '@mui/material';
import { Twitter, Facebook } from '@mui/icons-material'

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
    <Card id="quote-box" sx={{padding: '1em'}}>
      {quote.quote ? <Quote quote={quote} /> : ''}
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
          <a href="https://twitter.com/intent/tweet">
            <IconButton color="primary" id="tweet-quote" component="span" aria-label="Post on Twitter" variant="contained">
              <Twitter />
            </IconButton>
          </a>
          <a href="#">
            <IconButton color="primary" id="fb-quote" component="span" aria-label="Post on Facebook" variant="contained">
              <Facebook />
            </IconButton>
          </a>
        </Box>
          <Button id="new-quote" variant="contained" onClick={handleNewQuote}>New Quote</Button>
      </CardActions>
    </Card>
  );
}

export default QuoteBox;