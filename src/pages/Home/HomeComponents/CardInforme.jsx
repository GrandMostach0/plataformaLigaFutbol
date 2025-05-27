function CardInforme({title, number, description}){
    return(
        <div className="border border-slate-400 rounded-lg text-left px-5 py-5">
            <div>
                <p className="font-bold text-sm">{title}</p>
            </div>
            <h2 className="font-bold text-2xl my-2">{number}</h2>
            <p className="text-xs">{description}</p>
        </div>
    )
}

export default CardInforme;