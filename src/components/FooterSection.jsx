import { Link } from "react-router";

function FooterSection(){
    return(
        <div className="border mt-5 border-t-slate-400 px-10 py-10">
            <div className="flex justify-center gap-20">
                <section className="sectionFooter">
                    <h1 className="font-bold mb-2">Liga de Fútbol</h1>
                    <p className="text-sm text-slate-700">Promoviendo el deporte y los valores del fútbol desde 2010.</p>
                </section>

                <section className="sectionFooter">
                    <h1 className="font-bold mb-2">Ligas</h1>
                    <Link className="sectionFooterLinks" to="">Fútbol Mayor</Link>
                    <Link className="sectionFooterLinks" to="">Fútbol Juvenil</Link>
                    <Link className="sectionFooterLinks" to="">Fútbol Infantil</Link>
                    <Link className="sectionFooterLinks" to="">Fútbol Femenino</Link>
                </section>

                <section className="sectionFooter">
                    <h1 className="font-bold mb-2">Enlaces</h1>
                    <Link className="sectionFooterLinks" to="">Noticias</Link>
                    <Link className="sectionFooterLinks" to="">Calendario</Link>
                    <Link className="sectionFooterLinks" to="">Galerías</Link>
                    <Link className="sectionFooterLinks" to="">Documentos</Link>
                </section>

                <section className="sectionFooter">
                    <h1 className="font-bold mb-2">Contacto</h1>
                    <p className="text-sm text-slate-700">Estadio Municipal, Calle Principal 123</p>
                    <p className="text-sm text-slate-700"><strong>Email:</strong> info@ligadefutbol.com </p>
                    <p className="text-sm text-slate-700"><strong>Télefono:</strong> +123 456 7890 </p>
                </section>
            </div>
            <div className="border border-white border-t-slate-400 text-center mt-5 pt-5">
                <p className="text-sm  text-slate-700">© 2025 Liga de Fútbol. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default FooterSection;