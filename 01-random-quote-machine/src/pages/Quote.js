import * as React from 'react';
import {useState, useEffect} from 'react';

function Quote(props) {
  const { quote, character, anime } = props.quote;
  return (
    <>
      <div id="text">"{quote}"</div>
      <div id="author">- {character}</div>
      <div id="anime">({anime})</div>
    </>
  )
}

export default Quote;