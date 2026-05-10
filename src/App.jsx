import './App.css'
import Mes from './mes/calendario' // archivo renombrado a calendario.jsx
import { mesesPropiedades } from './mes/meses';

function App() {
  return (
    <div className="App">
      <h1>Calendario</h1>
      <Mes mes={mesesPropiedades} />
  
    </div>
  )

}

export default App;