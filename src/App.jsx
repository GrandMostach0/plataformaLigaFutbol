import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Ligas from './pages/Ligas/Ligas'
import Equipos from './pages/Equipos/Equipos'
import EquipoInformacion from './pages/Equipos/componentsEquipos/EquipoInformacion'
import Partidos from './pages/Partidos/Partidos'
import PartidoDetalles from './pages/Partidos/PartidoDetalles'
import Clasificacion from './pages/Clasificacion/Clasificacion'
import Inscripcion from './pages/Inscripcion/Inscripcion'
import Error404 from './components/Error404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/ligas' element={<Ligas />}/>
          <Route path='/equipos' element={<Equipos />}/>
          <Route path="/equipos/equipoInfo" element={<EquipoInformacion />}/>

          <Route path='/clasificacion' element={<Clasificacion />}/>
          <Route path='/partidos' element={<Partidos />}/>
          <Route path='/partidos/partidoDetalle' element={<PartidoDetalles />} />

          <Route path="/inscripcion" element={<Inscripcion />}/>
          <Route path='*' element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
