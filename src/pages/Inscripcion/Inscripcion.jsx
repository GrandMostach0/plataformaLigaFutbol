import { useState } from "react";
import CardBeneficios from "./componentsInscripcion/CardBeneficios";

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

    return(
        <>
            <div className="text-center py-15">
                <h1 className="title">Inscribe tu equipo en la Liga</h1>
                <p className="parrafos">Forma parte de nuestra comunidad deportiva y compite en las mejores instalaciones con equipos de tu nivel.</p>
            </div>

            <section className="px-10 grid grid-cols-3 gap-10">
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
                <div className="flex items-center justify-around bg-slate-200 rounded-lg py-1">
                    {listaOpciones.map((opcion, i) => (
                        <p
                            key={i}
                            className={`px-4 py-1 text-sm cursor-pointer
                                ${opcion === opSeleccionada ? 'bg-white rounded-lg' : ''}
                            `}
                            onClick={() => setOpSeleccionada(opcion)}
                        >
                            {opcion}
                        </p>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Inscripcion;