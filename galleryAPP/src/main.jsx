import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SearchProvider } from '../src/Context/searchContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </SearchProvider>,
)
