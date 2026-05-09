import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Semana from './semana/semanaData'
import FiltroSemana from './semana/semana'

const semanaData = [
    { id: 1, nombre: 'Semana 1' },
    { id: 2, nombre: 'Semana 2' },
    { id: 3, nombre: 'Semana 3' },
    { id: 4, nombre: 'Semana 4' },
];


function App() {
  const [filtro, setFiltro] = useState('current');

  const semanaFiltrada = semanaData.filter(semana => {
    if (filtro === 'current') {
      return semana.id === 1; 
    } else if (filtro === 'next') {
      return semana.id === 2; 
    }
    return true;
  });
  return (
    <div>
      <FiltroSemana />
      
      {semanaFiltrada.map(semana => (
        <div key={semana.id}>
          <h3>{semana.nombre}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
