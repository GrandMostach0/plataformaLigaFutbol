
const CardBeneficios = ({title, parrafo, listaBeneficios}) => {
    return(
        <div className="border px-3 py-3 border-slate-300 rounded-lg">
            <h1 className="title3 mb-1">{title}</h1>
            <p className="text-base text-slate-700">{parrafo}</p>

            {listaBeneficios.map((beneficio, index) => (
                <p key={index} className="flex items-center text-slate-700 text-sm my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-500 mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                    {beneficio}
                </p>
            ))}
        </div>


    )
}

export default CardBeneficios;