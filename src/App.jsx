import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
