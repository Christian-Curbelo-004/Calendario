import { useState } from "react";

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

            <div className="controles-dia">
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

            <div className="contenido-dia">
                <h2>{dias[fecha.getDay()]}</h2>

                <p>
                    {fecha.getDate()}/
                    {fecha.getMonth() + 1}/
                    {fecha.getFullYear()}
                </p>
            </div>

        </div>
    );
}