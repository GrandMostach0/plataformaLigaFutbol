import { Link } from "react-router"
function CardPartido({categoria, equipoLocal, equipoVisitante, fecha, horario, ubicacion}){
    return(
        <div className="border px-3 py-4 border-slate-400 rounded-lg">

            <p className=" border border-slate-400 text-xs inline-block py-1 px-2 rounded-lg mb">{categoria}</p>

            <div className="my-2 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="bg-black w-[50px] h-[50px] mr-2 rounded-full"></div>
                    <p className="font-bold text-lg">{equipoLocal}</p>
                </div>
                <p className="font-bold">vs</p>
                <div className="flex items-center">
                    <p className="font-bold text-lg">{equipoVisitante}</p>
                    <div className="bg-black w-[50px] h-[50px] ml-2 rounded-full"></div>
                </div>
            </div>

            <p className="text-sm text-slate-700">{fecha} • {horario}</p>
            <p className="text-sm text-slate-700">{ubicacion}</p>

            <Link className="border border-slate-400 block text-center py-2 text-sm my-2 rounded-lg" to="/partido">Detalles del Partido</Link>
        </div>
    )
}

export default CardPartido;