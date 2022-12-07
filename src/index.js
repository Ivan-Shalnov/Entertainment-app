import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import './index.css';
import { App } from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Import the functions you need from the SDKs you need

const theme = {
  colors: {
    semiDarkBlue: '#161D2F',
    darkBlue: '#10141E',
    greyishBlue: '#5A698F',
    white: '#FFFFFF',
  },
  transition: '250ms ease-in-out',
  gap: '15px',
  breakpoints: { sm: '375px', md: '768px', lg: '1440px' },
};
const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${p => p.theme.colors.darkBlue};
    font-family: 'Outfit', sans-serif;
  }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
