// Source code copyright/contact: mekljoo@hotmail.com | 01025488243
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import { LanguageProvider } from './i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
