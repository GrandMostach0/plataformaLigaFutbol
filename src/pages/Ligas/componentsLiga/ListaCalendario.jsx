import { useState } from "react";
import CardPartido from "../../../components/CardPartido";


const ListaCalendario = () => {

    const [opSeleccionado, setOpSeleccionado] = useState(0);
    const listaOpciones = ['Próximos', 'Completados'];
    
    return(
        <section>
            <div className="flex items-center justify-between bg-slate-200 px-3 py-2 rounded-lg gap-3">
                {listaOpciones.map((opcion, index) => (
                    <p
                        key={index}
                        className={`flex-1/2 text-center py-2 cursor-pointer text-black
                            ${index === opSeleccionado ? 'bg-white' : 'text-gray-500'}`}
                        onClick={() => setOpSeleccionado(index)}
                    >
                        {opcion}
                    </p>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-8 py-5">
                <CardPartido />
                <CardPartido />
                <CardPartido />
                <CardPartido />
                <CardPartido />
            </div>

        </section>
    )
}

export default ListaCalendario;