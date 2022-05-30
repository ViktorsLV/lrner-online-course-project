import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { StoreProvider } from "./utils/Store";

//TODO ONLY PRODUCTION!!!!
// console.log = console.warn = console.error = () => {};

  ReactDOM.render(
    <Router>
      <StoreProvider>
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
            <App />
        </GoogleOAuthProvider>
      </StoreProvider>
    </Router>,
    document.getElementById('root'),
  );