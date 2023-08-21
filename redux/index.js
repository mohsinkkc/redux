import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToastContainer/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
