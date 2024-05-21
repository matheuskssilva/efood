import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Perfil } from './pages/Perfil'

export const Rotas = () => (
    <div className="container">
        <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/perfil/:id' element={<Perfil />} />
    </Routes>
    </div>
)
