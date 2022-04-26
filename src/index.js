import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import 'bootstrap';
import './index.css';
import './css/volt.css';
import './css/volt.css.map';
import Routing from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
