import CardEstadisticas from "./CardEstadisticas";
import TablaEstadisticas from "./TablaEstadisticas";

function EquipoInformacion(){

    const estadisticaEquipo = [
        {
            id: 1,
            title: 'Posición',
            descripcion: '1°',
            subDescripcion: '16 puntos'
        },
        {
            id:2,
            title: 'Balance',
            descripcion: '5G 1E 0P',
            subDescripcion: '6 partidos jugados'
        },
        {
            id:3,
            title: 'Goles',
            descripcion: '18 - 4',
            subDescripcion: 'Diferencia: +14'
        },
        {
            id:4,
            title: 'Goleador',
            descripcion: '8',
            subDescripcion: 'Damian Bolio'
        }
    ]

    return(
        <>
        <div className="border bg-gray-300 flex items-center px-10 h-[35vh]">
            <img src="" alt="portada imagen" className="h-[60%] w-[12%] border-none rounded-lg bg-black object-cover"/>
            <div className="ml-5">
                <h1 className="font-bold text-4xl">TOROS FC</h1>
                <p className="text-lg mt-1">Liga sub 15</p>
            </div>
        </div>

        <section className="my-5 px-20">
            <div className="grid grid-cols-4 gap-5 py-2">
                {estadisticaEquipo.map((esta) => (
                    <CardEstadisticas title={esta.title} descripcion={esta.descripcion} subDescripcion={esta.subDescripcion}/>
                ))}
            </div>

            <div className="flex mt-5 gap-5">
                <section className="flex-1/4 border border-slate-300 rounded-lg px-3 py-2">
                    <h1 className="title3">Informacion del Equipo</h1>
                    <p className="text-slate-600 text-base">Toros FC es un equipo juvenil fundado en 2010 con el objetivo de formar jugadores de élite. Ha ganado 3 campeonatos en su categoría y es reconocido por su estilo de juego ofensivo.</p>

                    <div className="flex justify-between my-2 text-left">
                        <div className="flex-1/2">
                            <h2 className="text-slate-600 font-semibold">Fundado</h2>
                            <p>2010</p>
                        </div>
                        <div className="flex-1/2">
                            <h2 className="text-slate-600 font-semibold">Liga</h2>
                            <p>Liga Sub 15</p>
                        </div>
                    </div>

                    <h2 className="text-slate-600 font-semibold mt-4">Estadio</h2>
                    <p>Campo Telchaquillo</p>

                    <h2 className="text-slate-600 font-semibold mt-4">Entrenador</h2>
                    <p>Gregorio May</p>
                    <p className="text-slate-600">+52 99994552020</p>
                    <p className="text-slate-600">gregorio@torosfc.com</p>

                </section>

                <section className="flex-1/2 border border-slate-300 rounded-lg px-3 py-2">
                    <h1 className="title3">Detalles del Equipo</h1>
                    <TablaEstadisticas />
                </section>
            </div>

        </section>

        </>
    )
}

export default EquipoInformacion;