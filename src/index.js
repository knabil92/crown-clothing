import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));


// to use react-router-dom -> 
/*
(1) type line #3
(2) make BrowserRouter wrap the <App /> ,
this gives our app all of the functionality of routing 
*/