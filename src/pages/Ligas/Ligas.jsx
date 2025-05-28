import { useState } from "react";
import CardLiga from "./componentsLiga/cardLiga";

function Ligas() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("Todas");

  const listaLigas = {
    "Fútbol Mayor": [
      {
        id: 1,
        nombreLiga: "Liga 1",
        temporada: "2024",
        estado: "Activa",
        cantidadEquipos: 8,
      },
      {
        id: 2,
        nombreLiga: "Liga 2",
        temporada: "2024",
        estado: "Inactiva",
        cantidadEquipos: 10,
      },
      {
        id: 3,
        nombreLiga: "Liga 3",
        temporada: "2024",
        estado: "Activa",
        cantidadEquipos: 10,
      },
    ],
    "Fútbol Juvenil": [
      {
        id: 4,
        nombreLiga: "Liga 1",
        temporada: "2024",
        estado: "Activa",
        cantidadEquipos: 8,
      },
      {
        id: 5,
        nombreLiga: "Liga 2",
        temporada: "2024",
        estado: "Inactiva",
        cantidadEquipos: 10,
      },
      {
        id: 6,
        nombreLiga: "Liga 3",
        temporada: "2024",
        estado: "Activa",
        cantidadEquipos: 10,
      },
    ],
    "Fútbol Infantil": [
      {
        id: 7,
        nombreLiga: "Liga 1",
        temporada: "2024",
        estado: "Activa",
        cantidadEquipos: 8,
      },
      {
        id: 8,
        nombreLiga: "Liga 2",
        temporada: "2024",
        estado: "Inactiva",
        cantidadEquipos: 10,
      },
      {
        id: 9,
        nombreLiga: "Liga 3",
        temporada: "2024",
        estado: "Activa",
        cantidadEquipos: 10,
      },
    ],
  };

  const listaLigasCategorias = ["Todas", ...Object.keys(listaLigas)];

  return (
    <>
      <div className="text-center pt-10 pb-5 px-10">
        <h1 className="text-3xl font-bold">Ligas</h1>
        <p className="textoNormal">Explora nuestras competiciones</p>
      </div>

      <section className="px-4 text-center">
        <div className="my-5 inline-block px-2 py-1 bg-slate-200 rounded-lg">
          {listaLigasCategorias.map((liga, index) => (
            <p
              className={`inline-block mx-5 px-4 py-1 rounded-lg text-sm cursor-pointer ${
                opcionSeleccionada === liga ? "bg-white" : ""
              }`}
              onClick={() => setOpcionSeleccionada(liga)}
              key={index}
            >
              {liga}
            </p>
          ))}
        </div>

        {opcionSeleccionada === "Todas" ? (
          Object.entries(listaLigas).map(([categoria, ligas]) => (
            <div key={categoria} className="mb-8">
              <h2 className="title2 mb-2">{categoria}</h2>
              <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                {ligas.map((liga) => (
                  <CardLiga
                    key={liga.id}
                    nombreLiga={liga.nombreLiga}
                    estado={liga.estado}
                    temporada={liga.temporada}
                    cantidadEquipos={liga.cantidadEquipos}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="mb-8">
            <h2 className="title2 mb-2">{opcionSeleccionada}</h2>
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(450px,1fr))]">
              {(listaLigas[opcionSeleccionada] || []).map((liga) => (
                <CardLiga
                  key={liga.id}
                  nombreLiga={liga.nombreLiga}
                  estado={liga.estado}
                  temporada={liga.temporada}
                  cantidadEquipos={liga.cantidadEquipos}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Ligas;
