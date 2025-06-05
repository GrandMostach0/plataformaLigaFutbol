import { Link } from "react-router";
import SunIcon from "../assets/Icons/SunIcon";

function NavSection(){
    return(
        <header className="flex items-center justify-between py-4 px-10 sticky top-0 w-[100%] bg-white">
            <div className="flex items-center">
                <Link to="/" className="font-bold text-2xl">Liga de Fútbol</Link>
                <nav className="ml-10 text-sm font-semibold text-slate-700">
                    <Link className="item-Nav" to="/ligas">Ligas</Link>
                    <Link className="item-Nav" to="/equipos">Equipos</Link>
                    <Link className="item-Nav" to="/partidos">Partidos</Link>
                    <Link className="item-Nav" to="/clasificacion">Clasificación</Link>
                </nav>
            </div>

            <div className="flex items-center">
                <button className="px-2 py-1 cursor-pointer hover:bg-slate-200 rounded-lg">
                    <SunIcon/>
                </button>
                <Link className="buttonPrimary bg-slate-200" to="/inscripcion">Inscribe a tu equipo</Link>
                <Link className="buttonPrimary bg-black text-white" to="/contacto">Contacto</Link>
            </div>
        </header>
    );
}

export default NavSection;