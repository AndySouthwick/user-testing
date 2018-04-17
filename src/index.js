import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
import client from './client'


ReactDOM.render(
  <ApolloProvider  client={client}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
