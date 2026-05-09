import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import meses from './mes/meses'
import Mes from './mes/mesData'

const mesData = [
    { id: 0, nombre: 'Mes 0', mes: 0 },
    { id: 1, nombre: 'Mes 1', mes: 1 },
    { id: 2, nombre: 'Mes 2', mes: 2 },
    { id: 3, nombre: 'Mes 3', mes: 3 },
    { id: 4, nombre: 'Mes 4', mes: 4 },
    { id: 5, nombre: 'Mes 5', mes: 5 },
    { id: 6, nombre: 'Mes 6', mes: 6 },
    { id: 7, nombre: 'Mes 7', mes: 7 },
    { id: 8, nombre: 'Mes 8', mes: 8 },
    { id: 9, nombre: 'Mes 9', mes: 9 },
    { id: 10, nombre: 'Mes 10', mes: 10 },
    { id: 11, nombre: 'Mes 11', mes: 11 },
    
];


function App() {
  return (
    <div className="App">
      <h1>Calendario</h1>
      <Mes mes={mesData} />
    </div>
  )

}

export default App;
