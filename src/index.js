import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  //Botta browserRouterni ishlatish kere bomasa marshrutizatsiya iwlamidi
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
