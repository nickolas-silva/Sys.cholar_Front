import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyled from './components/styles/Global.styles.ts'
import ThemeProvider from './context/ThemeProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyled />
      <BrowserRouter>
        <div id='app'>
          <App />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);