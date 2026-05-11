import { useState } from "react";
import "./Dia.css"

export default function Dia() {

    const [fecha, setFecha] = useState(new Date());

    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado"
    ];

    function diaAnterior() {
        const nuevaFecha = new Date(fecha);
        nuevaFecha.setDate(fecha.getDate() - 1);
        setFecha(nuevaFecha);
    }

    function diaSiguiente() {
        const nuevaFecha = new Date(fecha);
        nuevaFecha.setDate(fecha.getDate() + 1);
        setFecha(nuevaFecha);
    }

    function diaActual() {
        setFecha(new Date());
    }

    return (
        <div className="dia">

            <div className="diaActual">
                <h2>{dias[fecha.getDay()]}</h2>

                <p> 
                    {/* metodos nativos de.date */}
                    {fecha.getDate()}/
                    {fecha.getMonth() + 1}/
                    {fecha.getFullYear()}
                </p>
            </div>

            <div className="botones-dia">
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

        </div>
    );
}