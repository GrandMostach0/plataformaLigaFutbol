import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Ligas from './pages/Ligas/Ligas'
import Error404 from './components/Error404'
import Equipos from './pages/Equipos'
import Clasificacion from './pages/Clasificacion'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/ligas' element={<Ligas />}/>
          <Route path='/equipos' element={<Equipos />}/>
          <Route path='/clasificacion' element={<Clasificacion />}/>
          <Route path='*' element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
