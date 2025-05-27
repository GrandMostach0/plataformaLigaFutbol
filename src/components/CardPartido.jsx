import { Link } from "react-router"
function CardPartido({categoria, equipoLocal, equipoVisitante, fecha, ubicacion}){
    return(
        <div className="">

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <p>{equipoLocal}</p>
                </div>
                <p className="font-bold">vs</p>
                <div className="flex items-center">
                    <p>{equipoVisitante}</p>
                </div>
            </div>

            <p>{fecha}</p>
            <p>{ubicacion}</p>

            <Link className="buttonPrincipal border" to="/partido">Detalles del Partido</Link>
        </div>
    )
}

export default CardPartido;