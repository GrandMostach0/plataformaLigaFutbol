import { useEffect, useState } from "react";
import CardPartido from '../../components/CardPartido'
function Partidos() {
    const [opcionSeleccionado, setOpcionSeleccionado] = useState(0);
    const ligasEquipos = ['todos', 'juvenil', 'mayor', 'femenil'];

    const [opSec, setOpSec] = useState(0);
    const fechaPartidos = ['Próximos Partidos', 'Resultados'];

    useEffect(() => {
        setOpSec(0);
    }, [opcionSeleccionado]);

    return(
        <>
        <div className="text-center my-5 py-5">
            <h1 className="title">Partidos</h1>
            <p className="text-lg text-slate-700">Consulta todos los partidos de nuestras competiciones, resultados y próximos encuentros</p>

            <div className="flex items-center justify-between px-20">
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

                <div className="rounded-lg inline-block py-1 px-8 text-sm mt-5 bg-slate-200">
                    {fechaPartidos.map((liga, index) => (
                        <p
                        className={`inline-block px-6 mx-2 border-none py-1 rounded-lg cursor-pointer
                            ${ index === opSec ? 'bg-white' : ''}
                            `}
                        key={index}
                        onClick={() => setOpSec(index)}
                        >
                            {liga}
                        </p>
                    ))}
                </div>
            </div>
        </div>

        <section className="px-20">
            <p className="font-bold text-2xl">{fechaPartidos[opSec]}</p>
            <br />
            <div className="grid grid-cols-3 gap-5">
                <CardPartido />
                <CardPartido />
                <CardPartido />
                <CardPartido />
                <CardPartido />
                <CardPartido />
            </div>

        </section>

        </>
    )
}

export default Partidos;