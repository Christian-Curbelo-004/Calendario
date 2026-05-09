
export default function FiltroMes({setFiltro}) {
    const [mesFiltrado, setMesFiltrado] = useState(1);
    return(
        <div className="filtro-mes">
            <button onClick={() => setFiltro(mesFiltrado)}>Mes Actual</button>
            <button onClick={() => setFiltro(mesFiltrado)}>Mes Anterior</button>
            <button onClick={() => setMesFiltrado(mesFiltrado + 1)}>Mes Siguiente</button>
        </div>
    )
}

