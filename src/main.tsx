// eslint-disable-next-line @typescript-eslint/no-unused-vars
import moment from 'moment'
import 'moment/locale/pt-br'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
