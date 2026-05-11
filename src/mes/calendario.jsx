import {useState} from 'react';
import "./Mes.css"; // cambiar por mes.css
import { mesesPropiedades } from './Meses';

// muestra el calendario con los meses y los botones para filtrar el mes
export default function Calendario({mes=[]}){
    const [mesFiltrado, setMesFiltrado] = useState(new Date().getMonth());
    const mesesFiltrados = mes.filter(item => item.mes === mesFiltrado);

    function mesAnterior(){
        setMesFiltrado((mesFiltrado - 1+12)%12);
    }

    function mesActual(){
        setMesFiltrado(new Date().getMonth());
    }

    function mesSiguiente(){
        setMesFiltrado((mesFiltrado + 1)%12);
    }


    return (
        <div className= "mes">
            <header className="encabezado">
                
                <div className="meses">

                    <button className="mes-anterior" onClick={mesAnterior}>Mes Anterior</button>
                    
                    <button className="mes-actual" onClick={mesActual}>Mes Actual</button>
                    
                    <button className="mes-siguiente" onClick={mesSiguiente}>Mes Siguiente</button>
            
                </div>
                {
                    <div className="filtro-mes">
                        <h2 className='mes-filtrado'>{mesesPropiedades[mesFiltrado].nombre}</h2>

                        {mesesFiltrados.map(item => (
                            <div key={item.id}>  </div>
                        ))}
                    </div>
                }
            </header>
        </div>
    )
}
