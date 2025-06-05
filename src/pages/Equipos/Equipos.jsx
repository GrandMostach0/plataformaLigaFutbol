import React, { useState } from "react";
import CardEquipo from "./componentsEquipos/cardEquipo";
function Equipos(){
    const [opcionSeleccionado, setOpcionSeleccionado] = useState(0);
    const ligasEquipos = ['todos', 'juvenil', 'mayor', 'femenil'];

    return(
        <>
        <div className="text-center my-5 py-5">
            <h1 className="title">Equipos</h1>
            <p className="text-lg text-slate-700">Descubre todos los equipos participantes en la liga</p>

            <div className="rounded-lg inline-block py-1 px-8 text-sm mt-5 bg-slate-200">
                {ligasEquipos.map((liga, index) => (
                    <p
                     className={`inline-block px-6 mx-2 border-none py-1 rounded-lg cursor-pointer
                        ${ index === opcionSeleccionado ? 'bg-white' : ''}
                        `}
                     key={index}
                     onClick={() => setOpcionSeleccionado(index)}
                    >
                        {liga}
                    </p>
                ))}
            </div>

        </div>

        
        <div className="px-10 grid grid-cols-4 gap-5 mt-10">
            <CardEquipo categoria='infatil' nameEquipo='Toros FC' description='Equipo con gran tradición en la liga, conocido por su juego ofensivo.' cantJugadores='18' cantPuntos='39' ubicacion='Telchaquillo' fundacion='2010' cantGanadas='12' cantEmpeatados='3' cantPerdidas='2'/>
            
            <CardEquipo categoria='infatil' nameEquipo='Toros FC' description='Equipo con gran tradición en la liga, conocido por su juego ofensivo.' cantJugadores='18' cantPuntos='39' ubicacion='Telchaquillo' fundacion='2010' cantGanadas='12' cantEmpeatados='3' cantPerdidas='2'/>

            <CardEquipo categoria='infatil' nameEquipo='Toros FC' description='Equipo con gran tradición en la liga, conocido por su juego ofensivo.' cantJugadores='18' cantPuntos='39' ubicacion='Telchaquillo' fundacion='2010' cantGanadas='12' cantEmpeatados='3' cantPerdidas='2'/>

            <CardEquipo categoria='infatil' nameEquipo='Toros FC' description='Equipo con gran tradición en la liga, conocido por su juego ofensivo.' cantJugadores='18' cantPuntos='39' ubicacion='Telchaquillo' fundacion='2010' cantGanadas='12' cantEmpeatados='3' cantPerdidas='2'/>

            <CardEquipo categoria='infatil' nameEquipo='Toros FC' description='Equipo con gran tradición en la liga, conocido por su juego ofensivo.' cantJugadores='18' cantPuntos='39' ubicacion='Telchaquillo' fundacion='2010' cantGanadas='12' cantEmpeatados='3' cantPerdidas='2'/>
            
            <CardEquipo categoria='infatil' nameEquipo='Toros FC' description='Equipo con gran tradición en la liga, conocido por su juego ofensivo.' cantJugadores='18' cantPuntos='39' ubicacion='Telchaquillo' fundacion='2010' cantGanadas='12' cantEmpeatados='3' cantPerdidas='2'/>

            <CardEquipo categoria='infatil' nameEquipo='Toros FC' description='Equipo con gran tradición en la liga, conocido por su juego ofensivo.' cantJugadores='18' cantPuntos='39' ubicacion='Telchaquillo' fundacion='2010' cantGanadas='12' cantEmpeatados='3' cantPerdidas='2'/>

            <CardEquipo categoria='infatil' nameEquipo='Toros FC' description='Equipo con gran tradición en la liga, conocido por su juego ofensivo.' cantJugadores='18' cantPuntos='39' ubicacion='Telchaquillo' fundacion='2010' cantGanadas='12' cantEmpeatados='3' cantPerdidas='2'/>
        </div>
        </>
    )
}

export default Equipos;