import CardRequisitos from "./CardRequisitos";

const RequisitosInscripcion = () => {
    return(
        <div className="border py-3 px-2 text-left border-slate-300 rounded-lg">
            <h1 className="text-2xl font-semibold">Requisitos para la Inscripción</h1>
            <p className="text-sm text-slate-600">Todos los equipos deben cumplir con estos requisitos para participar en nuestras ligas.</p>

            <div className="my-3 grid grid-cols-2 gap-5">
                <CardRequisitos />
                <CardRequisitos />
                <CardRequisitos />
                <CardRequisitos />
            </div>

            

        </div>
    )
}

export default RequisitosInscripcion;