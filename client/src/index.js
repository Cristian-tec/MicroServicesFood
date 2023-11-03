import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

import { ThemeProvider } from '@mui/material';
import theme from './themeConfig'
import axios from 'axios'   

const BASE_URL = process.env.REACT_APP_BASE_URL;
const PORT = process.env.REACT_APP_API_PORT;

axios.defaults.baseURL = `${BASE_URL}:${PORT}/`
//axios.defaults.baseURL = 'http://localhost:3000/'
//axios.defaults.baseURL = 'https://foodandrecipes-production.up.railway.app/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
 {/*      <ThemeProvider theme={theme}> */}
        <App />
   {/*    </ThemeProvider> */}
    </BrowserRouter>
  </Provider>
);


