import {useState} from 'react';
import meses from './meses';


export default function Mes({mes=[]}){
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
                    <button onClick={mesAnterior}>Mes Anterior</button>
                    <button onClick={mesActual}>Mes Actual</button>
                    <button onClick={mesSiguiente}>Mes Siguiente</button>
                </div>
                {
                    <div className="filtro-mes">
                        {mesesFiltrados.map(item => (
                            <div key={item.id}>
                                <h3>{item.nombre}</h3>
                            </div>
                        ))}
                    </div>
                }
            </header>
        </div>
    )
}
