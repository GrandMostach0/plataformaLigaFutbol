import { Link } from "react-router";
function PartidoDetalles(){
    return(
        <>
        <div className="flex items-center">
            <Link className="px-3 mx-2" to="/partidos">&larr; Volver a partidos</Link>
            <p className="border border-gray-300 rounded-lg text-sm px-3 mx-1">Jornada 9</p>
            <p className="bg-green-200 text-green-900 font-semibold text-sm px-3 rounded-lg mx-1 cursor-default">En Curso</p>
            <p className="bg-blue-200 text-blue-900 font-semibold text-sm px-3 rounded-lg mx-1 cursor-default">Programado</p>
            <p className="bg-yellow-200 text-yellow-900 font-semibold text-sm px-3 rounded-lg mx-1 cursor-default">Pendiente</p>
            <p className="bg-red-200 text-red-900 font-semibold text-sm px-3 rounded-lg mx-1 cursor-default">Cancelado</p>
        </div>
        

        <section className="border rounded-lg border-slate-300 text-center py-5 px-10 my-5 ">
            <h1 className="font-bold text-4xl mb-2">Toros FC vs Escorpiones FC</h1>
            <p className="text-lg text-gray-600 font-semibold">Liga Sub 15</p>

            <div className=" flex items-center justify-between my-2">

                <div className="flex-1/2 ">
                    <img src="" alt="" className="m-auto h-[150px] w-[150px] rounded-lg border-none bg-gray-600" />
                    <p className="font-bold text-2xl">Toros FC</p>
                    <p className="text-gray-600">Local</p>
                </div>

                <div className="flex-1/3">
                    <h3 className="font-bold text-5xl text-gray-500">15:00 p.m</h3>
                    <p className="text-base text-gray-600 mt-2">miércoles, 24 de enero de 2024</p>
                </div>

                <div className="flex-1/2 ">
                    <img src="" alt="" className="m-auto h-[150px] w-[150px] rounded-lg border-none bg-gray-600" />
                    <p className="font-bold text-2xl">Escorpiones FC</p>
                    <p className="text-gray-600">Visitante</p>
                </div>

            </div>

            <div className="grid grid-cols-4 text-slate-700 py-5 pt-2">
                <p>24/1/2024</p>
                <p>15:00 p.m</p>
                <p>Campo Telchaquillo</p>
                <p>Rabeli</p>
            </div>
        </section>

        <div className="w-[50%] m-auto hidden">
            <h2 className="font-bold text-2xl text-center">Informacion del Partido</h2>
            <br />
            <div className="grid grid-cols-2">
                
                <div className="mb-4">
                    <p className="font-bold">Fecha</p>
                    <p>miércoles, 24 de enero de 2024</p>
                </div>

                <div className="mb-4">
                    <p className="font-bold">Hora</p>
                    <p>15:00</p>
                </div>

                <div className="mb-4">
                    <p className="font-bold">Campo</p>
                    <p>Campo Telchaquillo</p>
                </div>

                <div className="mb-4">
                    <p className="font-bold">Arbrito</p>
                    <p>Rabeli</p>
                </div>

                <div className="mb-4">
                    <p className="font-bold">Categoria</p>
                    <p>Sub 15</p>
                </div>
            </div>
        </div>

        </>
    )
}

export default PartidoDetalles;