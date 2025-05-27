import { Link } from "react-router";

function NavSection(){
    return(
        <header className="flex items-center justify-between py-4 px-10">
            <div className="flex items-center">
                <h1 className="font-bold text-2xl">Liga de Fútbol</h1>
                <nav className="ml-10 text-base">
                    <Link className="item-Nav" to="/ligas">Ligas</Link>
                    <Link className="item-Nav" to="/equipos">Equipos</Link>
                    <Link className="item-Nav" to="/partidos">Partidos</Link>
                    <Link className="item-Nav" to="/clasificacion">Clasificación</Link>
                </nav>
            </div>

            <div>
                <Link className="buttonPrimary bg-slate-200" to="/inscripcion">Inscribe a tu equipo</Link>
                <Link className="buttonPrimary bg-black text-white" to="/contacto">Contacto</Link>
            </div>
        </header>
    );
}

export default NavSection;