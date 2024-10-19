import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <ChakraProvider>
    <Toaster />
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);