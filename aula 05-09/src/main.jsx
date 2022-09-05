import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Pages/App.jsx'
import GlobalStyle from './Styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>
)
