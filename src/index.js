import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Context from './components/context/context';

const theme = extendTheme({
  colors: {
    primary: '#242582',
    secondary: '#2f2fa2',
    tartiary: '#f64c72',
    special: '#553d67',
    unique: '#99738e',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
