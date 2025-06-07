import { useState } from "react";
import TablaPosicionEquipos from "../../components/TablaPosicionEquipos";

function Clasificacion() {
    const [ligaSeleccionado, setLigaSeleccionado] = useState(0);
    const listaLigas = ['Infantil', 'Juvenil', 'Mayor', 'Femenil'];

    return(
        <>
        <div className="text-center my-5 py-5">
            <h1 className="title">Clasificación</h1>
            <p className="text-lg text-slate-700">Consulta la clasificación actual de todas las ligas</p>

            <div className="rounded-lg inline-block py-1 px-8 text-sm mt-5 bg-slate-200">
                {listaLigas.map((liga, index) => (
                    <p
                     className={`inline-block px-6 mx-2 border-none py-1 rounded-lg cursor-pointer
                     ${ index === ligaSeleccionado ? 'bg-white' : ''}`}
                     key={index}
                     onClick={() => setLigaSeleccionado(index)}
                     >
                        {liga}
                    </p>
                ))}
            </div>

            <div className="border border-slate-300 rounded-lg text-left w-[1200px] mx-auto my-5">
                <div className="border-b border-b-slate-300 px-10 py-2">
                    <h1 className="font-bold text-2xl">{listaLigas[ligaSeleccionado]}</h1>
                    <p className="text-gray-600 text-sm">Temporada 2025</p>
                </div>

                <div className="px-10 py-2">
                    <TablaPosicionEquipos />
                </div>
            </div>

        </div>
        </>
    )
}

export default Clasificacion;