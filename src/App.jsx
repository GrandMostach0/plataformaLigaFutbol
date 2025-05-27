import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Ligas from './pages/Ligas/Ligas'
import Error404 from './components/Error404'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/ligas' element={<Ligas />}/>
          <Route path='*' element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
