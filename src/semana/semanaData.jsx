import {useState} from 'react';


export default function Semana({semana=[]}){
    const [filtro, setMostrarFiltros] = useState('current');

    return (
        <div className= "semana">
            <header className="encabezado">
                <FiltroSemana setFiltro={setMostrarFiltros} />

                <button type = "button" className="fitro-semana" onClick={() => setMostrarFiltros('next')}>
                    Próxima Semana
                </button>
                Filtrar por semana
                {filtro &&
                    <div className="filtro-semana">
                        {semana.map(semana => (
                            <div key={semana.id}>
                                <h3>{semana.nombre}</h3>
                            </div>
                        ))}
                    </div>
                }
            </header>
        </div>
    )
}
