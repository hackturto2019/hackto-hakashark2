/* eslint-disable prettier/prettier */
import React from 'react';
import Routes from './routes';
import { ThemeProvider } from "nachos-ui";
// import { Container } from './styles';

const App = () => (
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
);

export default App;
