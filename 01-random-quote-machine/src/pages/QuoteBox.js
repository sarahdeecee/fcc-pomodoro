import * as React from 'react';
import {useState, useEffect} from 'react';
import Quote from './Quote';
import { Paper, Button, Card, CardActions, Typography, IconButton, Box } from '@mui/material';
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

  const handleNewQuote = () => {
    setNewQuote(true);
  }

  const TITLE = 'Random%20anime%20quotes';
  const SUMMARY = 'Random%20anime%20quotes';
  const URL = 'http%3A%2F%2Flocalhost:3000';
  const IMGURL = 'http%3A%2F%2Fsekainojump.com/wp-content/uploads/2022/05/FSuXvPIUcAAZC0v.jpg';
  return (
      <Card sx={{padding: '1em'}} id="quote-box">
      {quote.quote ? <Quote quote={quote} /> : ''}
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
          <a href="https://twitter.com/intent/tweet">
            <IconButton color="primary" id="tweet-quote" component="span" aria-label="Post on Twitter" variant="contained">
              <Twitter />
            </IconButton>
          </a>
          <a href={`http://www.facebook.com/sharer.php?s=100&p[title]=${TITLE}&p[url]=${URL}&p[summary]=${SUMMARY}&p[images][0]=${IMGURL}`}>
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