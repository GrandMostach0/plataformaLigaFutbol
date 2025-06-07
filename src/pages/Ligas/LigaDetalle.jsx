import { useState } from "react";
import CardEstadisticas from "../Equipos/componentsEquipos/CardEstadisticas";
import TablaPosicionEquipos from "../../components/TablaPosicionEquipos";
import ListaEquipos from "./componentsLiga/listaEquipos";
import ListaCalendario from "./componentsLiga/ListaCalendario";
function LigaDetalle() {

    const [opSeleccionado, setOpSeleccionado] = useState(0);
    const listaOpciones = ['Clasificación', 'Equipos', 'Calendario'];

    const renderOpciones = () => {
        switch(opSeleccionado){
            case 0:
                return <TablaPosicionEquipos />
            case 1:
                return <ListaEquipos />
            case 2:
                return <ListaCalendario />
            default:
                return null
        }
    }

    return(
        <>
        <section className="bg-gray-300 grid items-center text-center h-[45vh]">
            <div>
                <h1 className="title">LIGA 15</h1>
                <p className="parrafos">Competición para jugadores menores de 15 años</p>
                <p className="text-gray-700">Temporada 2025 • 8 equipos • 15 Marzo 2025 - 30 Junio 2025</p>
            </div>
        </section>
            
        <section className="py-5 px-10">
            <div className=" grid grid-cols-4 gap-10">
                <CardEstadisticas title="equipos" descripcion="8"/>
                <CardEstadisticas title="Partidos" descripcion="24/32" subDescripcion="24 partidos jugados"/>
                <CardEstadisticas title="Goleador" descripcion="12" subDescripcion="Damian Bolio"/>
                <CardEstadisticas title="Estado" descripcion="En Curso" subDescripcion="15 Marzo 2025 - 30 Junio 2025"/>
            </div>

            <section className="bg-slate-200 inline-block px-4 py-2 my-5 rounded-lg">
                {listaOpciones.map((opcion, index) => (
                    <p
                        key={index}
                        className={`inline-block px-3 mx-2 cursor-pointer rounded-lg
                            ${index === opSeleccionado ? 'bg-white' : ''}`}
                        onClick={() => setOpSeleccionado(index)}
                    >
                        {opcion}
                    </p>
                ))}
            </section>

            <div className="border border-slate-300 rounded-lg px-5 py-2">
                <h1 className="font-bold text-2xl">{listaOpciones[opSeleccionado]}</h1>
                <br />
                {renderOpciones()}
            </div>

        </section>
        </>
    )
}

export default LigaDetalle;