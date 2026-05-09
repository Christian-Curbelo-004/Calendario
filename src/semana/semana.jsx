
export default function FiltroSemana({setFiltro}) {
    return(
        <div class="filtro-semana">
            <button onClick={() => setFiltro('current')}>Semana Actual</button>
            <button onClick={() => setFiltro('next')}>Próxima Semana</button>
        </div>
    )
}

