import './DiaSemana.css'

export default function DiaSemana({dia, fecha}){
    return(
        <div className="dia-semana">
            <h3>{dia}</h3>
            <p>{fecha}</p>
        </div>
    )
}