/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import App from './components/app/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <App />,
  document.getElementById('app')
);
