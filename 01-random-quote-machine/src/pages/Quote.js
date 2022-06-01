import { Typography, CardContent } from '@mui/material';
import * as React from 'react';
import {useState, useEffect} from 'react';

function Quote(props) {
  const { quote, character, anime } = props.quote;
  return (
    <CardContent>
      <Typography variant="h4" id="text">"{quote}"</Typography>
      <div align="right">
        <Typography vaiant="h5" id="author">- {character} ({anime})</Typography>
      </div>
    </CardContent>
  )
}

export default Quote;