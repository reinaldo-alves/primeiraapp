import './App.css';
import React from 'react';
import Home from './pages/home';
import Estudo from './pages/contato/estudo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/detalhes/detalhes';

function App() {
  
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Estudo />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/detalhes/:id' element={<Detalhes />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//BrowserRouter deve envolver a raiz da nossa aplicação
//Routes envolve todas as nossas rotas
//Route serve para criar a rota
