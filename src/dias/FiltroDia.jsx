// filtrar el dia 
export default function FiltroDia({
    diaAnterior,
    diaActual,
    diaSiguiente
}) {

    return (
        <div className="filtro-dia">

            <button onClick={diaAnterior}>
                Día anterior
            </button>

            <button onClick={diaActual}>
                Día actual
            </button>

            <button onClick={diaSiguiente}>
                Día siguiente
            </button>

        </div>
    );
}