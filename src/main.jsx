import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mes from './mes/Calendario.jsx' 
import mes from './mes/FiltrosMes.jsx'
import meses from './mes/Meses.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
