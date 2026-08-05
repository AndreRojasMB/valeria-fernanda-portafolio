import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import LanguageProvider from './i18n/LanguageProvider'
import './styles/global.css'
import './styles/language.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  </React.StrictMode>
)
