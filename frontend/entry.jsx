import React from 'react';
import ReactDOM from 'react-dom';

import {login} from './util/session_api_util'; 

document.addEventListener('DOMContentLoaded', () => {
  window.login = login; 

  const root = document.getElementById('root');
  ReactDOM.render(<h1>MyFlix</h1>, root);
});