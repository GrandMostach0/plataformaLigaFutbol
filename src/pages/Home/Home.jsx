import { Link } from "react-router";
import CardInforme from "./HomeComponents/cardInforme";
import { useState } from "react";
import CardPartido from "../../components/CardPartido";
import TablaPuntos from "../../components/TablaPuntos";

function Home(){
    const [opcionesPartidos, setOpcionesPartidos] = useState(0);
    const opPartidos = ['proximos', 'resultados'];
    const [selecTipoClasificacion, setSelecTipoClasificacion] = useState(0);
    const opcionSelecClasificacion = ['Mayor', 'Juvenil', 'Infantil'];

    return(
        <>
            <section className="text-center min-h-[70vh] py-40">
                <h1 className="title">LIGA DE FUTBOL 2025 - TECOH</h1>
                <p className="max-w-[700px] mx-auto mt-5 mb-10 text-2xl">Toda la emoción del fútbol en un solo lugar. Sigue a tu equipo favorito en todas las categorías.</p>
                <div>
                    <Link className="buttonPrincipal bg-black text-white" to="/partidos">Ver Partidos</Link>
                    <Link className="buttonPrincipal bg-slate-300" to="/clasificacion">Clasificación</Link>
                </div>
            </section>
            
            <section className="division">
                <h1 className="title">Bienvenido a la Liga de Fútbol</h1>
                <p className="parrafos">Descubre toda la información sobre nuestras competiciones, equipos y jugadores. Mantente al día con los resultados, clasificaciones y próximos partidos.</p>
                <div className="grid grid-cols-4 gap-5 my-5">
                    <CardInforme title="Ligas" number="12" description="3 mayores, 4 juveniles, 5 infantiles"/>
                    <CardInforme title="Equipos" number="148" description="+12 desde la temporada pasada"/>
                    <CardInforme title="Partidos" number="24" description="Este fin de semana"/>
                    <CardInforme title="Jugadores" number="2,450" description="En todas las categorías"/>
                </div>
            </section>

            <div className="division flex gap-4 text-left">
                <section className="flex-1/2">
                    <div className="flex items-center justify-between">
                        <h2 className="title3">Partidos</h2>
                        <div className="border-none py-1 px-2 rounded-lg bg-slate-200">
                            {opPartidos.map((opcion, index) => (
                                <p
                                    key={index}
                                    className={`cursor-pointer mx-1 py-1 px-3 text-sm inline-block
                                    ${index == opcionesPartidos ? 'bg-white rounded-lg font-bold' : 'text-red'}
                                    `}
                                    onClick={() => setOpcionesPartidos(index)}>
                                    {opcion}
                                </p>
                            ))}
                        </div>
                    </div>

                    <CardPartido equipoLocal="Puebla" equipoVisitante="Puebla2" categoria="infantil" fecha="12 Mayo 2025" horario="15:00" ubicacion="Estadio Municipal"/>

                    <CardPartido equipoLocal="Puebla" equipoVisitante="Puebla2" categoria="infantil" fecha="12 Mayo 2025" horario="15:00" ubicacion="Estadio Municipal"/>

                    <CardPartido equipoLocal="Puebla" equipoVisitante="Puebla2" categoria="infantil" fecha="12 Mayo 2025" horario="15:00" ubicacion="Estadio Municipal"/>

                    <CardPartido equipoLocal="Puebla" equipoVisitante="Puebla2" categoria="infantil" fecha="12 Mayo 2025" horario="15:00" ubicacion="Estadio Municipal"/>

                    <Link className="border block text-center bg-black text-white py-2 rounded-lg font-bold">Ver más</Link>

                </section>
                <section className="flex-1/3">
                    <h2 className="title3">Clasificación</h2>
                    <div className="border-none bg-slate-200 rounded-lg py-2 flex items-center justify-around">
                        {opcionSelecClasificacion.map((selec, index) => (
                            <p
                            key={index}
                            className={`px-6 py-1 rounded-lg cursor-pointer text-sm
                            ${index === selecTipoClasificacion ? 'bg-white font-bold' : ''}`}
                            onClick={() => setSelecTipoClasificacion(index)}>
                            {selec}
                            </p>
                        ))}
                    </div>

                    <TablaPuntos />

                    <Link className="border block text-center mt-5 py-1 text-sm rounded-lg border-slate-400">Ver tabla Completa </Link>
                </section>
            </div>
            <br />
            <br />
            <section className="division">
                <h1 className="title">Unete a nuestra Liga</h1>
                <p className="text-lg my-3">¿Quieres formar parte de nuestra comunidad? Inscribe a tu equipo en nuestras competiciones.</p>
                <div className="mt-10">
                    <Link className="buttonPrincipal bg-black text-white" to="/inscripcion">Inscribe tu equipo</Link>
                    <Link className="border py-2 px-5 rounded-lg border-slate-500" to="/contacto">Contactanos</Link>
                </div>
            </section>
        </>
    )
}

export default Home;