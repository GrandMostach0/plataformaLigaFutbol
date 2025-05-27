import { Link } from "react-router";
import CardInforme from "./HomeComponents/cardInforme";
function Home(){
    return(
        <>
            <section className="text-center min-h-[60vh] py-30">
                <h1 className="title">LIGA DE FUTBOL 2025 - TECOH</h1>
                <p className="max-w-[700px] mx-auto mt-5 mb-10 text-xl">Toda la emoción del fútbol en un solo lugar. Sigue a tu equipo favorito en todas las categorías.</p>
                <div>
                    <Link className="buttonPrincipal bg-black text-white" to="/partidos">Ver Pártidos</Link>
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
                <section className="border flex-1/2">
                    <h2 className="title3">Partidos</h2>
                </section>
                <section className="border flex-1/3">
                    <h2 className="title3">Clasificación</h2>
                </section>
            </div>
        </>
    )
}

export default Home;