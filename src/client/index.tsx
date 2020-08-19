import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './container/App';

// import Store from '';
import './style/index.sass';

const Client = () => (
  // <Provider store={Store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
);

ReactDOM.render(<Client />, document.getElementById('root'));
