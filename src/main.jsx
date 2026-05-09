import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mes from './mes/calendario.jsx' 
import mes from './mes/filtrosmes.jsx'
import meses from './mes/meses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
