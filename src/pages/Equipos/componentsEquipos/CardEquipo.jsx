import { Link } from "react-router";
function CardEquipo({categoria, nameEquipo, description, cantJugadores, ubicacion, cantPuntos, fundacion, cantGanadas, cantPerdidas, cantEmpeatados}){
    return(
        <div className="border px-4 py-3 border-slate-300 rounded-lg hover:scale-105 hover:shadow-2xl">
            
            <div className="flex items-center">
                <img src="" alt="imagenEquipo" className="bg-gray-800 h-[80px] w-[80px] mr-3 rounded-lg object-cover" />
                <div>
                    <h1 className="font-bold text-xl">{nameEquipo}</h1>
                    <p className="border inline-block px-3 py-0.5 text-xs rounded-lg border-slate-400 ">{categoria}</p>
                    <p className="border inline-block px-3 py-0.5 text-xs rounded-lg border-slate-400 ml-2">#1</p>
                </div>
            </div>
            
            <p className="text-slate-600 my-2 text-base">{description}</p>

            <div className="grid grid-cols-2 text-slate-600">
                <p>Jugadores: <span className="text-black">{cantJugadores}</span></p>
                <p>Puntos: <span className="text-black">{cantPuntos}</span></p>
                <p className="text-black">{ubicacion}</p>
                <p>Fundado: <span className="text-black">{fundacion}</span></p>
            </div>

            <div className="border-t border-slate-400 mt-2 flex justify-between text-slate-600 py-1">
                <p>V: {cantGanadas}</p>
                <p>E: {cantEmpeatados}</p>
                <p>D: {cantPerdidas}</p>
            </div>

            <Link to="/equipos/equipoInfo" className="block text-center rounded-lg bg-slate-400 text-white font-semibold mt-5">Ver Equipo</Link>
        </div>
    )
}

export default CardEquipo;