import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mes from './mes/mesData.jsx'
import FiltroMes from './mes/mes.jsx'
import meses from './mes/meses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
