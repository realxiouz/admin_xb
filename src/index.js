import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import Router from './Router'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider>
    <Router/>
  </Provider>
  , document.getElementById('root'));
