import DiaSemana from "./DiaSemana.jsx";
import { useState } from "react";

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

    const [fechaActual, setFechaActual] = useState(new Date());
    const diaActual = fechaActual.getDay();
    const inicioSemana = new Date(fechaActual);
    const diferencia = diaActual === 0 ? -6 : 1 - diaActual;

    inicioSemana.setDate(fechaActual.getDate() + diferencia);
    
    const semana = [];
    
    for(let i = 0; i<7; i++){
        const fecha = new Date(inicioSemana);
        fecha.setDate(inicioSemana.getDate() + i);
        semana.push({
            nombre: diasSemana[fecha.getDay()],
            fecha: fecha.getDate()
        })
    }

    function semanaAnterior(){
        const nuevaFecha = new Date(fechaActual);
        nuevaFecha.setDate(fechaActual.getDate() - 7);
        setFechaActual(nuevaFecha);
    }

    function semanaSiguiente(){
        const nuevaFecha = new Date(fechaActual);
        nuevaFecha.setDate(fechaActual.getDate() + 7);
        setFechaActual(nuevaFecha);
    }

    function semanaActual(){
        setFechaActual(new Date());
    }

    return (
        <>
            <div className="controles-semana">
                <button onClick={semanaAnterior}>
                    Semana anterior
                </button>
                <button onClick={semanaActual}>
                    Semana Actual
                </button>
                <button onClick={semanaSiguiente}>
                    Semana siguiente
                </button>
            </div>
            <div className="semana">    
                {
                    semana.map(dia => (
                        <DiaSemana key={dia.nombre} dia={dia.nombre} fecha={dia.fecha}/>
                    ))
                }
            </div>
        </>
        
    )
}