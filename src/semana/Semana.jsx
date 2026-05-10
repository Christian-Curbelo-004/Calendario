import DiaSemana from "./DiaSemana.jsx";

export default function Semana(){
    const diasSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado"
    ];

    const hoy = new Date();
    const diaActual = hoy.getDay();
    const inicioSemana = new Date(hoy);
    const diferencia = diaActual === 0 ? -6 : 1 - diaActual;

    inicioSemana.setDate(hoy.getDate() + diferencia);
    
    const semana = [];
    
    for(let i = 0; i<7; i++){
        const fecha = new Date(inicioSemana);
        fecha.setDate(inicioSemana.getDate() + i);
        semana.push({
            nombre: diasSemana[fecha.getDay()],
            fecha: fecha.getDate()
        })
    }

    return (
        <div className="semana">    
            {
                semana.map(dia => (
                    <DiaSemana key={dia.nombre} dia={dia.nombre} fecha={dia.fecha}/>
                ))
            }
        </div>
    )
}