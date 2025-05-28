import { useState } from "react";
import CardBeneficios from "./componentsInscripcion/CardBeneficios";
import FormularioInscripcion from "./componentsInscripcion/FormularioInscripcion";
import RequisitosInscripcion from "./componentsInscripcion/RequisitosInscripcion";
import PreguntasInscripcion from "./componentsInscripcion/PreguntasInscripcion";

function Inscripcion(){
    const listaBeneficios = [
        {
            tituloBeneficio: "Múltiples Categorías",
            descripcion: "Ligas para todas las edades y niveles",
            detallesBeneficios: [
                "Fútbol Mayor (18+ años)",
                "Fútbol Juvenil (15-17 años)",
                "Fútbol Infantil (9-14 años)",
            ]
        },
        {
            tituloBeneficio: "Temporada Completa",
            descripcion: "Calendario organizado y competitivo",
            detallesBeneficios: [
                "Fase Regular + playoffs",
                "Mínimo 14 partidos garantizados",
                "Torneo de copa adicionales",
            ]
        },
        {
            tituloBeneficio: "Precios Accesibles",
            descripcion: "Opciones para todos los presupuestos",
            detallesBeneficios: [
                "Inscripción desde $1,500 MXN",
                "Descuento para equipos juveniles",
                "Opciones de pago flexibles",
            ]
        }
    ]
    const [opSeleccionada, setOpSeleccionada] = useState('Formulario');
    const listaOpciones = ['Formulario', 'Requisitos', 'Preguntas Frecuentes']

    const renderContenido = () => {
        switch(opSeleccionada){
            case "Formulario":
                return <FormularioInscripcion />
            case "Requisitos":
                return <RequisitosInscripcion />
            case "Preguntas Frecuentes":
                return <PreguntasInscripcion />
            default:
                return null;
        }
    }

    return(
        <div className="w-[60%] m-auto">
            <div className="text-center py-15">
                <h1 className="title">Inscribe tu equipo en la Liga</h1>
                <p className="parrafos">Forma parte de nuestra comunidad deportiva y compite en las mejores instalaciones con equipos de tu nivel.</p>
            </div>

            <section className="grid grid-cols-3 gap-5">
                {listaBeneficios.map((beneficio, i) =>(
                    <CardBeneficios
                        key={i}
                        title={beneficio.tituloBeneficio}
                        parrafo={beneficio.descripcion}
                        listaBeneficios={beneficio.detallesBeneficios}
                    />
                ))}
            </section>

            <section className="division">
                <div className="flex items-center justify-around bg-slate-200 rounded-lg py-1 mx-auto mb-5">
                    {listaOpciones.map((opcion, i) => (
                        <p
                            key={i}
                            className={`px-8 py-2 text-sm cursor-pointer
                                ${opcion === opSeleccionada ? 'bg-white rounded-lg' : ''}
                            `}
                            onClick={() => setOpSeleccionada(opcion)}
                        >
                            {opcion}
                        </p>
                    ))}
                </div>

                <div>
                    {renderContenido()}
                </div>
            </section>

            <div className="text-center mb-20 py-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-help h-12 w-12 text-muted-foreground m-auto"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                <h1 className="mt-5 mb-2 text-2xl font-bold">¿Necesitas ayuda adicional?</h1>
                <p className="text-slate-600">Nuestro equipo está disponible para resolver cualquier duda sobre el proceso de inscripción.</p>
                <button className="my-5 border-none px-8 py-2 rounded-lg bg-slate-950 text-white">Contacta al equipo del liga</button>
            </div>
        </div>
    )
}

export default Inscripcion;