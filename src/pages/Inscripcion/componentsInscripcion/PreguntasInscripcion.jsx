import { useState } from "react";
import Acordion from "../../../components/Acordion";
function PreguntasInscripcion () {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    const items = [
        {
        title: "¿Cuándo comienza la próxima temporada?",
        content: "La temporada 2025 comenzará el 15 de marzo de 2025. Las inscripciones están abiertas desde el 1 de diciembre de 2024 hasta el 15 de febrero de 2025, o hasta agotar los cupos disponibles."
        },
        {
        title: "¿Puedo inscribir jugadores durante la temporada?",
        content: "Sí, se permite registrar nuevos jugadores hasta la mitad de la temporada regular. Después de ese punto, solo se permitirán cambios en casos excepcionales (lesiones graves, cambio de residencia, etc.) y previa aprobación del comité de la liga."
        },
        {
        title: "¿Que sucede si no tenemos campo propio?",
        content: "No hay problema. La liga cuenta con varios campos disponibles que pueden ser asignados a los equipos que no tienen instalaciones propias. Existe un costo adicional por el uso de estos campos que varía según la ubicación y las características de cada uno. Este costo se divide entre los equipos que juegan cada partido."
        }
    ];

    return(
        <div className="border py-3 px-4 text-left border-slate-300 rounded-lg">
            <h1 className="text-2xl font-semibold">Preguntas Frecuentes</h1>
            <p className="text-sm text-slate-600">Respuestas a las dudas más comunes sobre el proceso de inscripción.</p>

            {items.map((item, index) => (
                <Acordion
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => toggleIndex(index)}
                >
                    {item.content}
                </Acordion>
            ))}

        </div>
    )
}

export default PreguntasInscripcion;