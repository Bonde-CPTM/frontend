import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeDefault } from 'themes/ThemeDefault';
import { MainRouter } from './components/routers/main-router';

function App() {
  return (
    <>
      <ThemeProvider theme={ThemeDefault}>
        <MainRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
