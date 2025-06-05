

function CardEstadisticas ({title, descripcion, subDescripcion}) {
    return(
        <div className="border border-slate-300 py-2 px-4 rounded-lg">
            <div>
                <h2 className="font-bold text-base">{title}</h2>
            </div>
            <p className="text-2xl font-bold">{descripcion}</p>
            <p className="text-slate-600 mt-1 text-sm">{subDescripcion}</p>
        </div>
    )
}

export default CardEstadisticas;