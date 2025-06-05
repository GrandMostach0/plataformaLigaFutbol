import { Link } from "react-router";

function CardLiga({nombreLiga,estado, temporada, cantidadEquipos}){
    return(
        <div className="border border-slate-400 rounded-lg overflow-hidden">

            <img src="" alt="imagenLiga" className="h-[200px] object-cover bg-slate-400"/>

            <div className="px-2 py-2">
                <div className="flex items-center justify-between">
                    <h1 className="title3">{nombreLiga || 'Nombre LIGA'}</h1>
                    <p className="border px-4 py-1 rounded-lg text-xs">{estado || 'pendiente'}</p>
                </div>

                <p className="text-slate-600">Temporada: {temporada || 'Sin definir'}</p>
                <p className="text-slate-600">Equipos: {cantidadEquipos || 0}</p>
                <Link to="/liga" className="block border text-center py-1 rounded-lg text-sm my-3 bg-black text-white">Ver Liga</Link>
            </div>
        </div>
    )
}

export default CardLiga;